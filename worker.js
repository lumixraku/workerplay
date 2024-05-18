import { Log } from './module.js';
console.log('worker.js loaded');
// 如果代码在 Worker 线程中执行，设置消息处理器
if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
  self.onmessage = event => {
    const workerInstance = new Log();
    workerInstance.handleMessage(event);
  };
}
