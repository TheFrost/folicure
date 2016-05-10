(function($, window, document) {

  'use strict';

  var jq = $.noConflict();

  var Search = (function () {

    /*Private vars*/
    var _widget,
        _input,
        _trigger,
        _window;


    /*Private Methods*/
    var _cache = function (el) {
      _window = jq(window);
      _widget = jq(el);
      _input = _widget.find('#search-input');
      _trigger = Utils.isMobile()
                  ? jq('#m-search-trigger')
                  : jq('#search-trigger');
    }

    var _bindEvents = function () {
      if (!Utils.isMobile()) {
        _input.keyup(_detectActivity);
      }

      _trigger.on('click', function (evt) {
        if (evt != undefined) {
          evt.preventDefault();
        }
        _onClick();
      });

      _window.resize(function () {

        _trigger = Utils.isMobile()
                    ? jq('#m-search-trigger')
                    : jq('#search-trigger');

        _trigger.off();

        _trigger.on('click', function (evt) {
          if (evt != undefined) {
            evt.preventDefault();
          }
          _onClick();
        });

        if (!Utils.isMobile()) {
          _input.keyup(_detectActivity);
        }
      });
    }

    var _onClick = function () {
      _toggleSearch();

      Experts.validateActive();
      Menu.validateActive();
      Product.validateActive();
    }

    var _toggleSearch = function () {
      _widget.toggleClass('js-searchActive');
    }

    var _detectActivity = function () {
      var action = _input.val().length > 0 ? 'submit' : 'button';

      _trigger.attr('type', action);
    }


    /*Public Methods*/
    var init = function (el) {
      _cache(el);
      _bindEvents();
    }

    var validateActive = function () {
      if (_widget.hasClass('js-searchActive')) {
        _toggleSearch();
      }
    }

    /*Return*/
    return {
      init : init,
      validateActive : validateActive
    }

  })();

  window.Search = Search;

})(jQuery || window.jQuery, window, document);
