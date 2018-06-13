const slideDuration = 400;

function slideDown(item, callback) {
  $.Velocity.animate(item, 'slideDown', {
    duration: slideDuration
  }).then(callback);
}

function slideUp(item, callback) {
  $.Velocity.animate(item, 'slideUp', {
    duration: slideDuration
  }).then(callback);
}
