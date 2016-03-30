(function ($) {

  'use strict';

  var jq = $.noConflict();


  // Animation header Mobile
  var headerActionFunction = (function () {

    var action = jq('#header-action'),
        menu = jq('#main-menu'),
        list = jq('#menu-list'),
        head = jq('#menu-head'),
        footer = jq('#menu-footer');

    function toogleAction (evt) {

      evt.preventDefault();

      var that = jq(this);



      that.toggleClass('closeAction');

      menu.toggleClass('activeMenu');

      calcHeight();


    }

    function calcHeight() {

      var listHeight = list.height(),
          compareHeight = jq(window).height() - (head.outerHeight() + footer.outerHeight()),
          newHeight;

      if (listHeight > compareHeight) {

        newHeight = compareHeight;

        list.css({
          'height': newHeight
        });

      } else {
        list.removeAttr('style');
      }

    }

    action.on('click', toogleAction);

    jq(window).resize(calcHeight);

  })();


  // Calculate icon Box's position
  var iconPosition = (function () {

    var boxLinks = jq('.ia-BrickLink');

    var calcPosition = function () {

      var that = jq(this),
          icon = jq(that.find('.ia-BrickIcon')),
          brickH = that.outerHeight(),
          iconH = icon.outerHeight(),
          captionH = jq(that.find('.ia-BrickCaption')).outerHeight(),
          position = ((brickH - captionH)/2)+(iconH/2);

      icon.css('top', position);


    }

    boxLinks.on('mouseover', calcPosition);

  })();





})(jQuery || window.jQuery);
