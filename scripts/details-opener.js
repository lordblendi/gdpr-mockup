---
---

// onclick handlre for card item
$('.JS_c-item').on('click', function() {
  handleCardOnclick(this);
});

function handleCardOnclick(card) {
  // calculate how many items fit in a row
  const width = $(card).outerWidth(true);
  const windowWidth = $(window).width();
  const itemsInRow = Math.round(windowWidth / width);

  // calculate the position of the current item in the item list
  const cardList = $('.JS_c-list');
  const cItems = $(cardList).children('.JS_c-item');
  const positionIncItems = jQuery.inArray(card, cItems);

  // calculate where to put details
  // good position is after the end of the current row
  const diff = positionIncItems % itemsInRow;
  const detailsPlaceDiff = itemsInRow - diff;
  let detailsPlace = positionIncItems + detailsPlaceDiff;
  if (detailsPlace > cItems.length) {
    detailsPlace = cItems.length;
  }
  // making sure the index is good
  detailsPlace--;

  // get the data we need and put it into the html file
  // using `${attributeName}`
  const dataIndex = $(card).attr('data-index');
  const dataJson = {{ site.data.cards | jsonify}};
  const data = dataJson['data'][dataIndex];
  const detailsHTML = `{% include components/c-item-details.html %}`;

  // insert the item details, display none
  $(cItems[detailsPlace]).after(detailsHTML);
  // add tab functionality
  setupTabs(".tabs-nav");

  // add tags
  jQuery.each(data['tags'], function(index, tag){
    $('.JS_detailsTags').append(`{% include javascript/c-item-details-tag.html %}`);
  });

  // add necessary classes
  $('body').addClass('item-details--visible');
  $(card).addClass('not-blurred');
  $(cardList).addClass('blurred');
  openOverlay();
  // slide down item details display none -> display block
  slideDown($('.JS_item-details'));
}

// remove item details and the blurriness
function removeItemDetails() {
  slideUp($('.JS_item-details'), function() {
    $('body').removeClass('item-details--visible');
    $('.JS_item-details').remove();
    $('.blurred, .not-blurred').removeClass('blurred not-blurred');
  });
}

// close details on resize
$(window).on('resize', function() {
  if ($('body').hasClass('item-details--visible')) {
    $('.overlay-body').click();
  }
});
