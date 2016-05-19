
var swipe = Swipe($('#content'));

$('button').click(function(){
	swipe.scrollTo($('#content').width() * 2, 5000)
});


var getValue = function(className) {
	var $elem = $(''+className + '');

	return {
		height : $elem.height(),
		top : $elem.position().top
	}
}

var pathY = function(){
	var data = getValue('.a_background_middle');

	return data.top + data.height / 2;
}();

var $boy = $('#boy'),
	boyHeight = $boy.height();

$boy.css({
	top : pathY - boyHeight + 25
})