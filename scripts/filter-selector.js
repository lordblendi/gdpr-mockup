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
  const possibleDataTypes = $('#multiSelector-filter .JS_text');
  const selectedHTML=`{% include javascript/item-selected.html %}`;

  // add tick to the selected item
  $.each(possibleDataTypes, function(index, item){
    if($(item).html() === currentChosenText) {
      $(item).closest('.JS_filterableCell').append(selectedHTML);
      return false;
    }
  });
});

$('#multiSelector-filter .JS_filterableCell').on('click', function(){
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
  $('.multiSelector--visible').removeClass('multiSelector--visible animate-popup animate-fadein');
}
