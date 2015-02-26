	
$.fn.sexyForm = function (style){

	// have input box, container span and placeholder span all have general classes plus unique classes based on style
	// intial markup will add html elements with general class, if statements will add unique classes for CSS styling
	// create general events listeners before styles if statement
	// if statement 
	// animations should be included in form box click function
	//style 1
	if ( style === 'one') {
		//INITIAL HTML MARKUP INJECT
		var placeText = $('.input').data('placeholder');
		var placeInject = $('<span>').addClass('placeholder1').text(placeText);
		var inputInject = $('<input>').attr("type","text").addClass('input1');
		$('.input').append(inputInject, placeInject);

		//ADDING STYLE CLASS
		$('.input').addClass('style1');
		var $style1 = $('.style1');

		//ANIMATIONS ON CLICK

		$style1.on('click', function(){

			//ANIMATION VARIABLES
			var currentId = '#' + $(this).attr('id');
			var $currentInput = $(currentId).children('input')
			var $currentPlace = $(currentId).children('span')
			var $currentBox = $(currentId);

			//ANIMATION CSS STARTING VALUES
			var startPad = $currentBox.css('padding');
			var startPos = $currentPlace.css('top');

			$currentInput.trigger('focus');
			console.log('focused');
			if ( $currentInput.val() === "") {
				$currentPlace.animate({
					top: '-30%',
				});
				$currentBox.animate({
					paddingTop: '2em',
					paddingBottom: '2em',
				});
			};
			$currentInput.one('focusout', function(){
				if ( $currentInput.val() === "") {
					console.log('unfocused');
					$currentPlace.animate({
						top: startPos,
					});
					$currentBox.animate({
						padding: startPad,
					})
					$currentBox.removeClass('animate');
				};
			}); //end of focusout listener
		}); //end of style1 click listener
	}; //end of style one js
	if ( style === 'two') {
		//style 2
		
		//INITIAL HTML MARKUP INJECT
		var placeText = $('.input').data('placeholder');

		var placeInject = $('<span>').addClass('placeholder2').text(placeText);
		var inputInject = $('<input>').attr("type","text").addClass('input2');
		$('.input').append(placeInject, inputInject);

		$('.input').addClass('style2');
		var $style2 = $('.style2');

		//ANIMATIONS
		$style2.on('click', function(){
			
			//ANIMATION VARIABLES
			var currentId = '#' + $(this).attr('id');
			var $currentInput = $(currentId).children('input')
			var $currentPlace = $(currentId).children('span')

			//ANIMATION CSS STARTING VALUES
			var startFontInput = $currentInput.css('font-size');
			var startPadInput = $currentInput.css('padding');
			var startFontPlace = $currentPlace.css('font-size');


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
			$currentInput.one('focusout', function(){
				if ( $currentInput.val() === "") {
					$currentInput.animate({
						fontSize: startFontInput,
						padding: startPadInput
					});
					$currentPlace.animate({
						fontSize: startFontPlace
					});
				};
			}); //end of $input2.focusout
		}); //end of $style2.click
	}; //end of style 2 scripts
	if ( style === 'three') {

		//style 3

		//INITIAL HTML MARKUP INJECT
		var placeText = $('.input').data('placeholder');

		var placeInject = $('<span>').addClass('placeholder3').text(placeText);
		var inputInject = $('<input>').attr("type","text").addClass('input3');

		$('.input').append(inputInject, placeInject);

		$('.input').addClass('style3');
		var $place3 = $('.placeholder3');

		//ANIMATIONS

		$place3.on('click', function(){
			
			//ANIMATION VARIABLES
			var currentId = '#' + $(this).parent().attr('id');
			var $currentInput = $(currentId).children('input');
			var $currentPlace = $(currentId).children('span');

			//ANIMATION CSS STARTING VALUES
			var startPosInput = $currentInput.css('left');
			var startWidth = $currentPlace.css('width');
			var startPosPlace = $currentPlace.css('left');

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
			$currentInput.one('focusout', function(){
				if ( $currentInput.val() === "") {
					$currentInput.animate({
						left: startPosInput,
					})
					$currentPlace.animate({
						width: startWidth,
						left: startPosPlace,
					})
				};
			});
		});
	}
};
	