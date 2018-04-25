// The js required for the validation of contact form would go here
window.onload = init;

function init(){
	$('submit').on('click', function(event){
		event.preventDefault();

		required_check();
	});
}

function required_check(){
	var required_inputs = $('.required input, .required textarea');
}

var required_checkbox_containers = $('.required-checkbox');



function validate_input() {
	
}