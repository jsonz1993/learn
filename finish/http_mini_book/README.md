啦啦啦啦啦啦 我是卖报的小行家

[http小书 图灵](http://www.ituring.com.cn/book/1791)

# http 简介

请求:
客户端软件打开到服务器的连接，发起请求如下：
```
GET /hello.htm HTTP/1.1
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36
Host: example.com
Accept-Language: en-us
Accept-Encoding: gzip, deflate
```

响应:
服务端收到请求消息后根据资源定位符在服务器找到该资源，并响应给客户端:
```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 22
ETag: W/"16-dDTk/xb5lvRNBfrz6lE//HVBox8"
Date: Tue, 22 May 2018 03:04:08 GMT
Connection: keep-alive

<h1>Hello, Jsonz!</h1>
```

## 请求消息
请求信息一般由请求行、头部字段区、CRLF与消息主体（可选）组成

### 请求行

请求消息的第一行称为请求行，一般包括 `请求方法`， `请求资源标识符` 还有请求的`协议版本`

> Request-List = Method SPACE Request-URI SPACE HTTP-Version CRLF

请求方法比较常用的有 `GET`, `POST`。 这里用的是`GET` 发起一个请求获取资源
- GET 请求一个制定名称的资源
- POST 创建一个新的子资源，或者更新一个存在的资源
- PUT 指定的URL不存在则创建，存在则修改
- DELETE 删除指定资源
- OPTIONS 返回服务器支持的方法
- CONNECT、TRACE

> 对于 POST 和 PUT的选择，作者给出的例子是创建订单
PUT /other/1 创建单号为1的订单，如果存在就更新他，订单号由客户端提供
POST /other 创建订单，订单号由服务端提供
POST /other/1 更新订单，如果不存在应该抛错
重复执行PUT请求不会影响服务器状态，而POST则会导致创建两个订单

但是工作中，几乎只用过GET和POST，对于创建订单的例子中，PUT和POST的区别我的理解比较浅显，一个是客户端/服务端提供订单号，一个是语义化。

### 头部字段
从第二行到空行之间都属于头部字段区，用来传递更多详细的信息，这个案例里面是
```
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36
Host: example.com
Accept-Language: en-us
Accept-Encoding: gzip, deflate
```
比如说这里:
`User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36` 我们可以知道客户端用的是 Mac OSx系统，Chrome v66.0.x版本的浏览器
`Accept-Language: en-us` 语言是英语
`Accept-Encoding: gzip, deflate` 支持的压缩编码为gzip和deflate

### 空行(CRLF)
空行也叫CRLF，是隔开请求头与请求主体的

### 消息主体
发送给服务端的消息，比如用POST方法提交表单时，表单的内容就是存在消息主体里面。如果是用GET方法就会丢到请求URL里

## 响应信息
响应信息和请求信息的组成结构相似，由状态行、头部字段行、空行（CRLF）和消息主体构成。

### 状态行

`HTTP/1.1 200 OK`

请求行一般由 `协议版本号`、`状态码`与`状态码描述`组成。

协议版本号有: 0.9、1.0、1.1、2.0等，目前比较流行的是2.0与1.1

状态码有以下几种类型，状态码和前端开发会比较相关一点，更具体的介绍后面会详细说
- 1xx 信息提示
- 2xx 成功
- 3xx 重定向
- 4xx 客户端错误
- 5xx 服务端错误

### 头部字段

状态行与空行之间就是响应头部字段了， 响应头比请求头功能相对来说多一点，比如后面会说到的`Set-Cookie`。
```
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 22
ETag: W/"16-dDTk/xb5lvRNBfrz6lE//HVBox8"
Date: Tue, 22 May 2018 03:04:08 GMT
Connection: keep-alive
```
响应头包括一些服务本身的信息以及响应内容体的信息，比如这里的
`Date: Tue, 22 May 2018 03:04:08 GMT` 是响应的时间
`Content-Length: 22`是返回的消息体长度。

### 空行(CRLF)
和请求的CRLF是一样的，用来隔开响应头和响应内容主体

### 响应消息主体

在我们这个例子里面是一句很简单的 `<h1>Hello, Jsonz!</h1>`，这里响应主体有很多种格式，如果是gif的话会返回gif的二进制字节集合


# 请求

请求的结构组成Request:
```
Request-Line CRLF
*Request-HEAD CRLF
CRLF
[ message-body ]
```

> Request-Line => Request-List = Method SPACE Request-URI SPACE HTTP-Version CRLF
这里我们主要Request-Methods部分

## GET
GET 方法一般是用来获取URL指定的资源

### 可以配合 `Range` 来获取局部资源。

发起请求
```
GET /index.txt HTTP/1.1
Range: bytes=0-4
```

服务端响应
```
HTTP/1.1 206 Partial Content
Content-Type: text/html
Content-Range: bytes 0-5/12
Content-Length: 5
hello
```

在一些视频的场景，比如用户点击到某个进度，我们可以直接从该进度去请求，而不是整一个视频都请求下来。
响应头的`Content-Range: bytes 0-5/12`指的是当前返回0-5，总长为12。

### 配合 ETag 做缓存
服务端在响应头里面会给一个`ETag`标识，这个标识我们在开头的时候有说了是文件的唯一标识符。
那么我们是不是可以这么做，在GET请求时使用条件获取头部字段，如果服务端发现这个字段与文件的ETag标识匹配，则可以做缓存，否则发送新的文档过来。

发起请求
```
GET /hello.htm HTTP/1.1
If-None-Match:  W/"16-dDTk/xb5lvRNBfrz6lE//HVBox8"
```

服务端响应
```
HTTP/1.1 304 Not Modified
X-Powered-By: Express
ETag: W/"16-dDTk/xb5lvRNBfrz6lE//HVBox8"
Date: Tue, 22 May 2018 12:08:23 GMT
Connection: keep-alive
```

这里我们的ETag与文件匹配上了，所以服务端直接响应 304 状态码(Not Modified);

## HEAD
HEAD方法和GET方法的区别是 HEAD方法请求，响应的时候就只会发送响应消息的头部字段，不会把响应消息主体返回

那么HEAD的场景一般在什么地方呢？ 一般可用于发起一个请求来获取服务端的资源大小，再分段获取。


## POST 
我们平时大部分场景用的都是POST方法，因为POST方法不会把参数都丢在URL上，对请求的数据大小没有限制，请求也不会缓存。

## OPTIONS
OPTIONS方法主要是用来查询URL指定的资源所支持的方法列表

发起请求
```
OPTIONS /hello.htm HTTP/1.1
```

服务端响应
```
HTTP/1.1 200 OK
X-Powered-By: Express
Allow: GET,HEAD
Content-Type: text/html; charset=utf-8
Content-Length: 8
ETag: W/"8-ZRAf8oNBS3Bjb/SU2GYZCmbtmXg"
Date: Tue, 22 May 2018 12:20:42 GMT
Connection: keep-alive

GET,HEAD%
```

这里列出了这个资源支持 GET与HEAD方法

## PUT
PUT方法上面讲了是 对URL指定的资源进行创建，如果存在就修改他。

理论上这种需求直接用POST方法就完全够用了，比如创建订单`POST /order/create`
更新订单 `POST /order/orderId`

但是这里如果改成PUT创建的话，可以直接这样 `PUT /order` 更符合Restful API规范，如果换成前端的层面来说，就像`div`与`header, nav, section, aside, footer`这些更有语义化的标签。

## DELETE 
删除某个资源，没什么好说的

## CONNECT
> 在当前已经建立HTTP连接的情况下，CONNECT 方法用来告知代理服务器，客户端想要和服务器之间建立SSL连接。

> 客户端使用如下消息，通知代理服务器，去做一个连接到指定的服务器地址和端口:
```
CONNECT example.com 443 HTTP/1.1
```
> 代理服务器随后提取CONNECT 方法指定的地址和端口（这里是 example.com 443 ），建立和此服务器的SSL连接，成功后随后通知客户端，需要的连接建立完毕：

```
HTTP/1.1 OK 
```

使用CONNECT发起请求，服务端不会去解析字段等操作，而是完完全全单纯的做转发，我们称之为透明代理。

## TRACE
查询到目标资源经过的中间节点。

# 响应

响应结构组成Response:
```
Response-Line
*(header CRLF) 
CRLF
[ message-body ] 
```

> Response-Line => HTTP-Version SPACE Status-Code SPACE Reason-Phrease CRLF
这里我们主要Status-Code部分


## 1xx

## 2xx
2xx 系列都是表示请求已经成功处理了，这里列举几个比较常见的

### 200 OK
最常见的可能就是200了，平时写ajax很多都是直接判断 `xmlhttp.status==200`, 他代表的是请求已经成功完成

### 201 Created
201表示请求已经被实现，而且有一个新的资源已经依据请求的需要而创建，且其URI已经随Location头信息返回。假如需要的资源无法及时创建的话，应当返回'202 Accepted'。

### 202 Accepted
202代表服务器已接受请求，但尚未处理。最终该请求可能会也可能不会被执行，并且可能在处理发生时被禁止

### 204 No Content
服务器成功处理了请求，没有返回任何内容。

### 206 Partical Content
206主要是为了支持大文件的分段下载，类似迅雷这类的HTTP 下载工具都是使用此类响应实现断点续传或者将一个大文档分解为多个下载段同时下载。

这里用书里的一个例子来展示,先用 HEAD 获取该资源的大小，再用Range分段获取，这些方法上面都有介绍过，这里综合起来运用:
```
HEAD /large.jpg HTTP/1.1
Host: example.com

HTTP/1.1 200 OK
Accept-Ranges: bytes
Content-Length: 4000

Get /large.jpg HTTP/1.1
Host: example.com
Range: bytes=0-1999

HTTP/1.1 206 Partical Content
Accept-Ranges: bytes
Content-Length: 2000
Content-Range: bytes 0-1999/4000

{binary data}

GET /large.jpg HTTP/1.1
Host: example.com
Range: bytes=2000-

HTTP/1.1 206 Partical Content
Accept-Ranges: bytes
Content-Length: 2000
Content-Range: bytes 2000-3999/4000

{binary data}
```

2xx 很多只是规范与语义化的区别。

## 3xx
3xx系列除了 304 以外，其他都是用于重定向的

### 300 Multiple Choices
300是请求的资源有一系列可供选择的回馈信息，用户或浏览器能够自行选择一个首选的地址进行重定向。

### 301 Moved Permanently && 302 Found
301 与 302 都代表当前访问的URL对应的资源被移动到一个新的位置，这个位置会在响应头Location内指定。
他们的区别是 301是永久被移动到新位置，而302是暂时性的临时重定向

### 304 Not Modified
304我们在前面已经有见到过了，用ETag与If-None-Match配合做缓存时，就会返回304 代表该资源未被修改，可以继续用以前下载的副本。

## 400
400指的是客户端错误，既服务端接收到该请求，但是收到的请求无法处理,这里列出常见的几种

### 400 Bad Request
由于明显的客户端错误（例如，格式错误的请求语法，太大的大小，无效的请求消息或欺骗性路由请求），服务器不能或不会处理该请求

### 401 Unauthorized
401既未认证，应该是最简单的用户认证登录系统了。与403不同，这里如果用户提供必要的凭据，就可以访问资源。

### 403 Forbidden
服务器已经理解请求，但是拒绝执行它。与401响应不同的是，身份验证并不能提供任何帮助，而且这个请求也不应该被重复提交。项目中的经验就是，如果用户登录状态过期，后台返回403状态码，这时候我们再去执行自动登录或者提示登录的逻辑。

### 404 Not Fount
请求失败，请求所希望得到的资源未被在服务器上发现，但允许用户的后续请求。这个可能是最常见的4xx状态码

### 412 Precondition Failed
> 客户端发起了条件请求，服务器发现这个请求中的其中一个条件并不成立，那么服务器就会用此错误码作为响应消息的状态码返回给客户端。
比如我们在请求头设置条件限定:`If-Unmodified-Since`，如果服务端校验这个条件，发现说没有满足的话，就会返回 412 状态码。

## 5xx
400是客户端错误，500就是服务端的错误状态码。

### 500 Internal Server Error
500为通用错误消息，服务器遇到了一个未曾预料的状况，导致了它无法完成对请求的处理。没有给出具体错误信息，一般开发者可以查日志等去解决该错误。

### 503 Service Unavailable
> 说明服务器现在无法提供服务，但是将来可以。如果服务器知道何时资源可用，应该在响应中包含Retry-After的首部，提示客户端可以重试服务的时间。
如果没有提供Retry-After头部，那么客户端应当以处理500响应的方式处理它。

以上是觉得比较常见的状态码，更多请见[维基百科](https://zh.wikipedia.org/wiki/HTTP%E7%8A%B6%E6%80%81%E7%A0%81)

## Cache-Control
一般我们在服务端响应可以加上这个响应头`Cache-Control: max-age=2592000` 来让浏览器把这个资源缓存下来，缓存的时间为`2592000`既30天，也可以在时间后面加上个`public`来指示该响应可以被任何中间人（cdn,代理)缓存。

# 消息主体

在请求消息或响应消息里面，都可以包含一个可选的消息主体，服务端或客户端都没办法从消息主体里面获取是什么内容啊，什么类型啊什么的，所以就会有一组头部字段来标示他。

```
Content-Type 实体中所承载对象的类型,如 txt/html; image/jpeg
Content-Length 所传送实体主体的长度或大小。
Content-Language 与所传送对象最相配的人类语言, en-us等
Content-Encoding 对象数据所做的压缩格式,gzip等.
Content-Location 一个备用位置，请求时可通过它获得对象。
Content-Range 说明它是整体的哪个部分,可用于分段获取。
Content-MD5 实体主体内容的校验和。
Last-Modified 所传输内容在服务器上创建或最后修改的日期时间。
Expires 实体数据将要失效的日期时间。
Allow 该资源所允许的各种请求方法，例如，GET 和 HEAD。
ETag 这份文档的唯一验证码，可用于缓存
```

# HTTP/2.0(h2)

这里简单说一下h2与HTTP/1.1对于前端开发人员来说比较大的改动。

## 多路复用 (Multiplexing)
多路复用允许同时通过单一的 HTTP/2 连接发起多重的请求-响应消息。
在HTTP/1.1中，我们客户端在同一时间，针对同一于域名下的请求会有限制，如果超过某个值的请求会被堵塞到。所以一般的优化有前端用雪碧图来合并多个小图片减少请求，后端把资源分到不同的域下面，减少同域的限制。
但是如果网站用了h2的话，前端不需要考虑类似雪碧图之类的把多个请求合并为一个减少的优化。

# 最后啰嗦两句

之所以会看《HTTP小书》是因为前段时间问我一个朋友说有没有关于HTTP比较好的书籍推荐，《HTTP权威指南》六七百页细节太多怕是看完留不住什么概念。他给我推了《HTTP小书》，这本书算是有点改变我一些关于知识获取的认知。
简单来说就是，大家别看9块钱的书就那么几页，翻一个上午或者一天就看完，然后就觉得不值，非得要看哪种几百页的才觉得钱回本了。
这篇文只是个人在看的时候做了一些归纳，书中有更详细更好的解释，关键是提供了源码与例子，在看概念的时候实操一遍会加深很多印象。
总的来说，这本书挺值的，和他的标语一样：_准能帮你省下不少**时间**_

[《HTTP小书》](http://www.ituring.com.cn/book/1791)
[《HTTP小书》作者刘传君](https://juejin.im/user/58774201570c35006207d274)
[HTTP Method 更详细的介绍](http://www.cnblogs.com/machao/p/5788425.html)
[HTTP缓存 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching_FAQ)