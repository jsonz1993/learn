#这是注释
a = 100
if a >= 0:
	print(a)
else:
	print(-a)

# Boolean 首字母大写
#print(( 1 > 2) == False)

# // 地板除 向下取整
#print(11.9 // 3)

classList = ['yishan', 'caoge', 'Jsonz'];

# Js classList.length ---- Py len(classList)
#print(len(classList));

# append 给list 最后添加对象
classList.append('wenhui');

# insert(x,item) 在x位置插入对象
classList.insert(1,'name');

# pop(index) 删除指定位置的元素
classList.pop(1);

#print(classList);

# tuple 有序列表，一单初始化就不能修改
classTuple = ('jsonz', 'yishan', 'caoge');

#print(classTuple);

age = 20
if age >= 18:
	print('you age is', age)
	print('adult')
elif age >= 6:
	print('you age is', age)
	print('teenager')
else:
	print('kid')

# int 将 str 转为int
# birth = input('birth: ')
# if int(birth) < 2000:
# 	print('00 前')
# else:
# 	print('00后')

# for 循环
# for name in classTuple:
	# print(name)

# range() 函数，生成一个整数序列，可以再用list转为<list>类型

# intList = list(range(10))
# print(intList[2]);

# sum = 0
# n = 99

# while n > 0:
# 	sum += n
# 	n = n - 2

# print(sum)

