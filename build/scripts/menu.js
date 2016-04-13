(function($, window, document) {

  'use strict';

  var jq = $.noConflict();

  var Menu = (function () {

    /* Private vars */
    var _body,
        _trigger,
        _menu,
        _list,
        _head,
        _footer;

    /*Private Methods*/
    var _cache = function (trigger, el, container) {
      _body = jq(container);
      _trigger = jq(trigger);
      _menu = jq(el);
      _list = _menu.find('#menu-list');
      _head = _menu.find('#menu-head');
      _footer = _menu.find('#menu-footer');
    }

    var _bindEvents = function () {
      _trigger.on('click', function (evt) {
        _toggleAction(evt);

        Search.validateActive();
        Experts.validateActive();
        Product.validateActive();
      });

      jq(window).resize(_calcHeight);
    }

    var _toggleAction = function (evt) {
      if (evt != undefined) {
        evt.preventDefault();
      }

      _trigger.toggleClass('js-closeAction');
      _menu.toggleClass('js-activeMenu');
      _body.toggleClass('js-noscroll');
      _calcHeight();
    }

    var _calcHeight = function () {
      var listHeight = _list.height(),
          safeHeight = jq(window).height() - (_head.outerHeight() + _footer.outerHeight());

      if (listHeight > safeHeight) {
        _list.css({
          'height' : safeHeight
        });
      } else {
        _list.removeAttr('style');
      }
    }

    /*Public Methods*/
    var init = function (trigger, el, container) {
      _cache(trigger, el, container);
      _bindEvents();
    }

    var validateActive = function () {
      if (_menu.hasClass('js-activeMenu')) {
        _toggleAction();
      }
    }

    /*Return*/
    return {
      init : init,
      validateActive : validateActive
    }

  })();

  window.Menu = Menu;

})(jQuery || window.jQuery, window, document);
