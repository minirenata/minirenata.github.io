var buttonModal = document.querySelector(".button-modal");
var popup = document.querySelector(".modal-frame");
var close = document.querySelector(".close-button");
var formModal = popup.querySelector("form");
var nameModal = popup.querySelector("[name=callback-name]");
var phoneModal = popup.querySelector("[name=tel]");

buttonModal.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	nameModal.focus();
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});

formModal.addEventListener("submit", function (evt) {
	if (!nameModal.value || !phoneModal.value) {
		evt.preventDefault();
		popup.classList.add("modal-error");
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
		}
	}
});

