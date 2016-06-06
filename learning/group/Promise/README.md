[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)


	<div id="log"></div>
    <button id="btn">按钮</button>

    <script>
        var log = document.querySelector('#log'),
            btn = document.getElementById('btn'),
            promiseCount = 0,
            testPromise = function(){
                var thisPromiseCount = ++promiseCount;
                
                log.insertAdjacentHTML('beforeend', thisPromiseCount + ')同步代码开始<br/>' );

                var p1 = new Promise(function(resolve, reject){
                    log.insertAdjacentHTML('beforeend', thisPromiseCount + ') promise 开始执行<br/>');

                    setTimeout(function(){
                        // 我们满足（fullfil）了这个promise!
                        resolve(thisPromiseCount); // 允许
                        reject(thisPromiseCount); // 拒绝
                    }, Math.random() * 2000 + 1000);
                })

                p1.then(function(val) {
                    log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Promise被满足了(异步代码结束)<br/>');
                }, function(val){
                    log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Promise拒绝了你(异步代码结束)<br/>');
                })

                log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Promise同步结束<br/>');
            };

        btn.addEventListener('click', testPromise);
    </script>



###### insertAdjacentHTML 
将指定的文本解析为 HTML 或 XML，然后将结果节点插入到 DOM 树中的指定位置处。该方法不会重新解析调用该方法的元素，因此不会影响到元素内已存在的元素节点。从而可以避免额外的解析操作，比直接使用 innerHTML 方法要快。

	log.insertAdjacentHTML('beforeend', thisPromiseCount + ')同步代码开始' );

###### Promise 封装ajax 极为巧妙


    'use strict';

    // A-> $http function is implemented in order to follow the standard Adapter pattern
    function $http(url) {

        // A small example of object
        var core = {

            // Method that performs the ajax request
            ajax: function(method, url, args) {

                // Creating a promise
                var promise = new Promise(function(resolve, reject) {

                    // Instantiates the XMLHttpRequest
                    var client = new XMLHttpRequest();
                    var uri = url;

                    if (args && (method === 'POST' || method === 'PUT')) {
                        uri += '?';
                        var argcount = 0;
                        for (var key in args) {
                            if (args.hasOwnProperty(key)) {
                                if (argcount++) {
                                    uri += '&';
                                }
                                uri += encodeURIComponent(key) + '=' + encodeURIComponent(args[key]);
                            }
                        }
                    }

                    client.open(method, uri);
                    client.send();

                    client.onload = function() {
                        if (this.status >= 200 && this.status < 300) {
                            // Performs the function "resolve" when this.status is equal to 2xx
                            resolve(this.response);
                        } else {
                            // Performs the function "reject" when this.status is different than 2xx
                            reject(this.statusText);
                        }
                    };
                    client.onerror = function() {
                        reject(this.statusText);
                    };
                });

                // Return the promise
                return promise;
            }
        };

        // Adapter pattern
        return {
            'get': function(args) {
                return core.ajax('GET', url, args);
            },
            'post': function(args) {
                return core.ajax('POST', url, args);
            },
            'put': function(args) {
                return core.ajax('PUT', url, args);
            },
            'delete': function(args) {
                return core.ajax('DELETE', url, args);
            }
        };
    };
    // End A

    // B-> Here you define its functions and its payload
    var mdnAPI = 'https://cnodejs.org/api/v1/topics';
    var payload = {
        'topic': 'js',
        'q': 'Promise'
    };

    var callback = {
        success: function(data) {
            console.log(1, 'success', JSON.parse(data));
        },
        error: function(data) {
            console.log(2, 'error', JSON.parse(data));
        }
    };
    // End B

    // Executes the method call 
    $http(mdnAPI)
        .get(payload)
        .then(callback.success)
        .catch(callback.error);

    // Executes the method call but an alternative way (1) to handle Promise Reject case 
    $http(mdnAPI)
        .get(payload)
        .then(callback.success, callback.error);

    // Executes the method call but an alternative way (2) to handle Promise Reject case 
    $http(mdnAPI)
        .get(payload)
        .then(callback.success)
        .then(undefined, callback.error);

[http://bluereader.org/article/57381475](http://bluereader.org/article/57381475)
#### 网上Promise
	var _ = {
        get: function(uri) {
            return http(uri, 'GET', null);
        },

        post: function(uri, data) {
            if (typeof data === 'object' && !(data instanceof String || (FormData && data instanceof FormData))) {
                var params = [];
                for (var p in data) {
                    if (data[p] instanceof Array) {
                        for (var i = 0; i < data[p].length; i++) {
                            params.push(encodeURIComponent(p) + '[]=' + encodeURIComponent(data[p][i]));
                        }
                    } else {
                        params.push(encodeURIComponent(p) + '=' + encodeURIComponent(data[p]));
                    }
                }
                data = params.join('&');
            }

            return http(uri, 'POST', data || null, {
                "Content-type": "application/x-www-form-urlencoded"
            });
        },

        http: function(uri, type, data, headers) {
        	return new Promise(function(resolve, reject) {
        		var xhr = new XMLHttpRequest();
        		xhr.open(type, uri);
        		if (headers) {
        			for (var p in headers) {
        				xhr.setRequestHeader(p, headers[p]);
        			}
        		}
        		xhr.addEventListener('readystatechange', function(e){
        			if (xhr.readyState === 4) {
        				if (String(xhr.status).match(/^2\d\d$/)) {
        					resolve(xhr.responseText);
        				} else {
        					reject(xhr);
        				}
        			}
        		})
        	})
        },

        wait: function(duration) {
        	return new Promise(function(resolve, reject) {
        		setTimeout(resolve, duration);
        	}
        },

        waitFor: function(element, event, useCapture) {
        	retrun new Promise(function(resolve, reject) {
        		element.addEventListener(event, function listener(event){
        			resolve(event);
        			this.removeEventListener(event, listener, userCapture);
        		}, useCapture)
        	})
        },

        loadImage: function(src){
        	return new Promise(function(resolve, reject)) {
        		var image = new Image;
        		image.addEventListener('load', function listener(){
        			resolve(image);
        			this.removeEventListener('load', listener, false)
        		});
        		image.src = src;
        		image.addEventListener('error', reject);
        	}
        },

        runScript: function(src) {
        	return new Promise(function(resolve, reject){
        		var script = document.createElement('script');
        		script.src = src;
        		script.addEventListener('load', resolve);
        		script.addEventListener('error', reject);
        		(document.getElementsByTagName('head')[0] || document.body || document.documentElement).addendChild(script);
        	})
        },

        domReady: function(){
        	return new Promise(function(resolve, reject){
        		if (document.readyState === 'comlete') {
        			resolve();
        		} else {
        			document.addEventListener('DOMContentLoaded', resolve);
        		}
        	})
        }
    };
   


###### 黑魔法

	function currying() {
        var f = arguments[0],
            args = Array.prototype.slice.call(arguments, 1);

        return function() {
            args.push.apply(args, arguments);
            return f.apply(this, args);
        }
    }


###### all

全部执行完执行then

	Promise.all([runAsync1(),runAsync2(),runAsync3()])
	.then(function(results){console.log(results)}


###### rece

一个执行完就执行then

场景：可以用来判断timeout事件,执行一个请求一个timeout

	Promise.rece([runAsync1(),runAsync2(),runAsync3()])
	.then(function(results){console.log(results)}
