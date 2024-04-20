const { cwd } = require('node:process');
const { interpreter: py } = require('node-calls-python');

py.addImportPath(cwd())
const busy = py.importSync('busy', false);

module.exports = async function run() {
  await py.call(busy, 'busy');
  console.log('done')
} 
