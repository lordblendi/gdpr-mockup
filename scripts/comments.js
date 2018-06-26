function setupCommentToggle() {
  // resizeTextarea('.JS_autosize');

  $('.JS_comments-toggle').on('click', function() {
    const toggle = $(this);
    const details = toggle.closest('.JS_item-details');
    $(details).toggleClass('panel-comments--visible');

    if ($(details).hasClass('panel-comments--visible')) {
      readCommentsFunctionality();
      // resizeTextarea('.JS_autosize');

      setTimeout(function() {
        $('.panel-comments').css('display', 'block');
      }, 300);
    }

    // always redraw charts to make sure it has the good width
    // also making sure that the transition has already finished
    setTimeout(function() {
      drawChart();
    }, 100);
  });
}


function readCommentsFunctionality() {
  $('.JS_read').on('click', function() {
    $(this).addClass('is-read');
  });
}

// function resizeTextarea(selector) {
//   // setting initial height
//   setTimeout(function() {
//     $(selector).css('height', 'auto');
//     $(selector).height($(selector)[0].scrollHeight);
//   }, 100);
//
//   $(selector).off('keyup').on('keyup', function() {
//     $(this).css('height', 'auto');
//     $(this).height(this.scrollHeight);
//   });
// }
