var keepItemsSquared = (function keepItemsSquaredFunction() {
  $('.c-item').each(function() {

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
