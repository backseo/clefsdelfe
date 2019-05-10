
  $(window).scroll(function() {
    console.log('tata');
    if ($(document).scrollTop() > 90) {
      $('.navbar-clefdelf').addClass('shrink');
      $('.navbar-clefdelf-brand img').css("height", 60);
    }
    else {
      $('.navbar-clefdelf').removeClass('shrink');
      $('.navbar-clefdelf-brand img').css("height", 100);
    }
  });

