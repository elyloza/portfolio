function handleFirstTab(e) {
	if (e.keyCode === 9) {
		document.body.classList.add('user-is-tabbing');

		window.removeEventListener('keydown', handleFirstTab);
		window.addEventListener('mousedown', handleMouseDownOnce);
	}
}

function handleMouseDownOnce() {
	document.body.classList.remove('user-is-tabbing');

	window.removeEventListener('mousedown', handleMouseDownOnce);
	window.addEventListener('keydown', handleFirstTab);
}

window.addEventListener('keydown', handleFirstTab);

function onChange() {
	const password = document.querySelector('input[name=password]');
	const confirm = document.querySelector('input[name=confirm_password]');
	if (confirm.value === password.value) {
		confirm.setCustomValidity('');
	} else {
		confirm.setCustomValidity('The passwords you entered do not match. Please try again.');
	}
}