(function($, window, document) {

  'use strict';

  var jq = $.noConflict();

  var products = jq('#product-slider').owlCarousel({
    items : 1,
    nav : true,
    navText : ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    autoHeight : true,
    smartSpeed : 750
   });

  var productItems = products.find('.owl-item');

  var thumbs = $('#products-thumbs').owlCarousel({
    slideBy : 1,
    items : productItems.length,
    nav : true
  });

  // contador
  var container = $('.ia-Experts__cta');



  products.on('changed.owl.carousel', function (evt) {

    // contador
    var copy = (evt.item.index + 1) +' de ' + productItems.length;
    console.log(copy);

    var items = thumbs.find('.owl-item');
    var actives = thumbs.find('.owl-item.active');

    if (evt.item.index > items.index(actives[actives.length - 1])) {
      thumbs.trigger('next.owl.carousel');
    } else if (evt.item.index < items.index(actives[0])) {
      thumbs.trigger('prev.owl.carousel');
    }

    thumbs.find('.ia-Thumbs__item').removeClass('active');
    thumbs.find('.owl-item').eq(evt.item.index).find('.ia-Thumbs__item').addClass('active');
  });


  thumbs.find('.owl-item').on('click', function (evt) {
    var index = thumbs.find('.owl-item').index(this);

    products.trigger('to.owl.carousel', [index]);
  });

})(jQuery || window.jQuery, window, document);
