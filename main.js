$(function() {
	var $input = $('.input');
	var selected = $('option:selected').val();
	$input.sexyForm(selected);
	$('select').on('change', function(){
		var style = $('option:selected').val();
		$('.formContainer').children().remove();
		var newInput = $('<span>').addClass('input').attr("data-placeholder", "First Name");
		$('.formContainer').append(newInput);
		$input.sexyForm(style);
	});
});