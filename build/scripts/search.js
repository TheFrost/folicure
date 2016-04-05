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
    function _cache (el) {
      _window = jq(window)
      _widget = jq(el);
      _input = _widget.find('#search-input');
      _trigger = Utils.isMobile()
                  ? jq('#m-search-trigger')
                  : jq('#search-trigger');
    }

    function _bindEvents () {
      if (!Utils.isMobile()) {
        _input.keyup(_detectActivity);
      }

      _trigger.on('click', function (evt) {
        _toggleSearch(evt);

        Experts.validateActive();
        Menu.validateActive();
      });

      _window.resize(function () {
        _trigger = Utils.isMobile()
                    ? jq('#m-search-trigger')
                    : jq('#search-trigger');

        if (!Utils.isMobile()) {
          _input.keyup(_detectActivity);
        }

        _trigger.on('click', _toggleSearch);
      });
    }

    function _toggleSearch (evt) {

      if (evt != undefined) {
        evt.preventDefault();
      }

      _widget.toggleClass('js-searchActive');
    }

    function _detectActivity () {
      if (_input.val().length > 0) {
        _trigger.attr('type', 'submit');
      } else {
        _trigger.attr('type', 'button');
      }
    }


    /*Public Methods*/
    function init (el) {
      _cache(el);
      _bindEvents();
    }

    function validateActive () {
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
