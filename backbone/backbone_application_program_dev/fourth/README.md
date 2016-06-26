- 描述单个todo项的Todo模型
- 存储和持久化 todo项的 TodoList 集合
- 创建todo项
- 展示todo列表
- 编辑现有的todo项
- 标记一个todo项已完成状态
- 删除todo项
- 过滤所有已完成todo列表

#### 静态HTML

	<script type="text/template" id="item-template"></script>
	<script type="text/template" id="stats-template"></script>
	<script src="../jquery-1.11.2.min.js"></script>	
	<script src="../underscore-min.js"></script>
	<script src="../backbone-min.js"></script>
	<script src="../backbone.localStorage.js"></script>
	<script src="js/models/todo.js"></script>
	<script src="js/collections/todos.js"></script>
	<script src="js/views/todos.js"></script>
	<script src="js/views/app.js"></script>