$(document).ready(function () {
	$('#container').masonry({
		itemSelector: '.item',
		  "gutter":0
	});

	$('#menu-toggle').on('click', function() {
		$('.side-bar').slideToggle();
	});
});
