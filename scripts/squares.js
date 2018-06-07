var keepItemsSquared = (function keepItemsSquaredFunction() {
  $('.c-item').each(function() {
    $(this).css({
      'height': $(this).width() + 'px'
    });
  });

  return keepItemsSquaredFunction;
}()); //auto-run

$(window).on('resize', function() {
  keepItemsSquared();
});
