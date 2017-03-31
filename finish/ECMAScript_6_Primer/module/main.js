// ES6模块
// import { stat, exist, readFile} from 'fs';
import {firstName, lastName, year} from './profile';

function setName(element) {
	element.textContent = first + ' ' + lastName;
}

import {v1Fn as profileV1} from './profile';

// import 会执行所加载的模块，所以可以这样写
import 'lodash'; // 执行该模块，不输入任何值
import 'lodash'; // 只会执行一次

// 整体加载
import * as allVar from './profile'; // 所有输入都在allVar上

// export default 为模块指定默认输出
import customName from './export-default';
customName(); // 'foo'

// 循环加载