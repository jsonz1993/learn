var $footer = $('footer'),
	nowTop = $footer.offset().top,
	windowHeight = $(window).height(),
	selfHeight = $footer.outerHeight(true),
	distance = windowHeight - selfHeight,
	lastDis = distance - nowTop;

if (lastDis > 0) $footer.css('margin-top', lastDis);


function setBottom(el) {
	el = el instanceof jQuery ? el : $(el);
	var nowTop = el.offset().top,
		distance = $(window).height() - el.outerHeight(true),
		lastDis = distance - nowTop;

	if (lastDis > 0) el.css('margin-top', lastDis);
}