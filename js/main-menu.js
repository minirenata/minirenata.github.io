var link = document.querySelector(".navigation-link");
var href = link.querySelector("[href]");

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	setTimeout(function() {
		location.href = href;
	}, 200);
});

