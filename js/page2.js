keyboardPagination( '.project-nav',
{
	prev: '.project-prev',
	next: '.project-next'
});
new Pjax({
    selectors: [".project-container", ".slides-container"]
});