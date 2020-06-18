let popupBtn = document.querySelector(".slider-for__button-two"),
  popupCloseBtn = document.querySelector(".modal__close"),
  popupModal = document.querySelector(".modal"),
  userName = popupModal.querySelector("[name=user-name]"),
  userPhone = popupModal.querySelector("[name=user-phone]"),
  popupWriteForm = popupModal.querySelector("form"),
  popupWriteError = document.querySelector(".modal__error-message"),
  popupFogTwo = document.querySelector(".fog-two"),
  popupSucces = document.querySelector(".modal-succes"),
  succesCloseBtn = document.querySelector(".modal-succes__close"),
  succesBtn = document.querySelector(".modal-succes__button");

popupBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupModal.classList.add("modal--active");
  popupFogTwo.classList.add("fog-two--active");
  userName.focus();
});

popupWriteForm.addEventListener("submit", function (evt) {
  if (!userName.value || !userPhone.value) {
    evt.preventDefault();
    popupWriteError.classList.add("modal__error-message--active");
  } else {
    evt.preventDefault();
    popupModal.classList.remove("modal--active");
    popupSucces.classList.add("modal-succes--active");
  }
});

popupCloseBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupModal.classList.remove("modal--active");
  if (popupWriteError.classList.contains("modal__error-message--active")) {
    popupWriteError.classList.remove("modal__error-message--active");
  }
  popupFogTwo.classList.remove("fog-two--active");
});

succesCloseBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupSucces.classList.remove("modal-succes--active");
  popupFogTwo.classList.remove("fog-two--active");
});

succesBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupSucces.classList.remove("modal-succes--active");
  popupFogTwo.classList.remove("fog-two--active");
});

popupFogTwo.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (popupModal.classList.contains("modal--active")) {
    popupModal.classList.remove("modal--active");
    popupFogTwo.classList.remove("fog-two--active");
  } else if (popupSucces.classList.contains("modal-succes--active")) {
    popupSucces.classList.remove("modal-succes--active");
    popupFogTwo.classList.remove("fog-two--active");
  }
});
