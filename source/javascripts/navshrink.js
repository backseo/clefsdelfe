
  $(window).scroll(function() {
    console.log('tata');
    if ($(document).scrollTop() > 90) {
      $('.navbar-clefdelf').addClass('shrink');
    }
    else {
      $('.navbar-clefdelf').removeClass('shrink');
    }
  });

