var $footer = $('footer'),
	nowTop = $footer.offset().top,
	windowHeight = $(window).height(),
	selfHeight = $footer.outerHeight(true),
	distance = windowHeight - selfHeight,
	lastDis = distance - nowTop;

if (lastDis > 0) $footer.css('margin-top', lastDis);
