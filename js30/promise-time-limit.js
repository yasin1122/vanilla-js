function timeLimit(fn, t) {
  return async function (...args) {
    return new Promise(async (resolve, reject) => {
      const id = setTimeout(() => reject('Time Limit Exceeded'), t)

      try {
        const res = await fn(...args)
        resolve(res)
      } catch (err) {
        reject(err)
      } finally {
        clearTimeout(id)
      }
    })
  }
}

function fn(t) {
  return new Promise(res => setTimeout(res, t))
}

const limited = timeLimit(fn, 100)

limited(150).catch(console.log)
