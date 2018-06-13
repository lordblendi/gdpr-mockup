// onclick action on overlay to close popups
$('.overlay-body').on('click', function() {
  if ($(this).closest('.item-details--visible').length > 0) {
    closeOverlayAndDetails();
  }
});

// close overlay and popups
function closeOverlayAndDetails() {
  $(".overlay-body").removeClass('opacity-100 pointer-events-auto');

  removeItemDetails();
}

function openOverlay(withOpacity) {
  $(".overlay-body").addClass('pointer-events-auto');
  if (withOpacity) {
    $(".overlay-body").addClass('opacity-100');
  }
}
