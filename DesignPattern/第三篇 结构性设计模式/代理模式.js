/**
 * Created by Administrator on 2016/9/18.
 */
/**
 *
 *
 */

/**
 * 跨域
 * 同一域名不同端口, 如 http://www.baidu.com:8081 && http://www.baidu.com:8002
 * 同一域名不同协议，如 http://www.baidu.com 与 https://www.baidu.com
 * 域名与域名对应的ip,如 http://www.baidu.com && http://61.135.168.125
 * 主域与子域，如 http://www.baidu.com && http://tieba.baidu.com
 * 子域与子域，如 http://tieba.baidu.com && http://fanyi.baidu.com
 */

// 站长统计，利用img之类的标签通过src属性可以向其他域下的服务器发送请求。不过这类请求是get，不会有响应数据。

var Count = (function(){
    var _img = new Image();
    return function (param) {
        var str = 'http://www.count.com/a.gif?';
        for (var i in param) str += i + '=' + param[i];
        _img.src = str;
    }
})();

// JSONP
// 前端浏览器页面 <script> function jsonpCallBack(res,req){console.log(res,req)}</script>
// <script src="http://a.com/b.php?callback=jsonpCallBack&data=username"></script>
// 不过这种需要后台配合

// 代理模版
// 代理页面B调用被代理的页面A中对象的方式是可以的，所以只需要在被访问的域中，请求返回的Header重定向到代理页面，并在代理页面中处理被代理的页面A就可以了。
// 比如自己的域成为X，另外的域成为Y，X有一个被代理页面A。A中应该具备三个部分，第一部分是发送请求的模块，如form表单提交，负责向Y域发送请求，并提供额外两组数据，其一是要执行的回调函数名称，其二是X域中代理模版所在的路径，并将target目标指向响应目标target的指向，并将嵌入X域中的代理页面作为子页面，既B页面。第三部分是一个回调函数，负责处理返回的数据。 一脸愣比
// 见index.html
