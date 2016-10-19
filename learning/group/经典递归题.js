/*
 汉诺塔 (http://baike.baidu.com/view/191666.htm) 的移动也可以看做是递归函数。

我们对柱子编号为a, b, c，将所有圆盘从a移到c可以描述为：

如果a只有一个圆盘，可以直接移动到c；

如果a有N个圆盘，可以看成a有1个圆盘（底盘） + (N-1)个圆盘，首先需要把 (N-1) 个圆盘移动到 b，然后，将 a的最后一个圆盘移动到c，再将b的(N-1)个圆盘移动到c。

请编写一个函数，给定输入 n, a, b, c，打印出移动的步骤：

move(n, a, b, c)

例如，输入 move(2, 'A', 'B', 'C')，打印出：

A --> B
A --> C
B --> C
 */
function move(n, a, b, c) {
	if (n == 1) {
		console.log(a, '-->', c);
		return;
	}
	move(n -1, a, c, b);
	console.log(a, '-->', c);
	move(n -1, b, a, c);
}