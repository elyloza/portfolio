$.get("./nav-footer/navigation.html", function (data) {
	$("#navigation-placeholder").replaceWith(data);
});

$.get("./nav-footer/footer.html", function (data) {
	$("#footer-placeholder").replaceWith(data);
});

function onChange() {
	const password = document.querySelector('input[name=password]');
	const confirm = document.querySelector('input[name=confirm_password]');
	if (confirm.value === password.value) {
		confirm.setCustomValidity('');
	} else {
		confirm.setCustomValidity('The passwords you entered do not match. Please try again.');
	}
}