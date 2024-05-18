class Log {

  log(message) {
    // 检查代码是否在 Worker 线程中执行
    const isWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
    const prefix = isWorker ? '[Worker!!]' : '[Main Thread]';
    console.log(`${prefix} ${message}`);
  }

  handleMessage(event) {
    this.log('Message received: ' + event.data);
    if (typeof postMessage === 'function') {
      postMessage('Processed: ' + event.data);
    }
  }

  performTask(data) {
    this.log(`Performing task with data: ${data}`);
    // 其他可能的任务逻辑
  }

}

export { Log }