if ($("#header-wrapper").length !== 0) {
  $("#header-wrapper").load("../components/inner-header.html");
  }
  $("#footer-wrapper").load("../components/inner-footer.html");

  $(document).scroll(function () {
    var $nav = $("#vidzy-navbar");
    $nav.toggleClass('stciky', $(this).scrollTop() > $nav.height());
  });