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

  var thumbs = $('#products-thumbs');
  var thumbsItems = thumbs.find('.ia-Thumbs__item');

  thumbsItems.each(function (index, value) {
    $(value).css({
      'width' : (100 / thumbsItems.length) + '%'
    });
  })

  var productsNav = $('#product-nav');
  var prev = productsNav.find('.ia-Product__nav__prev');
  var next = productsNav.find('.ia-Product__nav__next');
  var count = productsNav.find('.ia-Product__nav__count');
  var total = productsNav.find('.ia-Product__nav__total');

  next.on('click', function (evt) {
    evt.preventDefault();
    products.trigger('next.owl.carousel');
    $('html, body').animate({scrollTop:0}, '500');
  });

  prev.on('click', function (evt) {
    evt.preventDefault();
    products.trigger('prev.owl.carousel');
    $('html, body').animate({scrollTop:0}, '500');
  });


  products.on('changed.owl.carousel', function (evt) {

    // contador
    count.text(evt.item.index + 1);
    total.text(productItems.length);

    thumbs.find('.ia-Thumbs__item').removeClass('active');
    thumbs.find('.ia-Thumbs__item').eq(evt.item.index).addClass('active');

    // disable controls
    if (evt.item.index === productItems.length - 1) {
      next.addClass('js-disabled');
    } else {
      next.removeClass('js-disabled');
    }

    if (evt.item.index === 0) {
      prev.addClass('js-disabled');
    } else {
      prev.removeClass('js-disabled');
    }

  });


  thumbs.find('.ia-Thumbs__item').on('click', function (evt) {
    var index = thumbs.find('.ia-Thumbs__item').index(this);

    products.trigger('to.owl.carousel', [index]);
  });

  thumbs.find('.ia-Thumbs__trigger').on('click', function (evt) {
    evt.preventDefault();
    thumbs.toggleClass('js-thumbs-active');
  });

})(jQuery || window.jQuery, window, document);
