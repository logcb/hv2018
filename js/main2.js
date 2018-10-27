new Pjax({
    selectors: [
		"title",
		"meta",
		".slides-container",
		".archive",
		".project-nav",
		".project-container"
	]
});

var $carousel = $('.slides').flickity({
	bgLazyLoad: true,
	contain: true,
	autoPlay: 3500,
	pageDots: false,
	wrapAround: true,
	arrowShape: { 
	  x0: 0,
	  x1: 60, y1: 30,
	  x2: 60, y2: 0,
	  x3: 60
	}
});

$(document).ready(function() 
{ $("#archive").tablesorter(); 
}); 

keyboardPagination( '.project-nav',
{
	prev: '.project-prev',
	next: '.project-next'
});