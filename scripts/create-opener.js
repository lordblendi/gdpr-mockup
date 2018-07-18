---
---

// open item creator
$('.JS_create-button').on('click', function() {

  slideDown($('.JS_item-create'), function(){
      // add necessary classes
      $('body').addClass('item-create--visible');
      openOverlay(false, false, false);
  });
});

// close item creator
function closeCreateItem() {
  slideUp($('.JS_item-create'), function() {
    $('body').removeClass('item-create--visible');
  });
}
