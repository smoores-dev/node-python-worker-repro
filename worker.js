const { cwd } = require('node:process');
const { interpreter: py } = require('node-calls-python');
const { parentPort } = require('node:worker_threads');


parentPort?.on('message', () => {
  console.log('received message')
  run().then(() => parentPort?.emit('exit'))
})


async function run() {
  py.addImportPath(cwd())
  const busy = py.importSync('busy', false);
  console.log('running')
  await py.call(busy, 'busy');
  console.log('done')
}

module.exports = run
