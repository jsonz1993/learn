## select

### 单个下拉组件

需要引入的文件：按顺序

`select.css`

`jquery.js`

`iscroll.js`

`selectTool.js`

使用：

	new Select({
	    el: '#city', // 触发的元素
	    data1: [{
	        ID: 1,
	        name: '01'
	    },{
	    	ID: 2, // 一般是后台的标示id，用于传给后台 可以忽略
	    	name: '02' //  显示的文案
	    }], // 循环的数据
	    id: 'ID', // 标识key，对应当前例子的ID  默认是`id`
	    text: 'name', // 文案key, 对应当前例子name 默认是`text`
	    postfix: '小时', // 文案后面添加的后缀
	    onOk: function(){
	    	console.log('ok');
	    }, // 点击确认按钮的回调
	    onCancel: function() {
	    	console.log('cancel');
	    }, // 取消的回调，取消按钮或者蒙层
	    title: '选择时间' // 组件标题
	});
	

### 时间日期下拉组件

需要引入文件： 按顺序


`select.css`

`jquery.js`

`iscroll.js`

`selectTool.js`

`inherit.js`

`dateTimeSelectTool.js`

使用：
其他参数同单个下拉组件

	new dateTimeSelect({
        el: '#province',
        dateStart: new Date(), // 开始选择的日期
        dateNum: 20, // 可以选择的天数
        timeStart: 9, // 开始选择的时间
        timeNum: 12 // 可以选择的时间数
    })