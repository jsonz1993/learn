// 菜单数组 id 是唯一的
// pid 代表他的父级菜单id
// 需要的结构是这样的
/**
arr = [{
	name: 'jsonz',
	id: 0,
	children: [{
		{
			name: 'jsonz_child', 
			id: 4, 
			pid: 0,
			children: [{
				name: 'jsonz_child_child',
				id: 6,
				pid: 4,
				children: [{
					name: 'jsonz_child_child_child',
					id: 7,
					pid: 6
				}]
			}]
		},
	}]
}]
*/
var arr = [{
	name: 'jsonz',
	id: 0,
},  {
	name: 'jsonz_child_child_child',
	id: 7,
	pid: 6
}, {
	name: 'bili',
	id: 1
}, {
	name: 'true',
	id: 3
}, {
	name: 'jsonz_child',
	id: 4,
	pid: 0
}, {
	name: 'jsonz_child1',
	id: 5,
	pid: 0
}, {
	name: 'jsonz_child_child',
	id: 6,
	pid: 4
}]

function demo() {
	// 
	const obj = {}; // 辅助对象
	const _arr = []; // 输出数组

	arr.forEach(item=> {
		obj[item.id] = item;
	});

	const testArr = []
	arr.forEach((item, i)=> {
		if (typeof item.pid === 'undefined') {
			_arr.push(item)
		} else {
			obj[item.pid].children = obj[item.pid].children || [];
			obj[item.pid].children.push(item);
		}
		
	});

	return _arr;

}