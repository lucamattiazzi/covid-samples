import React, { useState, useEffect } from 'react'
import { runSimulation } from './lib'
import {
  DIFFUSION,
  POOL_SIZE,
  SAMPLES_NUMBER,
  POOL_NUMBER,
  FALSE_POSITIVE_RATIO,
  FALSE_NEGATIVE_RATIO,
  THRESHOLD,
} from './constants'
import { renderRatio, saveStateInQuery, loadStateFromQuery } from './utils'
import { Range, Column } from './Components'

export function App() {
  const baseState = loadStateFromQuery()

  const [diffusion, setDiffusion] = useState(baseState.diffusion ?? DIFFUSION.default)
  const [samplesNumber, setSamplesNumber] = useState(baseState.samplesNumber ?? SAMPLES_NUMBER.default)
  const [poolSize, setPoolSize] = useState(baseState.poolSize ?? POOL_SIZE.default)
  const [poolNumber, setPoolNumber] = useState(baseState.poolNumber ?? POOL_NUMBER.default)
  const [falsePositiveRatio, setFalsePositiveRatio] = useState(baseState.falsePositiveRatio ?? FALSE_POSITIVE_RATIO.default)
  const [falseNegativeRatio, setFalseNegativeRatio] = useState(baseState.falseNegativeRatio ?? FALSE_NEGATIVE_RATIO.default)
  const [threshold, setThreshold] = useState(baseState.threshold ?? THRESHOLD.default)

  const [falsePositives, setFalsePositives] = useState(0)
  const [falseNegatives, setFalseNegatives] = useState(0)
  const [minPoolsPerSample, setMinPoolsPerSample] = useState(0)
  const [maxPoolsPerSample, setMaxPoolsPerSample] = useState(0)

  function safeSetPoolNumber(value: number) {
    setPoolNumber(Math.min(value, samplesNumber))
  }

  function safeSetSamplesNumber(value: number) {
    setSamplesNumber(value)
    setPoolNumber(Math.min(poolNumber, value))
  }

  function startSimulation() {
    const [
      newFalsePositives,
      newFalseNegatives,
      newMinPoolsPerSample,
      newMaxPoolsPerSample,
    ] = runSimulation(
      samplesNumber,
      diffusion,
      poolSize,
      poolNumber,
      falsePositiveRatio,
      falseNegativeRatio,
      threshold
    )
    setFalsePositives(newFalsePositives)
    setFalseNegatives(newFalseNegatives)
    setMinPoolsPerSample(newMinPoolsPerSample)
    setMaxPoolsPerSample(newMaxPoolsPerSample)
  }

  function resetValues() {
    setDiffusion(DIFFUSION.default)
    setSamplesNumber(SAMPLES_NUMBER.default)
    setPoolSize(POOL_SIZE.default)
    setPoolNumber(POOL_NUMBER.default)
    setFalsePositiveRatio(FALSE_POSITIVE_RATIO.default)
    setFalseNegativeRatio(FALSE_NEGATIVE_RATIO.default)
    setThreshold(THRESHOLD.default)
  }

  useEffect(() => {
    saveStateInQuery({
      diffusion,
      samplesNumber,
      poolSize,
      poolNumber,
      falsePositiveRatio,
      falseNegativeRatio,
      threshold,
    })
  }, [
    diffusion,
    samplesNumber,
    poolSize,
    poolNumber,
    falsePositiveRatio,
    falseNegativeRatio,
    threshold,
  ])

  return (
    <div className="w-100 h-100 flex items-center justify-around">
      <Column title="VARIABLES" buttonText="RESET VALUES" buttonFn={resetValues}>
        <div className="pv2 w-80 tc f4">Non arbitrary</div>
        <div className="pv1 w-80">
          <div className="w-100 tc pv1">
            Diffusion of COVID among tested ({renderRatio(diffusion)})
          </div>
          <Range constants={DIFFUSION} variable={diffusion} setVariable={setDiffusion} />
        </div>
        <div className="pv1 w-80">
          <div className="w-100 tc pv1">Number of people to be tested ({samplesNumber})</div>
          <Range
            constants={SAMPLES_NUMBER}
            variable={samplesNumber}
            setVariable={safeSetSamplesNumber}
          />
        </div>
        <div className="pv1 w-80">
          <div className="w-100 tc pv1">
            Prior false positive ratio ({renderRatio(falsePositiveRatio)})
          </div>
          <Range
            constants={FALSE_POSITIVE_RATIO}
            variable={falsePositiveRatio}
            setVariable={setFalsePositiveRatio}
          />
        </div>
        <div className="pv1 w-80">
          <div className="w-100 tc pv1">
            Prior false negative ratio ({renderRatio(falseNegativeRatio)})
          </div>
          <Range
            constants={FALSE_NEGATIVE_RATIO}
            variable={falseNegativeRatio}
            setVariable={setFalseNegativeRatio}
          />
        </div>
        <div className="pv2 w-80 tc f4">Arbitrary</div>
        <div className="pv1 w-80">
          <div className="w-100 tc pv1">Number of pools to create ({poolNumber})</div>
          <Range constants={POOL_NUMBER} variable={poolNumber} setVariable={safeSetPoolNumber} />
        </div>
        <div className="pv1 w-80">
          <div className="w-100 tc pv1">Number of people in each pool ({poolSize})</div>
          <Range constants={POOL_SIZE} variable={poolSize} setVariable={setPoolSize} />
        </div>

        <div className="pv1 w-80">
          <div className="w-100 tc pv1">
            Positive ratio for considering a person positive ({renderRatio(threshold)})
          </div>
          <Range constants={THRESHOLD} variable={threshold} setVariable={setThreshold} />
        </div>
      </Column>
      <Column title="RESULTS" buttonText="RUN SIMULATION" buttonFn={startSimulation}>
        <div className="pv2 w-80 tc f4">Precomputed</div>
        <div className="w-100 tc">
          Compression ratio: {renderRatio(1 - poolNumber / samplesNumber)}
        </div>
        <div className="w-100 tc pb3">
          Avg pools per sample: {((poolNumber * poolSize) / samplesNumber).toFixed(2)}
        </div>
        <div className="pv2 w-80 tc f4">Simulated</div>
        <div className="w-100 tc">
          Total false positives: {falsePositives}/{samplesNumber}
        </div>
        <div className="w-100 tc pb2">
          Total false positive ratio: {renderRatio(falsePositives / samplesNumber)}
        </div>
        <div className="w-100 tc">
          Total false negatives: {falseNegatives}/{samplesNumber}
        </div>
        <div className="w-100 tc pb2">
          Total false negative ratio: {renderRatio(falseNegatives / samplesNumber)}
        </div>
        <div className="w-100 tc">Min pools per sample: {minPoolsPerSample}</div>
        <div className="w-100 tc">Max pools per sample: {maxPoolsPerSample}</div>
      </Column>
    </div>
  )
}
