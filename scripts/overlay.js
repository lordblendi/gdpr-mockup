// onclick action on overlay to close item detail
$('.toolbox-overlay').on('click', function() {
  closeOverlay();
  closeOverlayExtraActions();
});

// do extra actions related to closing overlay
function closeOverlayExtraActions() {
  if ($('body').hasClass('selector-data-types--visible')) {
    closeDataTypeSelectorUntouched();
  } else if ($('body').hasClass('selector-filter--visible')) {
    closeFilterSelectorUntouched();
  } else if ($('body').hasClass('item-details--visible')) {
    removeItemDetails();
  } else if ($('body').hasClass('item-create--visible')) {
    closeCreateItem();
  }
}
