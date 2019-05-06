$(document).ready(function() {

  $("#welcome").hover(
    function(){ $(".banner-content h2").addClass('reveal') },
    function(){ $(".banner-content h2").removeClass('reveal') }
  )

});
