function timeLimit(fn: Fn, t: number): Fn {
  return async function (...args) {
    return new Promise(async (resolve, reject) => {
      const rej = setTimeout(reject, t, 'Time Limit Exceeded')

      try {
        const res = await fn(...args)
        resolve(res)
      } catch (err) {
        reject(err)
      } finally {
        clearTimeout(rej)
      }
    })
  }
}
