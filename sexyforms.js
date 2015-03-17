	
$.fn.sexyForm = function (style){

	// have input box, container span and placeholder span all have general classes plus unique classes based on style
	// intial markup will add html elements with general class, if statements will add unique classes for CSS styling
	// create general events listeners before styles if statement
	// if statement 
	// animations should be included in form box click function
	//style 1
	$('.sexyform').on('click',function(){
		$(this).find('input').trigger('focus');
	});


	if ( style === 'one') {
		//INITIAL HTML MARKUP INJECT
		var $input = $('.sexyform');
		for (var i = 0; i < $input.length; i++) {
			var placeText = $($input[i]).data('placeholder');
			var placeInject = $('<span>').addClass('placeholder1').text(placeText);
			var inputInject = $('<input>').attr("type","text").addClass('input1');
			$($input[i]).append(inputInject, placeInject)
		};
		
		//ADDING STYLE CLASS
		$input.addClass('style1');
		var $style1 = $('.style1');
		$style1.data('style', 1);
		//ANIMATIONS ON CLICK
		$style1.on('focus', 'input',function(e){
			e.stopPropagation();
			
			var $form = $(this).parent();

			$form.addClass('form-open');
			//ANIMATION VARIABLES
			var $currentId = '#' + $form.attr('id');
			var $currentInput = $($currentId).children('input');
			var $currentPlace = $($currentId).children('span');
			var $currentBox = $($currentId);
			if($form.data('original-styles') === undefined) {
				//Store data for original styles in object
				//So later you can get it and animate it back.
				$form.data('original-styles', {
					startPad: $currentBox.css('padding'),
					startPos: '50%'
					//$currentPlace.css('top')
				});
			}
	
			if ( $currentInput.val() === "") {
				$currentPlace.animate({
					top: '-30%',
				});
				$currentBox.animate({
					paddingTop: '2em',
					paddingBottom: '2em',
				});
			};
		}); //end of style1 click listener
	}; //end of style one js
	if ( style === 'two') {

		//style 2
		var $input = $('.sexyform');
		for (var i = 0; i < $input.length; i++) {
			var placeText = $($input[i]).data('placeholder');
			var placeInject = $('<span>').addClass('placeholder2').text(placeText);
			var inputInject = $('<input>').attr("type","text").addClass('input2');
			$($input[i]).append(placeInject, inputInject);
		};
		//INITIAL HTML MARKUP INJECT
		


		$input.addClass('style2');
		var $style2 = $('.style2');
		$style2.data('style', 2);

		//ANIMATIONS
		$style2.on('focus', 'input',function(e){
			e.stopPropagation();

			var $form = $(this).parent();

			$form.addClass('form-open');
			//ANIMATION VARIABLES
			var $currentId = '#' + $form.attr('id');
			var $currentInput = $($currentId).children('input');
			var $currentPlace = $($currentId).children('span');
			//Check it current element has data attribure
			if($form.data('original-styles') === undefined) {
				//Store data for original styles in object
				//So later you can get it and animate it back.
				$form.data('original-styles', {
					startFontInput: $currentInput.css('font-size'),
					startPadInput: $currentInput.css('padding'),
					startFontPlace: $currentPlace.css('font-size')
				});
			}
			if ( $currentInput.val() === "") {
				$currentInput.animate({
					fontSize: '30px',
					padding: '15px',
					paddingLeft: '5px',
				});
				$currentPlace.animate({
					fontSize: '1.3em'
				});
			};
		}); //end of $style2.click
	}; //end of style 2 scripts
	if ( style === 'three') {
		//style 3
		var $input = $('.sexyform');

		for (var i = 0; i < $input.length; i++) {
			var placeText = $($input[i]).data('placeholder');
			var placeInject = $('<span>').addClass('placeholder3').text(placeText);
			var inputInject = $('<input>').attr("type","text").addClass('input3');
			$($input[i]).append(inputInject, placeInject);

		};
		//INITIAL HTML MARKUP INJECT


		$input.addClass('style3');
		var $style3 = $('.style3');
		$style3.data('style', 3);
		var $place3 = $('.placeholder3');

		//ANIMATIONS

		$style3.on('focus', 'input', function(e){
			e.stopPropagation();
			$(this).parent().addClass('form-open');
			//ANIMATION VARIABLES
			var $currentId = '#' + $(this).parent().attr('id');
			var $currentInput = $($currentId).children('input');
			var $currentPlace = $($currentId).children('span');
			if($(this).parent().data('original-styles') === undefined) {
				//Store data for original styles in object
				//So later you can get it and animate it back.
				$(this).parent().data('original-styles', {
					startPosInput: $currentInput.css('left'),
					startWidth: $currentPlace.css('width'),
					startPosPlace: $currentPlace.css('left')
				});
			}

			if ( $currentInput.val() === "") {
				$currentInput.animate({
					left: '0',
				})
				$currentPlace.animate({
					width: '30%',
					left: '70%',
				})
			};
		});
	}
	//Check on click of the document 
	$('.sexyform').on('blur', 'input' ,function() {
		console.log("Blurred!!");
		//Grab elements with the calss of .form-open
		var $forms = $('.form-open');
		//If we have some
		if($('.form-open').length > 0) {
			//Loop through them with each
			$forms.each(function(index, element) {
				//Each returns the index of the element and the element itself
				//Check if elements input is blank
				if(!$(element).find('input').val()) {
					console.log("Close it!");
					//If so remove class so we stop looking at it
					$(element).removeClass('form-open');
					//Pass element to closeBox function
					closeBox($(element));
				}
			});
		} 
	});

	function closeBox(element) {
		console.log("Closing", element);
		//Get the element that needs to be closed
		var $el = $(element);
		//Grab the data we set on it
		var originalData = $el.data('original-styles');
		console.log(originalData);
		var style = $el.data('style');
		//Reset the input
		if ( style === 1 ) {
			$el.find('span').animate({
				top: originalData.startPos,
			});
			$el.animate({
				padding: originalData.startPad,
			})

		};
		if ( style === 2 ) {
			$el.find('input').animate({
				fontSize: originalData.startFontInput,
				padding: originalData.startPadInput
			});
			//Reset the span
			$el.find('span').animate({
				fontSize: originalData.startFontPlace
			});
		};
		if (style === 3) {
			$el.find('input').animate({
				left: originalData.startPosInput
			})
			$el.find('span').animate({
				width: originalData.startWidth,
				left: originalData.startPosPlace,
			})
		};
	}
};
	