function setBottom(el) {
	el = el instanceof jQuery ? el : $(el);
	var nowTop = el.offset().top,
		distance = $(window).height() - el.outerHeight(true),
		lastDis = distance - nowTop;

	if (lastDis > 0) el.css('margin-top', lastDis);
}