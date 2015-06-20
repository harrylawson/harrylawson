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
	innerWidth = window.innerWidth/2,
	newHeight = innerHeight*0.8,
	contentHeight = $('#text-box .inner').innerHeight();
	$('#text-box .inner').height(newHeight);
	if(contentHeight < newHeight) {
		console.log('table-cell')
		$('#text-box .inner').addClass('table-cell');
	} else {
		console.log('block')
		$('#text-box .inner').removeClass('table-cell');
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
