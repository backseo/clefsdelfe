
  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('.navbar-clefdelf').css("height", 50);
      $('.navbar-clefdelf-brand img').css("height", 48);
      $('.dropdown-toggle').css("font-size", 20);
    }
    else {
      $('.navbar-clefdelf').css("height", 130);
      $('.navbar-clefdelf-brand img').css("height", 100);
      $('.dropdown-toggle').css("font-size", 30);
    }
  });


