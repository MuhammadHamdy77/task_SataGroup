$(document).ready(function () {
  $(".hamburger-menu").click(function () {
    $(".menu-btn").toggleClass("active");
    $(".main-menu").toggleClass("active");
    $("body").toggleClass("menu-open");
    $("html").toggleClass("overflow");
  });
});