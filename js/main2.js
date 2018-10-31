new Pjax({
    selectors: [
		"title",
		"meta",
		".slides-container",
		".archive",
		".project-nav",
		".project-container",
		"footer"
	]
  });
  
var $gallery = $('.slides').flickity({
	bgLazyLoad: true,
	contain: true,
	autoPlay: 4000,
	pageDots: false,
	wrapAround: true,
	arrowShape: { 
	  x0: 0,
	  x1: 60, y1: 30,
	  x2: 60, y2: 0,
	  x3: 60
	}
});

function onLoadeddata( event ) {
    var cell = $gallery.flickity( 'getParentCell', event.target );
    $gallery.flickity( 'cellSizeChange', cell && cell.element );
  }
  
  $gallery.find('video').each( function( i, video ) {
    video.play();
    $( video ).on( 'loadeddata', onLoadeddata );
  });


$(document).ready(function() 
{ $("#archive").tablesorter(); 
}); 

keyboardPagination( '.project-nav',
{
	prev: '.project-prev',
	next: '.project-next'
});