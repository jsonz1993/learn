import { checkNode } from './utils/check';

class AnimateText {
  constructor (el, options) {
    this.initData(el, options) && this.init();
    this.play = this.play.bind(this); // 避免这种情况
  }

  /**
   * 检查和初始化传入参数
   */
  initData(el, options) {
    this.el = checkNode(el);
    if (!this.el) return;
    this.options = this.checkOptions(options);
    if (this.options.isNumber) {
      this.animateFn();
    } else {
      this.textFn();
    }
    this.isNumber = this.options.isNumber;
    this.time = this.options.time;
    this.el.innerText = '';
    this.onAnimated = this.options.onAnimated;
    return true;
  }

  /**
   * 检查并初始化options
   */
  checkOptions(options) {
    if (typeof options === 'number') options = {time: options};
    options = options || {};
    return Object.assign({
      time: 500,
      isNumber: false,
      startNumber: 0,
      changeCount: 32,
      onAnimated() {}
    }, options);
  }

  init () {
    this.isNumber? this.playNumberAnimation(this.time): this.playTextAnimateion(this.time);
  }

  /**
   * 数字类型处理
   */
  animateFn() {
    this.number = Number(this.el.innerText);
    if (!this.number && this.number !== 0) {
      this.options.isNumber = false;
      return this.initData(el, this.options);
    }
    this.startNumber = this.options.startNumber - 0 || 0;
    this.changeCount = this.options.changeCount - 0 || 24;
  }

  /**
   * 文字类型处理
   */
  textFn() {
    this.text = this.el.innerText;
    this.textArr = this.text.split('');
  }

  /**
   * 数字动画
   */
  playNumberAnimation(time= this.time) {
    let changeCount = this.changeCount;
    if (this.number === 0) return;
    let targetNumber = this.number;
    let targetNumberDecimalLength = this.getDecimalLength(targetNumber);
    let StartNumberDecimalLength = this.getDecimalLength(this.startNumber);
    let decimalLength = Math.max(targetNumberDecimalLength, StartNumberDecimalLength);
    let d = this.number - this.startNumber;
    let everyD = (d / changeCount).toFixed(decimalLength) - 0;
    if (everyD <= 0) {
      console.warn('差值过小无法动画');
      return this.el.innerText = targetNumber;
    }
    let curNumber = this.startNumber;
    this.tid = setInterval(()=> {
      curNumber = (curNumber + everyD).toFixed(decimalLength) - 0;
      if (Math.abs(curNumber - targetNumber) < Math.abs(everyD)) {
        this.el.innerText = targetNumber;
        this.onEnd();
        return clearInterval(this.tid);
      }
      this.el.innerText = curNumber;
    }, time/ changeCount);
  }

  // 获取数字小数点位数
  getDecimalLength(number) {
    let numberStr = number + '';
    return numberStr.split('.')[1] && numberStr.split('.')[1].length || 0;
  }

  /**
   * 文本动画
   */
  playTextAnimateion(time= this.time) {
    let textArr = [].concat(this.textArr);
    let curTextArr = [];
    this.tid = setInterval(()=> {
      let word= textArr.shift();
      if (!word) {
        this.onEnd();
        return clearInterval(this.tid);
      }
      curTextArr.push(word);
      this.el.innerText = curTextArr.join('');
    }, time/ this.textArr.length);
  }

  onEnd() {
    let callBack = this.options.onAnimated;
    if (typeof callBack !== 'function') return;
    setTimeout(()=> {
      this.options.onAnimated();
    }, 0);
  }

  play(time= this.time) {
    clearInterval(this.tid);
    this.el.innerText = this.isNumber? this.number: this.text;
    let options = {
      time: this.time,
      isNumber: this.isNumber,
      startNumber: this.startNumber,
      changeCount: this.changeCount,
      onAnimated: this.onAnimated
    }
    this.initData(this.el, options) && this.init();
  }

};

module.exports = AnimateText;
