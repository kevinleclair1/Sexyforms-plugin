var $input = $('input');

$(function() {
	$input.on('focus', function(){
		console.log('focused');
		$('.placeholder').animate({
			top: '-30%',
		});
		$('.input').animate({
			paddingTop: '20px',
			paddingBottom: '20px',
		});
	});
	$input.on('focusout', function(){
		console.log('unfocused');
		$('.placeholder').animate({
			top: '50%',
		});
		$('.input').animate({
			padding: '5px',
		})
	});
});