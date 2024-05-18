
const worker = new Worker('worker.js', { type: 'module' });
worker.postMessage({
  pluginMessage: {
    type: 'GET_TEXT',
    payload: {
      // ...
    }
  }
})