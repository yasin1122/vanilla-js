function flat(arr, n) {
  // n is depth
  const result = []

  function helper(arr, depth) {
    for (const el of arr) {
      if (typeof el === 'object' && depth < n) {
        helper(el, depth + 1)
      } else {
        result.push(el)
      }
    }
    return result
  }
  return helper(arr, 0)
}
