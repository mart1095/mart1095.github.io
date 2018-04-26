window.onload = init;

function validation_init(){

	$('#btn-submit').on('click', function(event){
		event.preventDefault();

		var required_error = required_check();
		var validate_error = validate_input();

		if(!required_error && !validate_error) {
			alert('Thank you for submitting a message!');
		} else {
			alert('Please fill in missing sections.');
		}
	});
}

function validate_input() {

	var validate_inputs = $('.validate input');
	var validation_error = false;

	$.each(validate_inputs, function(input_index, validate_input) {

		var validate_container = $(validate_input).closest('.input-container');
		var input_label = $(validate_container).find('.label-text').text();
		var input_val = $(validate_input).val().trim();
		var feedback = $(validate_container).find('.feedback');
		var feedback_text = "";
		var has_error = false;
 
		if(input_val!='') {

			$(feedback).fadeOut(0);

			if(validation_type=='text') {

			if(validation_type=='email') {
				pattern = /(.+)@(.+){2,}\.(.+){2,}/;

				if(!input_val.match(pattern)) {
					feedback_text = 'Must use valid email. "'+input_label+'"';
					has_error = true;

				}
			}

			if(has_error) {
				$(validate_container).removeClass('has-success');
				$(validate_container).addClass('has-error');
				validation_error = true;
			} else {
				$(validate_container).removeClass('has-error');
				$(validate_container).addClass('has-success');
				feedback_text = 'The entered value for "'+input_label+'" is acceptable.';
 			}

			$(feedback).html(feedback_text);
			$(feedback).fadeIn(300);
		}

	};

	return validation_error;

}