---
---

/*
  making sure to add a tick to the selected item
*/
$('.JS_filterSelector').on('click', function() {
  $('body').addClass('selector-filter--visible');

  // remove old selected tick
  $('.JS_showSelected').remove();

  const currentChosenText = $(this).find('.JS_text').html();
  const possibleDataTypes = $('#toolbox-modal-filter .JS_text');
  const selectedHTML=`{% include javascript/item-selected.html %}`;

  // add tick to the selected item
  $.each(possibleDataTypes, function(index, item){
    if($(item).html() === currentChosenText) {
      $(item).closest('.JS_filterableCell').append(selectedHTML);
      return false;
    }
  });
});

$('#toolbox-modal-filter .JS_filterableCell').on('click', function(){
  closeOverlay();
  closeFilterSelectorUntouched();
  const newText = $(this).find('.JS_text').html();
  $('.JS_filterSelector .JS_text').html(newText);
});

/*
  close the popup and make sure the overlay is still there just without the darkness
*/
function closeFilterSelectorUntouched() {
  $('body').removeClass('selector-filter--visible');
  $('.toolbox-modal--visible').removeClass('toolbox-modal--visible animate-popup animate-fadein');
}
