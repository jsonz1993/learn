#### 关于存储

+ cache
+ 磁盘文件
+ 数据库
+ 内存

#### web存储

###### cookies 4k
###### UserData XML文件 IE支持


#### H5的几种存储

+ 本地存储 localstorage && sessionstorage
+ 离线缓存 application cache
+ IndexedDB && Web SQL


###### localstorage

key --> value

永久存储，永不失效，除非手动删除

官方： 每个域名 5M

__API__

- `getItem`
- `setItem`
- `removeItem`
- `key`

		localStorage.key(x) --> 返回第x个key
- `clear`


###### sessionstorage
	
重新打开一个tab或关闭浏览器就消失，其他与 localstorage类似

###### 存储类型
+ 数组 JSON.stringify(arr)
+ 对象 JSON.stringify(obj)
+ 图片 通过canvas转为base64 注意canvas的图片安全策略跨域

###### 注意
1. 判断浏览器是否支持。(打开无痕,也不支持)。安全点不用 localstorage in window 而是先set一个用异常捕获判断
2. 写数据需要异常处理，避免超出容量抛错
3. 避免敏感信息
4. key的唯一性


###### 限制
1. 更新策略，过期控制
2. 子域名之间不能共享存储数据
3. 超出后如何存储（LRU,FIFO） 近期最少使用算法淘汰旧数据
4. server端如何获取 手动请求添加

###### 过期控制
	function setTimeOut(key, val) {
			var curTime = new Date().getTime();
			localstorage.setItem(key, JSON.stringify({data:v,time:curTime}));
		}

		function getTimeOut(key, exp) {
			var data = localstorage.getItem(key),
				dataObj = JSON.parse(data);

			if (new Date().getTime - dataObj.time > exp) {
				console.log('expires');
			} else {
				return dataObj;
			}
		}

###### 使用场景
1. 利用本地数据，减少网络传输
2. 弱网络环境下，高延迟，低宽带，尽量数据本地化

