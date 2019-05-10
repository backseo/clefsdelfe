
  $(window).scroll(function() {
    console.log('tata');
    if ($(document).scrollTop() > 90) {
      $('.navbar-clefdelf').css("height", 50);
      $('.navbar-clefdelf-brand img').css("height",48);
    }
    else {
      $('.navbar-clefdelf').css("height", 130);
      $('.navbar-clefdelf-brand img').css("height", 100);
    }
  });

