/*========== INIT WOW ANIMATION CSS ON SCROLL TRIGGER ==========*/

new WOW().init();

/*========== TOGGLE MASTHEAD VISIBILITY FOR MOBILE NAVIGATION ==========*/

$(document).ready(function () { //when document loads completely.
  $(".navbar-toggler").on("click", function (event) {
    var _opened = $(".navbar-collapse").hasClass("show"); // check if navbar is opened or closed
    if (_opened !== true) { // if navbar is going to be opened, hide masthead
      $("#masthead").addClass("hidden");
    }
  });
  $(".navbar .navbar-collapse").on("transitionend", function(event) {
    var _collapsed = $(".navbar-toggler").hasClass("collapsed"); // check if navbar is opened or closed
    if (_collapsed === true) { // show masthead if mobile nav is collapsed
      $("#masthead").removeClass("hidden");
    }
  });
  $(window).on("resize", function (event) {
    var _collapsed = $(".navbar-toggler").hasClass("collapsed"); // check if navbar is opened or closed
    if (_collapsed !== true) { // show masthead if mobile nav is collapsed
      $(".navbar-toggler").click();
    }
  });
});

/*========== TOGGLE MASTHEAD VISIBILITY FOR MOBILE NAVIGATION ==========*/

$(document).ready(function () { //when document loads completely.
  var _treshold = 130;
  var _scrolltop = $(window).scrollTop();
  if (_scrolltop > _treshold) { // check scrollposition on page load
    $("#masthead").addClass("fixed");
    $(".navbar").addClass("shadowed");
  }
  $(window).scroll(function() { // check scrollposition on scrolling
    var _scrolltop = $(window).scrollTop();
    if (_scrolltop > _treshold) {
      $("#masthead").addClass("fixed");
      $(".navbar").addClass("shadowed");
    } else {
      $("#masthead").removeClass("fixed");
      $(".navbar").removeClass("shadowed");
    }
  });
});
