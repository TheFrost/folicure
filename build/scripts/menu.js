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
    function _cache(trigger, el, container) {
      _body = jq(container);
      _trigger = jq(trigger);
      _menu = jq(el);
      _list = _menu.find('#menu-list');
      _head = _menu.find('#menu-head');
      _footer = _menu.find('#menu-footer');
    }

    function _bindEvents() {
      _trigger.on('click', function (evt) {
        _toggleAction(evt);

        Search.validateActive();
        Experts.validateActive();
      });

      jq(window).resize(_calcHeight);
    }

    function _toggleAction(evt) {
      evt.preventDefault();

      _trigger.toggleClass('js-closeAction');
      _menu.toggleClass('js-activeMenu');
      _body.toggleClass('js-noscroll');
      _calcHeight();
    }

    function _calcHeight() {
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
    function init(trigger, el, container) {
      _cache(trigger, el, container);
      _bindEvents();
    }

    function validateActive (evt) {
      if (_menu.hasClass('js-activeMenu')) {
        _toggleAction(evt);
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
