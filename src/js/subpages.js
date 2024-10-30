$.get("../nav-footer/navigation.html", function (data) {
	$("#navigation-placeholder").replaceWith(data);
});

$.get("../nav-footer/footer.html", function (data) {
	$("#footer-placeholder").replaceWith(data);
});