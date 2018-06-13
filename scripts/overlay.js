// onclick action on overlay to close item detail
$('.overlay-body').on('click', function() {
  if ($(this).closest('.item-details--visible').length > 0) {
    closeOverlayAndDetails();
  }
});

// close overlay and item detail
function closeOverlayAndDetails() {
  $(".overlay-body").removeClass('opacity-100 pointer-events-auto');

  removeItemDetails();
}

// open overlay with or without opacity 100
function openOverlay(withOpacity) {
  $(".overlay-body").addClass('pointer-events-auto');
  if (withOpacity) {
    $(".overlay-body").addClass('opacity-100');
  }
}
