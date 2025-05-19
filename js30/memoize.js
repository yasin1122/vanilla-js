function memoize(fn) {
  const cachce = new Map()

  return function (...args) {
    const key = JSON.stringify(args)
    if (cache.has(key)) {
      return cachce.get(key)
    }
    const result = fn(...args)
    cachce.set(key, result)
    return result
  }
}
