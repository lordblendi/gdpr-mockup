---
---

$('.JS_dataTypeSelector').on('click', function() {
  $('body').addClass('selector-data-types--visible');

  const currentChosenText = $(this).find('.JS_text').html();
  const possibleDataTypes = $('#multiSelector-data-types .JS_text');
  const selectedHTML=`{% include javascript/item-selected.html %}`;

  // add tick to the selected item
  $.each(possibleDataTypes, function(index, item){
    if($(item).html() === currentChosenText) {
      $(item).closest('.JS_filterableCell').append(selectedHTML);
      return false;
    }
  });
});

function closeDataTypeSelectorUntouched() {
  $('body').removeClass('selector-data-types--visible');
  $('.multiSelector--visible').removeClass('multiSelector--visible');
}
