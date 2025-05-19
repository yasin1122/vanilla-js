function throttle(func, wait) {
  let isThrottled = false
  let nextArgs = null
  let nextThis = null

  return function (...args) {
    const context = this

    if (isThrottled) {
      nextArgs = args
      nextThis = context // store context for later call
    } else {
      func.apply(context, args) // use apply
      isThrottled = true
      setTimeout(helper, wait)
    }
  }

  function helper() {
    if (nextArgs) {
      func.apply(nextThis, nextArgs) // preserve `this` again
      isThrottled = true
      nextArgs = null
      nextThis = null
      setTimeout(helper, wait)
    } else {
      isThrottled = false
    }
  }
}
