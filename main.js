$(function() {
	var $input = $('.input');
	var selected = $('option:selected').val();
	$input.sexyForm(selected);
	$('select').on('change', function(){
		var style = $('option:selected').val();
		$('.formContainer').children().remove();
		var newInput = $('<span>').addClass('input').attr({
			'data-placeholder': "First Name",
			id: '1'
		});
		var newInput2 = $('<span>').addClass('input').attr({
			'data-placeholder': "Last Name",
			id: '2'
		});
		$('.formContainer').append(newInput, newInput2);
		$input.sexyForm(style);
	});
});