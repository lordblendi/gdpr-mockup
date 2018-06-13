const slideDuration = 400;

// slide down animation for jquery object $(...), possible to add callback too
function slideDown(item, callback) {
  $.Velocity.animate(item, 'slideDown', {
    duration: slideDuration
  }).then(callback);
}

// slide <up></up> animation for jquery object $(...), possible to add callback too
function slideUp(item, callback) {
  $.Velocity.animate(item, 'slideUp', {
    duration: slideDuration
  }).then(callback);
}
