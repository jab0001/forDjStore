$(document).ready(function() {
  $(".slider-for").slick({
    slidesToShow: 1,
    dots: false,
    centerMode: false,
    variableWidth: false,
    arrows: false,
    asNavFor: '.slider-nav',
    focusOnSelect: false,
    swipe: false
  });

  $(".slider-nav").slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    dots: false,
    centerMode: false,
    variableWidth: true,
    focusOnSelect: false,
    asNavFor: '.slider-for',
    swipe: false,
    nextArrow: $(".my-arrow-next"),
    prevArrow: $(".my-arrow-prev")
  });
});
