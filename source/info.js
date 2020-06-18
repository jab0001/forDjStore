let infoBtn = document.querySelector('.gallery__button-left'),
    infoClose = document.querySelector('.information__close'),
    infoLayout = document.querySelector('.information'),
    popupFog = document.querySelector('.fog');


infoBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  infoLayout.classList.add("information-open");
  popupFog.classList.add("fog--active");
})

infoClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  infoLayout.classList.remove("information-open");
  popupFog.classList.remove("fog--active");
})

popupFog.addEventListener("click", function (evt) {
  evt.preventDefault();
    if (infoLayout.classList.contains("information-open")) {
      infoLayout.classList.remove("information-open");
      popupFog.classList.remove("fog--active");
  }
});
