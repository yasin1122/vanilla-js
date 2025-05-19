function compose(functions) {
  // return function (x) {
  //   return functions.reduceRight((sum, func) => func(sum), x)
  // }

  // manual version
  return function (x) {
    let result = x
    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result)
    }
    return result
  }
}
