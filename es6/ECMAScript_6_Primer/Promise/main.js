// Promise对象有以下两个特点。

// （1）对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：Pending（进行中）、Resolved（已完成，又称Fulfilled）和Rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。

// （2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从Pending变为Resolved和从Pending变为Rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果。就算改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。
var promise = new Promise(function(resolve, reject) {
	var success = true;
	if (success) {
		resolve(value); // 成功
	} else {
		reject(error); // 失败
	}
});
promise.then(function(value) {
	// success
}, function(error) {
	// failure
});

function timeout(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, ms, 'done');
	});
}
timeout(100).then((value) => {
	console.log(value);
});


let promise1 = new Promise(function(resolve, reject) {
	console.log('Promise');
	resolve();
});
promise1.then(function() {
	console.log('Resolved.');
});
console.log('Hi!');
// Promise
// Hi!
// Resolved

// 异步加载图片
function loadImageAsync(url) {
	return new Promise(function(res, rej) {
		var img = new Image();
		img.onload = function() {
			res(img);
		}

		img.onerror = function() {
			rej(new Error('Could not load image at' + url));
		};

		img.src = url;
	});
}

// Promise 实现ajax
var getJSON = function(url) {
	var promise = new Promise(function(res, rej) {
		var client = new XMLHttpRequest();
		client.open('GET', url);
		client.onreadystatechange = handler;
		client.responseType = 'json';
		client.setRequestHeader('Accept', 'application/json');
		client.send();

		function handler() {
			if (this.readyState !== 4) return;
			if (this.status === 200) res(this.response);
			else rej(new Error(this.statusText));
		};
	});
	return promise;
}

getJSON("/posts.json").then(function(json) {
  console.log('Contents: ' + json);
}, function(error) {
  console.error('出错了', error);
});

// then 方法返回的是一个新的Promise实例
getJSON('/posts.json').then(function(json) {
	return json.post;
}).then(function(post) {
	// ...
});

// 如果采用链式then,如果第一个then返回的是一个异步，那么第二个then会等第一个then改变状态后才执行
getJSON("/post/1.json").then(
  post => getJSON(post.commentURL)
).then(
  comments => console.log("Resolved: ", comments),
  err => console.log("Rejected: ", err)
);

// Promise.prototype.catch 用于指定发生错误时的回调

// Promise.all()
// 将多个 Promise实例包装成一个新的Promise实例
var p = Promise.all([p1, p2, p3]);
// p 的状态由 p1, p2, p3决定
// p1,p2,p3 全都变成 fulfilled， p 变fulfilled。此时 p1, p2, p3返回值组成一个数组，传递给p的回调函数
// 只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。

// 生成一个Promise对象的数组
var promises = [2, 3, 5, 7, 11, 13].map(function (id) {
  return getJSON("/post/" + id + ".json");
});

Promise.all(promises).then(function (posts) {
  // ...
}).catch(function(reason){
  // ...
});

// done()
// Promise对象的回调链，不管以then方法或catch方法结尾，要是最后一个方法抛出错误，都有可能无法捕捉到（因为Promise内部的错误不会冒泡到全局）。因此，我们可以提供一个done方法，总是处于回调链的尾端，保证抛出任何可能出现的错误。










 




















