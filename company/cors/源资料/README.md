# 跨域资源共享（ CORS ）

Cross Origin Resource Share

> 出于安全考虑，浏览器会限制某些跨域请求。

主要针对 XMLHttpRequest 和 Fetch 接口请求的 HTTP 资源。


## 同源策略

`http://www.zuzuche.com:80`

* 协议
* 端口
* 域名



## 了解 HTTP 报文

请求报文：

* 方法
* 路径
* 协议/版本
* 请求头部
* 请求体


响应报文：

* 协议/版本
* 响应状态码
* 响应状态说明短语
* 响应头部
* 响应体

示例：

* get.http
* post.http


## 跨域请求

将项目开发过程中遇到的跨域请求分为3个场景：

* 简单请求
* 预检请求
* 附带 cookies 的请求


### 简单请求

出现**简单请求**的条件：

* 请求方法是下列方法之一：
  * GET
  * HEAD
  * POST
* 不得自定义某些头部字段

示例：

* `cors.js`

流程图：

* https://www.processon.com/diagraming/591e6da3e4b01fec948f40a1


### 预检请求

出现**预检请求**的条件：

* 非**简单请求**

> 浏览器在发起*实际请求*前，先用 OPTIONS 方法发起一个*预检请求*，以获知服务器是否允许*实际请求*。


示例：

* `cors.js`

流程图：

* https://www.processon.com/diagraming/591e71f9e4b01fec948f4252

### 附带 cookies 的请求

> Fetch 接口发起的跨域请求默认不发送 cookies




## 参考

> https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS
