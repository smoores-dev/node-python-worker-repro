import sleepAsync from './worker.js'

const worker = sleepAsync()

setTimeout(() => {
  worker.terminate()
}, 2000)
