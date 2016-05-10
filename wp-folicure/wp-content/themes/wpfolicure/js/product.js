(function($, window, document) {

  'use strict';

  var jq = $.noConflict();

  var Product = (function () {

    /*Private vars*/
    var _base,
        _window,
        _products,
        _productNav,
        _productNext,
        _productPrev,
        _currentSlide,
        _totalSlides,
        _thumbs,
        _thumbsItems,
        _thumbsTriger;


    /*Private Methods*/
    var _cache = function (carousel, nav, thumbs) {
      _base = jq('html, body');
      _window = jq(window);
      _products = carousel;
      _productNav = nav;
      _productNext = _productNav.find('.ia-Product__nav__next');
      _productPrev = _productNav.find('.ia-Product__nav__prev');
      _currentSlide = _productNav.find('.ia-Product__nav__count');
      _totalSlides = _productNav.find('.ia-Product__nav__total');
      _thumbs = thumbs;
      _thumbsItems = _thumbs.find('.ia-Thumbs__item');
      _thumbsTriger = _thumbs.find('.ia-Thumbs__trigger');
    }

    var _bindEvents = function () {
      _products.on('change.owl.carousel', function () {
        if (Utils.isMobile()) {
          _animationBase();
        }
      });

      _products.on('changed.owl.carousel', function (evt) {
        var currentIndex = evt.item.index;

        _meterAction(currentIndex);
        _currentThumb(currentIndex);
        _limitNav(currentIndex);
      });

      _window.on('resize', function () {
        _products.trigger('refresh.owl.carousel');
      });

      _productNext.on('click', function (evt) {
        evt.preventDefault();
        _actionNext();
      });

      _productPrev.on('click', function (evt) {
        evt.preventDefault();
        _actionPrev();
      });

      _thumbsTriger.on('click', function (evt) {
        evt.preventDefault();
        _toggleThumbs();
        Search.validateActive();
      })

      _thumbsItems.on('click', function (evt) {
        evt.preventDefault();
        _goToSlide(this);
      })
    }

    var _initSlider = function () {
      _products.owlCarousel({
        autoHeight : true,
        items : 1,
        nav : false,
        smartSpeed : 750,
        mouseDrag : false,
        lazyLoad : true
      });
    }

    var _initThumbs = function () {
      _thumbsItems.each(function (index, value) {
        jq(value).css({
          'width' : (100 / _thumbsItems.length) + '%'
        });
      });
    }

    var _animationBase = function () {
      _base.animate({scrollTop:0}, '500');
    }

    var _actionNext = function () {
      _products.trigger('next.owl.carousel');
    }

    var _actionPrev = function () {
      _products.trigger('prev.owl.carousel');
    }

    var _toggleThumbs = function () {
      _thumbs.toggleClass('js-thumbs-active');

      var _triggerTxt = _thumbs.hasClass('js-thumbs-active')
        ? 'Ocultar línea'
        : 'Ver toda la línea';

      setTimeout(function () {
        _thumbsTriger.text(_triggerTxt);
      }, 750);
    }

    var _goToSlide = function (el) {
      var index = _thumbsItems.index(el);
      _products.trigger('to.owl.carousel', [index]);
    }

    var _meterAction = function (currentIndex) {
      _currentSlide.text(currentIndex + 1);
      _totalSlides.text(_thumbsItems.length);
    }

    var _currentThumb = function (currentIndex) {
      _thumbsItems.removeClass('js-active-thumb');
      _thumbsItems.eq(currentIndex).addClass('js-active-thumb');
    }

    var _limitNav = function (currentIndex) {
      if (currentIndex === _thumbsItems.length - 1) {
        _productNext.addClass('js-disabled');
      } else {
        _productNext.removeClass('js-disabled');
      }
      if (currentIndex === 0) {
        _productPrev.addClass('js-disabled');
      } else {
        _productPrev.removeClass('js-disabled');
      }
    }


    /*Public Methods*/
    var init = function (carousel, nav, thumbs) {
      _cache(carousel, nav, thumbs);
      _initSlider();
      _initThumbs();
      _meterAction(0);
      _bindEvents();
    }

    var validateActive = function () {
      if (_products != undefined && _thumbs.hasClass('js-thumbs-active')) {
        _toggleThumbs();
      }
    }

    /*Revealing*/
    return {
      init : init,
      validateActive : validateActive
    }

  })();

  window.Product = Product;

})(jQuery || window.jQuery, window, document);
