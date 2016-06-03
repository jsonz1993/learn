import 'whatwg-fetch';


const _get = ({url, query}) => {
	let _url;
	if (query) {
		_url = `https://cnodejs.org/api/v1${url}?${query}`;
	} else {
		_url = `https://cnodejs.org/apu/v1${url}`;
	}

	return fetch(_url)
	.then((res) => {
		if (res.status >= 200 && res.status < 300) {
			return res.json();
		}
		return Promise.reject(new Error(res.status));
	})
}

/**
 * post 请求
 * @param {String} url api地址
 * @param {Object} params 包含post内容的object
 * @return {Promise} Promise
 */
const _post = (url, params) => {
	return fetch(`https://cnodejs.org/api/v1${url}`, {
		method : 'POST',
		headers : {
			Accept : 'application/json',
			'Content-Type' : 'application/json'
		},
		body : JSON.stringify(params),
	})
	.then((res) => {
		if (res.status >= 200 && res.status < 300) {
			return res.json();
		}
		return Promise.reject(new Error(res.status));
	});
};

/**
 * 检查token的合法性
 * @param {Function} options.dispatch store 	对象解构出来的函数，无需手动提供
 * @param {String} accesstoken 		accesstoken的值
 * @return {Promise} 	Promise
 */
export const checkToken = ({ dispatch }, accesstoken) => {
  const url = '/accesstoken';
  const params = { accesstoken };
  return _post(url, params)
  .then((json) => {
    if (json.success) {
      dispatch('CHECK_TOKEN_SUCCESS');
      return json.loginname;
    }
    return Promise.reject(new Error('checkToken failure'));
  })
  .catch((error) => {
    console.log(error);
    dispatch('CHECK_TOKEN_FAILURE');
    return Promise.reject();
  });
};

/**
 * 获取用户信息
 * @param  {Function} options.dispatch store 对象解构出来的函数，无需手动提供
 * @param  {String} loginName 用户名
 * @return {Promise} Promise
 */
export const fetchUser = ({ dispatch}, loginName) => {
	const url = `/user/${loginName}`;
	return _get({url})
	.then((json) => {
		if (json.success) {
			dispatch('FETCH_USER_SUCCESS', json.data);
			return json.data;
		}
		return Promise.reject(new Error('fetchUrl failure'));
	})
	.catch((error) => {
		consol.log(error);
		dispatch('FETCH_USER_FAILURE');
		return Promise.reject();
	});
};

/**
 * 获取用户收藏的文章
 * @param  {Function} options.dispatch store 对象解构出啊来的函数，无需手动提供
 * @return {String} loginName 用户名
 * @return {Promise} Promise
 */
export const fetchCollection = ({dispatch}, loginName) => {
	const url = `/topic_collect/${loginName}`;
	return _get({url})
	.then((json) => {
		if (json.success) {
			return dispatch('FETCH_COLLECTION_SUCCESS', json.data);
		}

		return Promise.reject(new Error('fetchCollection failure'));
	})
	.catch((error) => {
		console.log(error);
		return Promise.reject();
	})
};

/**
 * 获取用户未读消息数
 * @param  {Function} options.dispatch store 对象解构出来的函数，无需手动提供
 * @param  {String}  accesstoken accesstoken的值
 * @return {Promise}  Promise
 */
export const fetchMsgCount = ({ dispatch}, accesstoken) => {
	const url = '/message/count';
	const query = `accesstoken=${accesstoken}`;

	return _get({url, query})
	.then((json) => {
		if (json.success) {
			return dispatch('FETCH_MSG_COUNT_SUCCESS', json.data);
		}
		return Promise.reject(new Error('fetchMsgCount failure'));
	})
	.catch((error) => {
		console.log(error);
		return Promise.reject();
	})
}

/**
 * 删除token
 * @param  {Function} options.dispatch store对象解构出来的函数，无需手动提供
 */
export const delToken = ({dispatch}) => dispatch('DEL_TOKEN');

/**
 * 改变登入用户的信息
 * @param  {Function} options.dispatch store对象解构出来的函数，无需手动提供
 * @param  {Object} user             包含登入用户信息的object
 */
export const changeLoginUser = ({ dispatch }, user) => dispatch('CHANGE_LOGIN_USER', user);

/**
 * 改变token的值
 * @param {Function} options.dispatch store 对象解构出来的函数，无需手动提供
 * @param {String} accesstoken accesstoken 的值
 */
export const changeToken = ({dispatch}, accesstoken) => dispatch('CHANGE_TOKEN', accesstoken);