(function($, window, document) {

  'use strict';

  var jq = $.noConflict();

  var products = jq('#product-slider').owlCarousel({
    items : 1,
    nav : true,
    navText : ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    autoHeight : true
  });

  var productItems = products.find('.owl-item');

  var thumbs = $('#products-thumbs').owlCarousel({
    slideBy : 1,
    items : productItems.length,
    nav : true
  });


  products.on('changed.owl.carousel', function (evt) {

    var items = thumbs.find('.owl-item');
    var actives = thumbs.find('.owl-item.active');

    if (evt.item.index > items.index(actives[actives.length - 1])) {
      thumbs.trigger('next.owl.carousel');
    } else if (evt.item.index < items.index(actives[0])) {
      thumbs.trigger('prev.owl.carousel');
    }


    thumbs.find('.owl-item').removeClass('item-active');
    thumbs.find('.owl-item').eq(evt.item.index).addClass('item-active');
  });


  thumbs.find('.owl-item').on('click', function (evt) {
    var index = thumbs.find('.owl-item').index(this);

    products.trigger('to.owl.carousel', [index]);
  });

})(jQuery || window.jQuery, window, document);
