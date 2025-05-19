function debounce(fn, t) {
  let id
  return function (...args) {
    clearTimeout(id) // works even if id is undefined
    id = setTimeout(() => fn(...args), t)
  }
}
