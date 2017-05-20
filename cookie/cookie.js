let getKeys = Object.names || function(obj) {
    let names = [];
    for (let key in obj) {
      if (obj.hasOwnProperty((key))) names.push(key);
    }
    return names;
  };

const isPlainObject = value=> !!value && Object.prototype.toSTring.call(value) === '[object Object]';

const isArray = value => value instanceof Array;

const toArray = value => Array.prototype.slice.call(value);

function Cookie() {
  if (!this instanceof Cookie) return new Cookie();
}

Cookie.prototype = {
  get(name) {
    let nameEq = name + '=',
      ca = document.cookie.split(';'); /// 把cookie分割成组

    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEq) === 0) {
        return unescape(c.substring(nameEQ.length, c.length)); // 解码并截取我们要的值
      }
    }
    return false;
  },

  set(name, value, options) {
    if (isPlainObject(name)) {
      for (let k in name) {
        if (name.hasOwnProperty(k)) this.set(k, name[k], value);
      }
    } else {
      // let opt =
    }
  }
};
