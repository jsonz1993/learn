## BEM 命名

可以比较直观告诉开发者 该class元素与周围元素嵌套关系。 也可以为后面微信小程序做准备（微信小程序不支持css层级)

###[BEM —— 源自Yandex的CSS 命名方法论](https://segmentfault.com/a/1190000000391762)


BEM的意思就是 块(block)、 元素(element)、修饰符（modifier)

命名约定模式如下

	.block{}
	.block__element{}
	.block--modifier{}

- `.block` 代表了更高级别的抽象或组建
- `.block__element` 代表 `.block` 的后代，用于形成一个完整的 .block 的整体。
- `.block--modifier` 代表 `.block` 的不同状态或不同版本。

之所以用两个连字符和下划线而不是一个，是为了让自己的块可以用单个连字符来界定。如：
	.site-search{} // 块
	.site-search__fidld{} // 元素
	.site-search--full{} // 修饰符

BEM的关键是光凭名字就可以告诉其他开发者某个标记是用来干什么的。特别适合组件化开发。也很少合并css文件后出现一堆相同的class。

总的规则来说就是，把一个组件或一个模块当成块。不做太多层嵌套。
	