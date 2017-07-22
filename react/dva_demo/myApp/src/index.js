import dva, { connect } from 'dva';
import { Router, Route } from 'dva/router';
import fetch from 'dva/fetch';
import React from 'react';
import './index.html';
import styles from './index.less';
import key from 'keymaster'

// 1. Initialize
// 初始化 dva
const app = dva();

// 2. Model
// Remove the comment and define your model.
// 初始化 Model
app.model({
  // 唯一命名空间
  namespace: 'count',

  // 状态
  state: {
    record: 0,
    current: 0,
  },

  // 同步 redux
  reducers: {
    add(state) {
      const newCurrent = state.current + 1;
      return {
        ...state,
        record: newCurrent > state.record? newCurrent: state.record,
        current: newCurrent,
      }
    },
    minus(state) {
      return {
        ... state,
        current: state.current - 1
      }
    }
  },
 
  // 异步 redux-saga
  // 详见 https://redux-saga.js.org/docs/api/
  effects: {
    *add(action, {call, put}) {
      yield call(delay, 1000); // call 调用异步函数
      yield put({type: 'minus'}); // put dispatch action
      // select 
      // take
      // fork 
      // cancel 
    }
  },

  // subscriptions 订阅数据源， 根据条件 dispatch 需要的 action
  subscriptions: {
    keyboardWatcher({ dispatch }) {
      key('⌘+up, ctrl+up', ()=> {dispatch({type: 'add'})});
    }
  }
});

function delay(timeout) {
  return new Promise(resolve=> {
    setTimeout(resolve, timeout);
  })
}

// 初始化 Component
const CountApp = ({count, dispatch})=> {
  return (
    <div className={styles.normal}>
      <div className={styles.record}>
        Highest Record: {count.record}
      </div>
      <div className={styles.current}> {count.current} </div>
      <div className={styles.button}>
        <button onClick={()=> { dispatch({type: 'count/add' }); }}>+</button>
      </div>
    </div>
  )
}

// 将 Component 和 Model 绑定起来
const HomePage = connect(count => count)(CountApp);

// 3. Router
// 页面组织起来
app.router(({ history }) =>
  <Router history={history}>
    <Route path="/" component={HomePage} />
  </Router>
);

// 4. Start
app.start('#root');