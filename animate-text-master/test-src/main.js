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
    if (options.isNumber) {
      this.animateFn();
    } else {
      this.textFn();
    }
    this.isNumber = options.isNumber;
    this.time = options.time;
    this.el.innerText = '';
    this.onAnimated = options.onAnimated;
    return true;
  }

  /**
   * 检查并初始化options
   */
  checkOptions(options) {
    if (typeof options === 'number') options = {time: options};
    options = options || {};
    return Object.assign(options, {
      time: 500,
      isNumber: false,
      startNumber: 0,
      changeCount: 32,
      onAnimated() {}
    });
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
    this.startNumber = options.startNumber - 0 || 0;
    this.changeCount = options.changeCount - 0 || 24;
  }

  /**
   * 文字类型处理
   */
  textFn() {
    this.text = this.el.innerText;
    this.textArr = this.textFn.split('');
  }

  /**
   * 数字动画
   */
  playNumberAnimation() {
    let changeCount = this.changeCount;
    if (targetNumber === 0) return;
    let targetNumber = this.number;
    

  }

  /**
   * 文本动画
   */
  playTextAnimateion() {

  }


};

module.exports = AnimateText;
