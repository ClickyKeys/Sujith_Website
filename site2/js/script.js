$(document).ready(function () {
  $("ul.navbar-nav > li > a").click(
    function (e) {
      $("ul.navbar-nav > li").removeClass(
        "active");
      $("ul.navbar-nav > li > a").css(
        "color", "");

      $(this).addClass("active");
      $(this).css("color", "red");
  });
});