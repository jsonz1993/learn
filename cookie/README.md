对操作cookie做一些接口, 包括 `set`, `get`, `remove`, `clear`, `getAll` 等， 都支持批量处理。

## 用法

```JavaScript
// 获取
Cookie.get('name');

// 设置
Cookie.set({key: val, key1: val1}, opts);
Cookie.set('key', 'val');

// 移除某个值
Cookie.remove(name);
Cookie.remove([name1, name2]);

// 清除Cookie
Cookie.clear();

// 获取所有cookie
Cookie.getAll(); // {key: val}
```

## 源码解析
### set
设置cookie, 如果之前没有接触过cookie.set 可以参考文档 [https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/cookies/set](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/cookies/set)

添加cookie比较特殊，直接用 `document.cookie = 你要设置的cookie` 就可以了。

```JavaScript
set(name, value, opts) {
	if (isObject(name)) {
	  for (let key in name) {
	    if (name.hasOwnProperty(key)) this.set(key, name[key], value);
	  }
	} else {
	  let opt = isObject(opts)? opts: { expires: opts},
	    expires = typeof opt.expires === 'undefined'? '': opt.expires,
	    expiresType = typeof expires,
	    path = typeof opt.path === 'undefined'? ';path=/': `;path=${opt.path}`,
	    domain = opt.domain? `;domain=${opt.domain}`: '',
	    secure = opt.secure? ';secure': '';

	  if (expiresType === 'string' && expires) expires = new Date(expires);
	  else if (expiresType === 'number') expires = new Date(+new Date + 1000 * 60 * 60 * 24 * expires);
	  if (expires !== '' && 'toGMTString' in expires) expires = ';expires=' + expires.toGMTString();

	  document.cookie = [name, '=', encodeURI(value), expires, path, domain, secure].join('');
	}
},
```

### get
获取cookie 其实就是遍历 `document.cookie` 然后根据 `name` 去匹配

```JavaScript
get(name) {
	let cookieName = name + '=',
	  ca = document.cookie.split(';');

	for (let i = 0; i < ca.length; i++) {
	  let cItem = (ca[i][0] === ' ')? ca[i].slice(1): ca[i];
	  if (cItem.indexOf(cookieName) === 0) return decodeURI(cItem.substr(cookieName.length+1));
	}

	return false;
},
```

### remove
移除cookie其实就是把这个cookie 设置为过期。

```JavaScript
 remove(name) {
    let names = Array.isArray(name)? name: [name];
    for (let i= 0; i< names.length; i++) {
      this.set(names[i], '', -1);
    }
    return names;
 },
```

### clear
遍历`document.cookie` 把所有的cookie 调用一次`remove`.

```JavaScript
 clear(name) {
    return name? this.remove(name): this.remove(Object.keys(this.getAll()));
 },
```

### getAll
获取本地所有的cookie， 返回 `{key: value}` 形式

```JavaScript
 getAll() {
    if (document.cookie === '') return {};
    let cookies = document.cookie.split('; '), result = {};
    for (let i= 0; i< cookies.length; i++) {
      let item = cookies[i].split('=');
      result[decodeURI(item[0])] = decodeURI(item[1]);
    }
    return result;
 }
```

### 源码

[Jsonz-github](https://github.com/jsonz1993/wheel/tree/master/cookie)

```JavaScript
const isObject = obj=> !!value && Object.prototype.toString.call(obj) === '[object Object]';

const Cookie = {
  get(name) {
    let cookieName = name + '=',
      ca = document.cookie.split(';');

    for (let i = 0; i < ca.length; i++) {
      let cItem = (ca[i][0] === ' ')? ca[i].slice(1): ca[i];
      if (cItem.indexOf(cookieName) === 0) return decodeURI(cItem.substr(cookieName.length+1));
    }

    return false;
  },

  set(name, value, opts) {

    if (isObject(name)) {
      for (let key in name) {
        if (name.hasOwnProperty(key)) this.set(key, name[key], value);
      }
    } else {
      let opt = isObject(opts)? opts: { expires: opts},
        expires = typeof opt.expires === 'undefined'? '': opt.expires,
        expiresType = typeof expires,
        path = typeof opt.path === 'undefined'? ';path=/': `;path=${opt.path}`,
        domain = opt.domain? `;domain=${opt.domain}`: '',
        secure = opt.secure? ';secure': '';

      if (expiresType === 'string' && expires) expires = new Date(expires);
      else if (expiresType === 'number') expires = new Date(+new Date + 1000 * 60 * 60 * 24 * expires);
      if (expires !== '' && 'toGMTString' in expires) expires = ';expires=' + expires.toGMTString();

      document.cookie = [name, '=', encodeURI(value), expires, path, domain, secure].join('');
    }
  },

  remove(name) {
    let names = Array.isArray(name)? name: [name];
    for (let i= 0; i< names.length; i++) {
      this.set(names[i], '', -1);
    }
    return names;
  },

  clear(name) {
    return name? this.remove(name): this.remove(Object.keys(this.getAll()));
  },

  getAll() {
    if (document.cookie === '') return {};
    let cookies = document.cookie.split('; '), result = {};
    for (let i= 0; i< cookies.length; i++) {
      let item = cookies[i].split('=');
      result[decodeURI(item[0])] = decodeURI(item[1]);
    }
    return result;
  }
};
```


## 参考
[https://github.com/jaywcjlove/cookie.js](https://github.com/jaywcjlove/cookie.js)
[https://developer.mozilla.org/en-US/search?q=cookie](https://developer.mozilla.org/en-US/search?q=cookie)




