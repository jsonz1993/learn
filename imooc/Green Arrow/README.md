[全民寻找绿箭侠](http://www.imooc.com/video/3274)

##### 新知识点 Underscore 框架库
工具库，提供jq没有的一些工具方法

[Underscore api](http://www.css88.com/doc/underscore/)

#### 看你有多色

[页面结构](#dom)

[js逻辑](#js)



<h6 id="dom">dom结构</h6>

只是用自己的理解写了dom - -不是jade语法

	.grid
		.page.hide#loading
			.loading-text{loading...}
		.page.hide#index
			h1{see how mush color for you }
			#help{find a different color in all colors}
			.btns
				button[data-type="color"].btn.btn-play{normal mode}
				button[data-type="color2"].btn.btn-play.btn-new {double mode}
		.page.hide#room
			header
				span.lv
					{score}:
					em
				span.time
				span.btn.btn-pause{pause}
			#box.lv$
		.page.hide#dialog
			.inner
				.content.gameover
					inner-content
						h3
						p#tip
						.btn-wrap
							button#mode.btn.btn-play[data-type="color"]{normal}
							button.btn.btn-restart{start again}
				.content.pause
					.inner-content
						h3{pause Game}
						.btn-wrap
							button.btn.btn-resume{continue}
							button.btn.btn-restart{start again}


<h6 id="js">js</h6>

__app.js 与 game.js可复用， color.js负责一个类型的游戏展示类型__

__app.js__

主要负责初始化整个页面，包括切换页面调用游戏事件等

1. 声明常用的dom变量
2. 判断手机类型 window.navigator.userAgent
3. 声明app作为控制主流程的对象
	1. init 
	   1. 初始化 调用事件绑定和loading事件
	2. loading 
	   1. loading 事件判断图片是否加载（本demo忽略）
	   2. 加载调用render方法进入主页面
	3. render
	   1. 切换界面 显示主页面
	4. initEvent
	   1. 事件绑定相关
	   2. 判断是click还是touch事件
	   3. 绑定开始游戏按钮，
	     1. 切换到游戏界面
	     2. 根据按钮类型调用对应的游戏初始化
4. 调用app.init初始化
5. 声明全局变量 window.API 方便匿名自执行函数的调用

__game.js__

主要为游戏逻辑和配置文件，自己撸的时候把配置抽出来独立一个文件

建议敲的时候只看简要思路 两层结构 如1.1 不看 1.1.1

1. _lang 
	1. 语言相关的配置，如标题，按钮，等级等

2. _config
	1. 函数用到的相关配置
	2. 包括lang allTime addTime lvMap 等

3. 声明常用dom变量
4. 游戏逻辑主体
    1. 游戏类型变量
    2. 答对个数变量
    3. 分数变量
    4. init 初始化游戏
    	1. 根据传入参数声明type target api config lang el
    	2. 更新暂停按钮文字
    	3. 调用 `reset`初始化时间和等级
    	4. 调用 `renderUI` 重置ui
    	5. 判断执行事件初始化`initEvent`
    	6. 调用 `start`开始游戏
    5. renderUI 初始化UI
    	1. 判断横竖屏
    	2. 根据横竖屏去获取页面高度/宽度 最小设定为500
    	3. 设置游戏box宽高，并显示游戏界面
   	6. 初始化游戏事件
   	    1. 判断是touch/click事件
   	    2. window.resize时重新调用`renderUI`
   	    3. 点击色块
   	    	1. 判断是否选中
   	    	2. 修改class与标识防止重复点击
   	    	3. 选对标识++
   	    	4. 调用下一等级函数
   	    4. 绑定暂停事件
   	    5. 绑定继续事件
   	    6. 绑定重来事件
   	    	1. 重置分数，时间，等级。
   	    	2. 调用`start`重新开始
	7. start 游戏开始事件
		1. 判断时间是否需要高亮
		2. 初始化答对标识
		3. 隐藏暂停页面
		4. 修改暂停标识
		5. 初始化lv
		6. 获取lvMap
		8. 调用`rendMap`生成dom填充到box内
		9. 调用`renderInfo`更新分数显示
		10. 设置定时器调用时间处理逻辑函数 `tick`
	8. resume 继续事件
		1. 更新视图
		2. 修改标识
	9. pause 暂停事件
		1. 更新视图
		2. 修改标识
	10. tick 处理和时间挂钩事件
		1. 如果暂停 return
		2. 更新`time`
		3. 判断加`time`高亮显示
		4. 判断是否游戏结束
	11. renderMap 生成dom填充到box
		1. 判断是否处于暂停
		2. 获取色块个数循环获得dom结构填充
		3. 调用相应api处理背景
	12. renderInfo 更新分数
		1. 更新分数显示
	13. gameOver 游戏结束逻辑
		1. 获取游戏结束显示字段
		2. 切换与更新视图
		3. 隐藏色块
		4. 修改暂停标识
   	14. reset 初始化等级和时间
   		1. 初始化配置的时间
   		2. 初始化等级
	15. nextLv 下一等级函数
		1. 添加时间奖励
		2. 重新调用`start`方法

5. 将游戏主体变量加入到全局api中

__color.js__

主要负责生成bgColor和结束用于逻辑

1. 声明常用dom变量
2. 游戏类型逻辑主体
	1. lvT 获取等级相关描述
	2. render 给色块添加颜色和标识
		1. 根据色块算出难度系数
		2. 根据等级微调难度系数
		3. 根据色块生成随机数用于选择目标色块
		4. 根据难度系数生成干扰色 `getColor`
		5. 根据干扰色生成目标颜色 `getLvColor`
		6. 设置颜色和type
	3. getColor 生成干扰色
		1. 根据传入参数生成随机数颜色
		2. 返回随机数数组和随机数颜色
	4. getLvColor 根据干扰颜色生成目标颜色
		1. 根据目标颜色和难度系数和微调系数生成干扰色
		2. 同getColor 一样return 所需变量
	5. getGameOverText 获取游戏结束说明
		1. 逻辑判断，小于20的算1等级，大于20的没10算一等级
		2. return 出所需变量