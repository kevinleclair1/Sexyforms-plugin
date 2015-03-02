$(function() {
	var $input = $('.sexyform');
	var selected = $('option:selected').val();
	$input.sexyForm(selected);
	$('select').on('change', function(){
		var style = $('option:selected').val();
		$('.formContainer').children().remove();
		var newInput = $('<span>').addClass('sexyform').attr({
			'data-placeholder': "First Name",
			id: '1'
		});
		var newInput2 = $('<span>').addClass('sexyform').attr({
			'data-placeholder': "Last Name",
			id: '2'
		});
		$('.formContainer').append(newInput, newInput2);
		$input.sexyForm(style);
	});
	$('.howToShow').on('click', function (){
		$('.howTo').fadeToggle();
	});
	$('.exit').on('click', function (){
		$('.howTo').fadeToggle();
	});
});