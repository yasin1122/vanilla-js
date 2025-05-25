Array.prototype.groupBy = function (fn) {
  const group = {}
  for (const obj of this) {
    const key = fn(obj)
    group[key] = group[key] || []
    group[key].push(obj)
  }
  return group
}

/***
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
