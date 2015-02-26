	
$.fn.sexyForm = function (style){

	//style 1
	if ( style === 'one') {
		$('.input').addClass('style1');

		//VARIABLES AND INSERTING MARKUP

		var placeText1 = $('.input').data('placeholder');

		var placeInject = $('<span>').addClass('placeholder1').text(placeText1);
		var inputInject = $('<input>').attr("type","text").addClass('input1');

		$('.input').append(inputInject, placeInject);

		var $style1 = $('.style1');
		var $place1 = $('.placeholder1');

		//ANIMATIONS

		$place1.on('click', function(){
			$(this).parent().trigger('click');
			console.log('clicked');
		});
		$style1.on('click', function(){
			var currentId = '#' + $(this).attr('id');
			var $currentInput = $(currentId).children('input')
			var $currentPlace = $(currentId).children('span')
			var $currentBox = $(currentId);
			$currentInput.trigger('focus');
			if ( $currentInput.val() === "") {
				$currentPlace.animate({
					top: '-30%',
				});
				$currentBox.animate({
					paddingTop: '2em',
					paddingBottom: '2em',
				});
			};
			$currentInput.on('focusout', function(){
				if ( $currentInput.val() === "") {
					console.log('unfocused');
					$currentPlace.animate({
						top: '50%',
					});
					$currentBox.animate({
						padding: '1em',
					})
					$currentBox.removeClass('animate');
				};
			});
		});
	};
	if ( style === 'two') {
		//style 2
		
		// VARIABLES AND INSERTING MARKUP

		$('.input').addClass('style2');
		var placeText1 = $('.input').data('placeholder');

		var placeInject = $('<span>').addClass('placeholder2').text(placeText1);
		var inputInject = $('<input>').attr("type","text").addClass('input2');

		$('.input').append(placeInject, inputInject);

		var $input2 = $('.input2');
		var $place2 = $('.placeholder2');
		var $style2 = $('.style2');

		//ANIMATIONS
		$style2.on('click', function(){
			var currentId = '#' + $(this).attr('id');
			var $currentInput = $(currentId).children('input')
			var $currentPlace = $(currentId).children('span')
			if ( $currentInput.val() === "") {
				console.log('clicked');
				$currentInput.animate({
					fontSize: '30px',
					padding: '15px',
					paddingLeft: '5px',
				});
				$currentPlace.animate({
					fontSize: '1.3em'
				});
				$currentInput.trigger('focus');
			};
		}); //end of $style2.click
		$input2.on('focusout', function(){
			if ( $input2.val() === "") {
				$input2.animate({
					fontSize: '0px',
					padding: '0'
				});
				$place2.animate({
					fontSize: '30px'
				});
			};
		}); //end of $input2.focusout
	}; //end of style 2 scripts
	if ( style === 'three') {

		//style 3
		$('.input').addClass('style3');
		var placeText1 = $('.input').data('placeholder');

		var placeInject = $('<span>').addClass('placeholder3').text(placeText1);
		var inputInject = $('<input>').attr("type","text").addClass('input3');

		$('.input').append(inputInject, placeInject);

		var $input3 = $('.input3');
		var $style3 = $('.style3');
		var $place3 = $('.placeholder3');

		$place3.on('click', function(){
			console.log('clicked');
			var currentId = '#' + $(this).parent().attr('id');
			var $currentInput = $(currentId).children('input');
			var $currentPlace = $(currentId).children('span');
			if ( $currentInput.val() === "") {
				$currentInput.animate({
					left: '0',
				})
				$currentPlace.animate({
					width: '30%',
					left: '70%',
				})
				$currentInput.trigger('focus');
			};
		});
		$input3.on('focusout', function(){
			if ( $input3.val() === "") {
				$input3.animate({
					left: '-70%',
				})
				$place3.animate({
					width: '100%',
					left: '0',
				})
			};
		});
	}
};
	