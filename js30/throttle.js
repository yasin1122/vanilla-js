function throttle(fn, t) {
  let isThrottled = false
  let nextArgs = null

  return function (...args) {
    if (isThrottled) {
      nextArgs = args
    } else {
      fn(...args)
      isThrottled = true
      setTimeout(helper, t)
    }
  }

  function helper() {
    if (nextArgs) {
      fn(...nextArgs)
      isThrottled = true
      nextArgs = null
      setTimeout(helper, t)
    } else {
      isThrottled = false
    }
  }
}
