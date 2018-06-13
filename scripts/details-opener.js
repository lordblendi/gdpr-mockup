---
---

$('.JS_c-item').on('click', function() {
  handleCardOnclick(this);
});

function handleCardOnclick(card) {
  const width = $(card).outerWidth(true);
  const windowWidth = $(window).width();
  const itemsInRow = Math.round(windowWidth / width);

  const cardList = $('.JS_c-list');

  const cItems = $(cardList).children('.JS_c-item');
  const positionIncItems = jQuery.inArray(card, cItems);
  const diff = positionIncItems % itemsInRow;

  const detailsPlaceDiff = itemsInRow - diff;
  let detailsPlace = positionIncItems + detailsPlaceDiff;
  if (detailsPlace >= cItems.length) {
    detailsPlace = cItems.length - 1;
  }
  // making sure the index is good 
  detailsPlace--;

  const dataIndex = $(card).attr('data-index');
  const dataJson = {{ site.data.cards | jsonify}};
  const data = dataJson['data'][dataIndex];

  let detailsHTML = `{% include components/c-item-details.html %}`;

  $(cItems[detailsPlace]).after(detailsHTML);
}
