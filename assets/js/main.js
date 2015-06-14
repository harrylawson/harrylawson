window.harrylawson = window.harrylawson || {};

$(document).ready(function() {
	
	harrylawson.handleRandomLink();
	harrylawson.handleHeader();
	harrylawson.displayRandomPage();
});

$(window).on('resize', function() {
	harrylawson.init();
});

harrylawson.init = function() {
	var innerHeight = window.innerHeight-100,
	innerWidth = window.innerWidth/2;
	$('#text-box .inner').height(innerHeight*0.8);

	if(Modernizr.mq('(min-width: 767px)')) {
		$('#text-box .inner').jScrollPane({autoReinitialise: true, verticalGutter:20});
	} else {
		var api = $('#text-box .inner').data('jsp');
		if(api) {
			api.destroy();
		}
	}
	
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

harrylawson.displayRandomPage = function() {
	var pages = $('#pages .page');

	var random = Math.floor(Math.random()*pages.length);
	var randomPage = pages.eq(random);

	$('#text-box .inner').html(randomPage.find('.text').html());
	$('#media-box').html(randomPage.find('.image').html());

	harrylawson.init();
}
