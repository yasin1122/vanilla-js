// function curry(fn) {
//   let accumulatedArgs = []

//   return function curried(...args) {
//     accumulatedArgs = [...accumulatedArgs, ...args]

//     if (fn.length === accumulatedArgs.length) {
//       const result = fn(...accumulatedArgs)
//       accumulatedArgs = []
//       return result
//     } else {
//       return curried
//     }
//   }
// }

function curry(func) {
  return function curried(...args) {
    const context = this // capture initial `this`

    if (args.length >= func.length) {
      return func.apply(context, args)
    } else {
      return function (...nextArgs) {
        return curried.apply(context, [...args, ...nextArgs])
      }
    }
  }
}

// function recursiveCurry(fn) {
//   if (args.length === fn.length) {
//     return fn(...args)
//   } else {
//     return function (...newArgs) {
//       recursiveCurry(...args, ...newArgs)
//     }
//   }
// }

export default function curry(func) {
  function curried(context, args) {
    return function (...nextArgs) {
      const allArgs = [...args, ...nextArgs]

      if (allArgs.length >= func.length) {
        return func.apply(context, allArgs)
      } else {
        return curried(context, allArgs)
      }
    }
  }

  // Initial wrapper to capture `this` once at the start
  return function (...initialArgs) {
    const context = this
    return curried(context, initialArgs)
  }
}
