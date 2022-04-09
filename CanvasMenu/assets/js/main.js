$(document).ready(function () {
  $("#bar").click(function () {
    $(".menu").toggleClass("active-canvas");
    $(".main").toggleClass("main-active");
    $(".canvas-menu").toggleClass("active-menu");
  });
});
