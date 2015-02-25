var $style2 = $('.input2');
var $input1 = $('.style1');
var $input2 = $('.style2');
var $place1 = $('.placeholder1');
var $place2 = $('.placeholder2');
var styleSpeed = 200;
$(function() {
	//style 1
	$input1.on('focus', function(){
		console.log('focused');
		$('.placeholder1').animate({
			top: '-30%',
		});
		$('.input').animate({
			paddingTop: '2em',
			paddingBottom: '2em',
		});
	});
	$place1.on('click', function(){
		$input1.trigger('focus');
	});

	$input1.on('focusout', function(){
		console.log('unfocused');
		$('.placeholder1').animate({
			top: '50%',
		});
		$('.input').animate({
			padding: '1em',
		})
	});
	//style 2
	$style2.on('click', function(){
		console.log('clicked');
		$input2.animate({
			fontSize: '30px',
			padding: '15px',
			paddingLeft: '5px',
		}, styleSpeed);
		$place2.animate({
			fontSize: '1.3em'
		}, styleSpeed);
		$input2.trigger('focus');
	});
	$input2.on('focusout', function(){
		$input2.animate({
			fontSize: '0px',
			padding: '0'
		}, styleSpeed);
		$place2.animate({
			fontSize: '30px'
		}, styleSpeed)
	});
	//style 3
	
});