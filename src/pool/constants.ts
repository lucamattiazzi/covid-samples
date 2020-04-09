export interface Constant {
  default: number
  max: number
  min: number
  step: number
}

export const DIFFUSION: Constant = {
  default: 0.1,
  max: 1,
  min: 0,
  step: 0.01,
}

export const SAMPLES_NUMBER: Constant = {
  default: 100,
  max: 10000,
  min: 100,
  step: 100,
}

export const POOL_SIZE: Constant = {
  default: 5,
  max: 10,
  min: 1,
  step: 1,
}

export const POOL_NUMBER: Constant = {
  default: 80,
  max: 10000,
  min: 10,
  step: 10,
}