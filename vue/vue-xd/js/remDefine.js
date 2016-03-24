/**
 * Created by Jsonz on 2016/3/24.
 */

(function(){
  var docEl = document.documentElement,
      resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize';

    var fn = function(){
        var clientWidth = docEl.clientWidth;

        if (!clientWidth) return;
        docEl.style.fontSize = 100 * (clientWidth / 720) + 'px';
    };

    if (!docEl.addEventListener) return;

    window.addEventListener(resizeEvent, fn, false);

    fn();

    Util.remDeine = fn;
})();