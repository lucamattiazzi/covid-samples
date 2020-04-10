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
import { renderRatio } from '../utils'
import { Range } from '../Common'
import { getHeatmapData } from './generate-heatmap'
const Plotly = require('plotly.js-dist')

export function Component() {
  const [diffusion, setDiffusion] = useState(DIFFUSION.default)
  const [samplesNumber, setSamplesNumber] = useState(SAMPLES_NUMBER.default)
  const [poolSize, setPoolSize] = useState(POOL_SIZE.default)
  const [poolNumber, setPoolNumber] = useState(POOL_NUMBER.default)
  const [falsePositiveRatio, setFalsePositiveRatio] = useState(FALSE_POSITIVE_RATIO.default)
  const [falseNegativeRatio, setFalseNegativeRatio] = useState(FALSE_NEGATIVE_RATIO.default)
  const [threshold, setThreshold] = useState(THRESHOLD.default)

  const [falsePositives, setFalsePositives] = useState(0)
  const [falseNegatives, setFalseNegatives] = useState(0)

  function safeSetPoolNumber(value: number) {
    setPoolNumber(Math.min(value, samplesNumber))
  }

  function safeSetSamplesNumber(value: number) {
    setSamplesNumber(value)
    setPoolNumber(Math.min(poolNumber, value))
  }

  function startSimulation() {
    const [newFalsePositives, newFalseNegatives] = runSimulation(
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
    getHeatmapData().then(plotlyData => {
      Plotly.newPlot('heatmap', ...plotlyData)
    })
  }, [])

  function refreshData() {
    console.log('eh no eccheccazzo questo dopo')
  }

  return (
    <div className="w-100 h-100 flex flex-column items-center justify-around">
      <div className="w-100 h-50 flex items-center">
        <div className="w-50 h-100 flex items-center flex-column justify-center overflow-y-auto f6">
          <div className="pv2 w-80 tc f3">SET VARIABLES</div>
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
            <div className="w-100 tc pv1">Number of pools to create ({poolNumber})</div>
            <Range constants={POOL_NUMBER} variable={poolNumber} setVariable={safeSetPoolNumber} />
          </div>
          <div className="pv1 w-80">
            <div className="w-100 tc pv1">Number of people in each pool ({poolSize})</div>
            <Range constants={POOL_SIZE} variable={poolSize} setVariable={setPoolSize} />
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
          <div className="pv1 w-80">
            <div className="w-100 tc pv1">
              Positive ratio for considering a person positive ({renderRatio(threshold)})
            </div>
            <Range constants={THRESHOLD} variable={threshold} setVariable={setThreshold} />
          </div>
        </div>
        <div className="w-50 h-100 flex items-center flex-column justify-center">
          <div className="pv2 w-80 tc">
            <button onClick={startSimulation} className="pa3">
              RUN SIMULATION
            </button>
          </div>
          <div className="pv2 w-80 f4">
            <div className="w-100 tc">
              Total false positives: {falsePositives}/{samplesNumber}
            </div>
            <div className="w-100 tc">
              Total false positive ratio: {renderRatio(falsePositives / samplesNumber)}
            </div>
            <div className="w-100 tc">
              Total false negatives: {falseNegatives}/{samplesNumber}
            </div>
            <div className="w-100 tc">
              Total false negative ratio: {renderRatio(falseNegatives / samplesNumber)}
            </div>
            <div className="w-100 tc">
              Compression ratio: {renderRatio(1 - poolNumber / samplesNumber)}
            </div>
          </div>
          <div className="pv2 w-80 tc">
            <button onClick={resetValues} className="pa3">
              RESET VALUES
            </button>
          </div>
        </div>
      </div>
      <div className="w-100 h-50" id="heatmap" onClick={refreshData} />
    </div>
  )
}
