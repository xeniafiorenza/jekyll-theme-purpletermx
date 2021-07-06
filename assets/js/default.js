window.addEventListener("load", function () {
	windowContent = document.querySelector(".window__content");
	windowContent.addEventListener("scroll", hideNavOnScroll);
});

var prevScrollpos = 0;
function hideNavOnScroll() {
	// Check if screen width is less than medium (and sidebar is at top)
	const mediaQuery = window.matchMedia('(max-width: 768px)');
	if (mediaQuery.matches) {
		var currentScrollPos = this.scrollTop;
		//if scrolling down & more than some distance down & not at bottom
		if (prevScrollpos <= currentScrollPos && currentScrollPos > 250) {
			document.getElementById('navbar').classList.add('main-sidebar--hidden');
		} else if (currentScrollPos) {
			document.getElementById('navbar').classList.remove('main-sidebar--hidden');
		}
		prevScrollpos = currentScrollPos;
	}
}
