$.get("./nav-footer/navigation.html", function (data) {
	$("#navigation-placeholder").replaceWith(data);
	$(document).find('.nav-links > a').each(function (key, menu) {
		$(menu).click(function (e) {
			e.preventDefault();
			const url = menu.href.split('#');
			document.getElementById(url[1]).scrollIntoView();
			$('.nav-icon').trigger('click');
		});
	});
});

$.get("./nav-footer/footer.html", function (data) {
	$("#footer-placeholder").replaceWith(data);
});

$(window).on('load scroll', function () {
	if ($(window).scrollTop() >= $('#content').offset().top - 80) {
		$("#navigation").removeClass("nav-light");
		$("#navigation").css({ "position": "fixed" });
	} else {
		$("#navigation").addClass("nav-light");
		$("#navigation").css({ "position": "absolute" });
	}
});