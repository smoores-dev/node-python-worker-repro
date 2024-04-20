import { Worker } from 'node:worker_threads'
import { join } from 'node:path'
import { cwd } from 'node:process'

const worker = new Worker(join(cwd(), 'worker.js'))

setTimeout(() => {
  worker.terminate()
}, 2000)
