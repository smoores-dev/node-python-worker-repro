import { join } from 'node:path'
import { cwd } from 'node:process'
import { Worker } from 'node:worker_threads'

const worker = new Worker(join(cwd(), 'worker.js'))
worker.postMessage('')

setTimeout(async () => {
  console.log('terminating worker')
  await worker.terminate()
  console.log('terminated worker')
}, 6000)

