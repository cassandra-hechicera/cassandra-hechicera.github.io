function emailIsValid(email) {
	if (email) {
		var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		return re.test(email);
	} else {
		return false;
	}
}

function performContact() {
	toastr.clear();

	toastr.options.newestOnTop = false;

	var formValid = true;

	var name = $("#name").val();

	if (typeof name === "undefined" || name == null || name == "") {
		toastr.warning("Indica tu nombre");
		formValid = false;
	}

	var email = $("#email").val();

	if (typeof email === "undefined" || email == null || email == "") {
		toastr.warning("Indica tu email");
		formValid = false;
	} else {
		if (!emailIsValid(email)) {
			toastr.warning("Indica correctamente tu email");
			formValid = false;
		}
	}

	var message = $("#message").val();

	if (typeof message === "undefined" || message == null || message == "") {
		toastr.warning("Indica tu mensaje");
		formValid = false;
	}
	
	if (formValid) {
		$("#contact-form").submit();
	}
}
