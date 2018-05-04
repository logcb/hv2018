window.addEventListener("beforeunload", function () {
  document.body.classList.add("animate-out");
});
keyboardPagination( '.project-nav',
{
	prev: '.project-prev',
	next: '.project-next'
});