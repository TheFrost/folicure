(function($, window, document) {

  'use strict';

  var jq = $.noConflict();

  // Home init animation
  var homeEntry = (function () {
    var bricks = jq('.ia-Brick');

    setTimeout(function () {
      bricks.each(function (index, el) {
        jq(el).delay(index*100).animate({opacity:1});
      });
    }, 1000);

  })();

  // Init Main Menu
  Menu.init('#header-action', '#main-menu', 'body');


  // Experts Widget Init
  Experts.init('#experts');


  // Search Widget init
  Search.init('#search');


  // Product init
  var carousel = jq('#product-slider');

  if (carousel.length) {
    var nav = jq('#product-nav'),
        thumbs = jq('#products-thumbs');

    Product.init(carousel, nav, thumbs);
  }


  // Diagnostic init
  var diagnosticBody = jq('#diagnostic-body');

  if (diagnosticBody.length) {
    var diagnosticHeader = jq('#diagnostic-header');

    Diagnostic.init(diagnosticHeader, diagnosticBody);
  }

})(jQuery || window.jQuery, window, document);
