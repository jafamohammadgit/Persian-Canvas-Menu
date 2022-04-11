$(document).ready(function () {
  $(".nav-toggle").click(function () {
    $(".sidebar").toggleClass("active-nav");
    $(".page-content").toggleClass("");
    $("#overlay").toggleClass("overlay-active");
  });
  $("#overlay").click(function () {
    $(".sidebar").removeClass("active-nav");
    $(".page-content").removeClass("");
    $("#overlay").removeClass("overlay-active");
  });
  $(".toggle-nav").click(function () {
    $(this).toggleClass("ul-active");
  });
});
