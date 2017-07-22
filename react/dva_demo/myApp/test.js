app.model({
  namespace: 'count',
  state: {
    record: 0,
    current: 0,
  }
})

// namespace 是 model state 在全局 state 所用的 key，state 是默认数据。然后 state 里的 record 表示 highest record，current 表示当前速度。