class EventEmitter {
  eventMap = {}

  subscribe(event, cb) {
    if (!(event in this.eventMap)) {
      this.eventMap[event] = new Set()
    }
    this.eventMap[event].add(cb)

    return {
      unsubscribe: () => {
        this.eventMap[event].delete(cb)
        // Optionally remove the event if no listeners are left
        if (this.eventMap[event].size === 0) {
          delete this.eventMap[event]
        }
      }
    }
  }

  emit(event, args = []) {
    const res = []
    const listeners = this.eventMap[event]

    if (listeners) {
      for (const cb of listeners) {
        res.push(cb(...args))
      }
    }

    return res
  }
}

// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.events = {}
  }

  // Register an event handler
  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback)
    } else {
      this.events[eventName] = [callback]
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (this.events[eventName]) {
      for (let cb of this.events[eventName]) {
        cb()
      }
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.events[eventName]
  }
}
