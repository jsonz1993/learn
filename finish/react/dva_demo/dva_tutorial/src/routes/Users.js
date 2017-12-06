import React, { Component, PropTypes } from 'react';
// 引入 connect 工具函数
import { connect } from 'dva';

// Users 的 Presentational Components
import UserList from '../components/Users/UserList';
import UserSearch from '../components/Users/UserSearch';
import UserModal from '../components/Users/UserModal';
import styles from './Users.less';

// Container Component
function Users({ location, dispatch, users }) {

  const {
    loading, list, total, current, currentItem, modalVisible, modalType
  } = users;

  const userSearchProps = {};
  const userListProps={
		dataSource: list,
		total,
		loading,
		current,
	};
  const userModalProps = {};

  return (
    <div className={styles.normal} >
      {/*用户筛选搜索框  */}
      <UserSearch {...userSearchProps} />
      {/* 用户信息展示列表 */}
      <UserList {...userListProps} />
      {/* 添加用户 & 修改用户弹出的浮层 */}
      <UserModal {...userModalProps} />
    </div>
  );
}

Users.PropTypes = {
  users: PropTypes.object,
}



// 置顶订阅数据， 这里关联了 users
export default connect(_=> _)(Users);