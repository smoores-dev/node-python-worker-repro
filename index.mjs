import { Piscina } from 'piscina'
import { join } from 'node:path'
import { cwd } from 'node:process'

const controller = new AbortController()

const piscina = new Piscina({
  filename: join(cwd(), 'worker.js'),
  maxThreads: 1,
})

piscina.run(null, { signal: controller.signal })

setTimeout(async () => {
  console.log('terminating worker')
  controller.abort()
  console.log('terminated worker')
}, 6000)

