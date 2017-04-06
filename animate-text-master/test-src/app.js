import { checkNode } from './utils/check';

class AnimateText {
  constructor(el, options) {
    this.init(el, options);
  }

  // 初始化 包括检查el， 数据初始化，动画运行等
  init(el, options) {
    return this.initData(el, options)
      ? this.isNumber? this.numberAnimation(this.time): this.textAnimateion(this.time)
      : '';
  }

  // 初始化数据
  initData(el, options) {
    this.el = checkNode(el);
    if (!this.el) return;
    this.options = this.formatOptions(options);
    this.options.isNumber? this.numberInit(): this.textInit();
    this.isNumber = this.options.isNumber;
    this.time = this.options.time
    this.el.innerText = '';
    this.onAnimated = this.options.onAnimated;
    return true;
  }

  // 格式化参数
  formatOptions(options) {
    if (typeof options === 'number') options = {time: options};
    return Object.assign({
      time: 500,
      isNumber: false,
      startNumber: 0,
      changeCount: 32,
      onAnimated() {}
    }, (options || {}));
  }

  // 数字类型的初始化数据
  numberInit() {
    this.number = Number(this.el.innerText);
    if (!this.number && this.number !== 0) {
      this.options.isNumber = false;
      return this.initData(el, this.options);
    }
    this.startNumber = this.options.startNumber - 0 || 0;
    this.changeCount = this.options.changeCount - 0 || 24;
  }

  // 文字类型处理
  textFn() {
    this.text = this.el.innerText;
    this.textArr = this.text.split('');
  }

  //  
  numberAnimation(time= this.time) {
    if (this.number === 0) return;
    let targetNum = this.number,
      targetNumberDecimalLen = this.getDecimaLen(targetNum),
      startDecimalLen = this.getDecimaLen(this.startNumber),
      decimalLength = Math.max(targetNumberDecimalLen, startDecimalLen),
      d = this.number - this.startNumber,
      everyD = (d / this.changeCount).toFixed(decimalLength) - 0,
      curNumber = this.startNumber;
    if (everyD <= 0) {
      console.warn('差值过小');
      return this.el.innerText = targetNum;
    }

    this.tid = setInterval(()=> {
      curNumber = (curNumber + everyD).toFixed(decimalLength) - 0;
      if (Math.abs(curNumber - targetNum) < Math.abs(everyD)) {
        this.el.innerText = targetNum;
        this.onEnd();
      }
      this.el.innerText = curNumber;
    }, time/ this.changeCount); 
  }

  // 文本动画
  textAnimateion(time= this.time) {
    let textArr = [].concat(this.textArr),
      curTextArr = [];
    this.tid = setInterval(()=> {
      let word = textArr.shift();
      if (!word) {
        this.onEnd();
      }
      curTextArr.push(word);
      this.el.innerText = curTextArr.join('');
    }, time/ this.textArr.length );
  }

  // 结束函数
  onEnd() {
    clearInterval(this.tid);
    if (typeof this.onAnimated !== 'function') return;
    setTimeout(()=> {
      this.onAnimated();
    }, 0)
  }

  // 返回小数点长度
  getDecimaLen(number= '0') {
    let numberStr = number + '';
    return numberStr.split('.')[1] && numberStr.split('.')[1].length || 0;
  }
}

export default AnimateText;