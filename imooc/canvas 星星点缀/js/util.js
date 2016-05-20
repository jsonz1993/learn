var Util = {
    

    preImage: function(url, callback) {
        var img = new Image();
        img.src = url;

        if (img.complate) {
            callback(img)
        } else {
            img.addEventListener('load', function() {
                callback(img);
            }, false);
        }
    }
}

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();