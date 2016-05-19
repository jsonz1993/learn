function Swipe(elm) {
	var element = elm.find(':first'),
		swipe = {},
		slides = element.find('li'),
		width = elm.width(),
		height = elm.height();

	element.css({
		width : (slides.length * width) + 'px',
		height : height + 'px'
	});

	$.each(slides, function(index, item){
		$(item).css({
			width : width + 'px',
			height : height + 'px'
		})
	})

	swipe.scrollTo = function(x, speed) {
		element.css({
			'transition-time-function' : 'linear',
			'transition-duration' : speed + 'ms',
			'transform' : 'translate3d(-' + x + 'px,0px,0px)'
		})

		return this;
	}

	return swipe;
}