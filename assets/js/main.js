$(document).ready(function () {
  $("#bar").click(function () {
    $(".menu").toggleClass("active-canvas");
    $(".main .main-overlay").toggleClass("main-overlay-active");
    $(".main").toggleClass("main-active");
    $(".canvas-menu").toggleClass("active-menu");
  });
  $(".main").click(function () {
    $(".menu").removeClass("active-canvas");
    $(".main .main-overlay").removeClass("main-overlay-active");
    $(".main").removeClass("main-active");
    $(".canvas-menu").removeClass("active-menu");
  });
});
