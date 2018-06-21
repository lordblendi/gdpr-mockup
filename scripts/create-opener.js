---
---

// open item creator
$('.JS_create-button').on('click', function() {

  slideDown($('.JS_item-create'), function(){
      // add necessary classes
      $('body').addClass('item-create--visible');
      $('main, .c-tool-bar, .kpi-bar, .header-bar').addClass('blurred');
      openOverlay();
  });
});

// close item creator
function closeCreateItem() {
  $('.blurred, .not-blurred').removeClass('blurred not-blurred');
  slideUp($('.JS_item-create'), function() {
    $('body').removeClass('item-create--visible');
  });
}
