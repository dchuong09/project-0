
$(document).ready(function() {
  $(document).on('keydown', function(e) {
    if (e.keyCode === 39) { 
      $('#bee1').animate({left: '+=50px'});
    } else if (e.keyCode === 90) {
      $('#bee2').animate({left: '+=50px'})
    }
  });
});