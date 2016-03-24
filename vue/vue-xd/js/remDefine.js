/**
 * Created by Jsonz on 2016/3/24.
 */
var Util,Conf;

(function(){
  var docEl = document.documentElement,
      resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize';

    var fn = function(){
        var clientWidth = docEl.clientWidth;

        if (!clientWidth) return;
        docEl.style.fontSize = 100 * (clientWidth / 720) + 'px';
    };

    if (!docEl.addEventListener) return;

    Util = (function(self){
        self.remDeine = fn;

        return self;
    })(Util || {});

    window.addEventListener(resizeEvent, Util.remDeine, false);
    Util.remDeine()
})();