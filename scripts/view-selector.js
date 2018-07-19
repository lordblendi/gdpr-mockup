$('.JS_viewSelector').on('click', function() {
  const viewSelector = $(this);
  const dataType = $(viewSelector).attr('data-view');
  if (viewSelector.hasClass('JS_toolbox-selectorItem--active')) {
    if (dataType === "overview") {
      $('.JS_c-list').addClass('view--overview')
      $('.JS_c-list').removeClass('view--risk')
    } else if (dataType === "risk") {
      $('.JS_c-list').addClass('view--risk')
      $('.JS_c-list').removeClass('view--overview')
    }
  }
});
