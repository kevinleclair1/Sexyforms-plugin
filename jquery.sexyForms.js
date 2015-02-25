	//variables
	var placeText1 = $('.input').data('placeholder');

	var placeInject = $('<span>').addClass('placeholder1').text(placeText1);
	var inputInject = $('<input>').attr("type","text").addClass('style1');
	
	$('.input').append(inputInject, placeInject);
	
	var $style2 = $('.input2');
	var $style3 = $('.input3');
	var $input1 = $('.style1');
	var $input2 = $('.style2');
	var $input3 = $('.style3');
	var $place1 = $('.placeholder1');
	var $place2 = $('.placeholder2');
	var $place3 = $('.placeholder3');
	var styleSpeed = 200;

$(function() {

	//style 1
	$input1.on('focus', function(){
		console.log('focused');
		if ( $input1.val() === "") {
			console.log('focused');
			$('.placeholder1').animate({
				top: '-30%',
			});
			$('.input').animate({
				paddingTop: '2em',
				paddingBottom: '2em',
			});
		};
	});
	$place1.on('click', function(){
		$input1.trigger('focus');
	});
	$input1.on('focusout', function(){
		if ( $input1.val() === "") {
			console.log('unfocused');
			$('.placeholder1').animate({
				top: '50%',
			});
			$('.input').animate({
				padding: '1em',
			})
		};
	});
	//style 2
	// $style2.on('click', function(){
	// 	if ( $input2.val() === "") {
	// 		console.log('clicked');
	// 		$input2.animate({
	// 			fontSize: '30px',
	// 			padding: '15px',
	// 			paddingLeft: '5px',
	// 		});
	// 		$place2.animate({
	// 			fontSize: '1.3em'
	// 		});
	// 		$input2.trigger('focus');
	// 	};
	// });
	// $input2.on('focusout', function(){
	// 	if ( $input2.val() === "") {
	// 		$input2.animate({
	// 			fontSize: '0px',
	// 			padding: '0'
	// 		});
	// 		$place2.animate({
	// 			fontSize: '30px'
	// 		});
	// 	};
	// });
	// //style 3
	// $place3.on('click', function(){
	// 	if ( $input3.val() === "") {
	// 		$input3.animate({
	// 			left: '0',
	// 		})
	// 		$place3.animate({
	// 			width: '30%',
	// 			left: '70%',
	// 		})
	// 		$input3.trigger('focus');
	// 	};
	// });
	// $input3.on('focusout', function(){
	// 	if ( $input3.val() === "") {
	// 		$input3.animate({
	// 			left: '-70%',
	// 		})
	// 		$place3.animate({
	// 			width: '100%',
	// 			left: '0',
	// 		})
	// 	};
	// });
});