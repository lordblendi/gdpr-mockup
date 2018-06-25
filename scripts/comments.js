function setupCommentToggle() {
  $('.JS_comments-toggle').on('click', function(){
    const toggle = $(this);
    const details = toggle.closest('.JS_item-details');
    $(details).toggleClass('panel-comments--visible');

    if($(details).hasClass('panel-comments--visible')) {
      readCommentsFunctionality();
    }
    // always redraw charts to make sure it has the good width
    // also making sure that the transition has already finished
    setTimeout(function () {
      drawChart();
    }, 100);
  });
}


function readCommentsFunctionality() {
  $('.JS_read').on('click', function() {
    $(this).addClass('is-read');
  });
}
