export const lerp = (a: number, b: number, t: number) => a + (b - a) * t
export const damp = (current: number, target: number, lambda = 0.08, dt = 1) =>
  lerp(current, target, 1 - Math.exp(-lambda * dt))
export const edgeInterpolate = (from: number, to: number, t: number) =>
  from + (to - from) * (1 - Math.pow(2, -10 * t))
export const smoothStep = (t: number) => t * t * (3 - 2 * t)
