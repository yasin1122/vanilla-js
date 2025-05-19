function curry(fn) {
  let accumulatedArgs = []

  return function curried(...args) {
    accumulatedArgs = [...accumulatedArgs, ...args]

    if (fn.length === accumulatedArgs.length) {
      const result = fn(...accumulatedArgs)
      accumulatedArgs = []
      return result
    } else {
      return curried
    }
  }
}
