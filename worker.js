const {
  Worker, isMainThread, parentPort,
} = require('node:worker_threads');

if (isMainThread) {
  module.exports = function sleepAsync() {
    return new Worker(__filename);
  };
} else {
  const { proxify, pymport } = require('pymport');

  const time = proxify(pymport('time'));
  time.sleep(3);
  parentPort?.postMessage('started sleeping');
  parentPort?.postMessage('finished sleeping');
} 
