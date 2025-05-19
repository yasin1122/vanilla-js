class EventEmitter {
  constructor() {
    this._subs = {}
  }

  subscribe(eventName, callback) {
    let set = this._subs[eventName]
    if (!set) {
      this._subs[eventName] = set = new Set()
    }

    set.add(callback)

    return {
      unsubscribe: () => {
        set.delete(callback)
      }
    }
  }

  emit(eventName, args = []) {
    const result = []

    const set = this._subs[eventName]
    if (set) {
      set.forEach(fn => {
        result.push(fn(...args))
      })
    }

    return result
  }
}
