window.harrylawson = window.harrylawson || {};

$(document).ready(function() {
	harrylawson.init();
	harrylawson.handleRandomLink();
	harrylawson.handleHeader();
});

$(window).on('resize', function() {
	harrylawson.init();
});

harrylawson.init = function() {
	var innerHeight = window.innerHeight-100;
	$('#text-box .inner').height(innerHeight*0.8);
}

harrylawson.handleRandomLink = function() {
	$('#main-container').on('click', function() {
		location.href = '';
	});
}

harrylawson.handleHeader = function() {
	$('#header-switcher').on('click', function() {
		if(!$(this).hasClass('closed')) {
			$('header').addClass('closed');
			$(this).addClass('closed');
		} else {
			$('header').removeClass('closed');
			$(this).removeClass('closed');
		}
	});
}
