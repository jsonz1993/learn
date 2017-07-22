import { hashHistory } from 'dva/router';
import { query } from '../services/users';


// 业务状态关联性强，所以业务状态一并写到model中
export default {
  namespace: 'users',

  state: {
    list: [],
    total: null,
    loading: false, // 控制加载状态,
    current: null, // 当前分页信息
    currentItem: {}, // 当前操作的用户对象
    modalVisible: false, // 弹出窗的显示状态,
    modalType: 'create', // 弹出窗的类型（添加用户，编辑用户)
  },

  subscriptions: {

    // 监听到路由是 /users 时调用该函数
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/users') {
          dispatch({
            type: 'query',
            payload: {}
          })
        }
      })
    },

  },

  effects: {
    *query({ payload }, { select, call, put}){
      yield put({ type: 'showLoading' }) // dispatch 执行一个 action
      const { data } = yield call(query, {query: 10}) // 调用执行一个函数
      // select 访问其他 model
      if ( data ) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.data,
            total: data.page.total,
            current: data.page.current,
          }
        });
      }
    },
		*create(){},
		*'delete'(){},
		*update(){},
  },

  reducers: {
    showLoading(state, action) {
      return {...state, loading: true};
    }, // 控制加载状态的reducer
    showModal() {}, // 控制 Modal 显示状态的 reducer
    hideModal(){},

    // 使用静态数据返回
    querySuccess(state, action){
      return {...state, ...action.payload, loading: false};
    },

    createSuccess(){},
		deleteSuccess(){},
		updateSuccess(){},
  }
}