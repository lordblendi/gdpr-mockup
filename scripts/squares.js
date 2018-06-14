// functinality to keep the items squared
// if the width is changing, the height should change too
var keepItemsSquared = (function keepItemsSquaredFunction() {
  $('.card').each(function() {
    if ( $(window).width() >= 768 ) {
      $(this).css({
        'height': $(this).width() + 'px'
      });
    }
  });
  return keepItemsSquaredFunction;
}());

$(window).on('resize', function() {
  keepItemsSquared();
});
