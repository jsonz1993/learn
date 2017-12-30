class Promise {
  static all(iterable) {
    // ... 错误处理
    if (!iterable.length) return this.resolve([])
    // ..
  }
}