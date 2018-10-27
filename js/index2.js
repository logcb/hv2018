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