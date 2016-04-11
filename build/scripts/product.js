(function($, window, document) {

  'use strict';

  var jq = $.noConflict();

  var products = jq('#product-slider').owlCarousel({
    items : 1,
    nav : false,
    autoHeight : true,
    smartSpeed : 750
   });

  var productItems = products.find('.owl-item');

  var thumbs = $('#products-thumbs').owlCarousel({
    slideBy : 1,
    items : productItems.length,
    nav : true
  });

  var productsNav = $('#product-nav');
  var prev = productsNav.find('.ia-Product__nav__prev');
  var next = productsNav.find('.ia-Product__nav__next');
  var count = productsNav.find('.ia-Product__nav__count');
  var total = productsNav.find('.ia-Product__nav__total');

  next.on('click', function () {
    products.trigger('next.owl.carousel');
    $('body').animate({scrollTop:0}, '500');
  });

  prev.on('click', function () {
    products.trigger('prev.owl.carousel');
    $('body').animate({scrollTop:0}, '500');
  });


  products.on('changed.owl.carousel', function (evt) {

    // contador
    count.text(evt.item.index + 1);
    total.text(productItems.length);

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
