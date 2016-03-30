(function($, window, document) {

  'use strict';

  var jq = $.noConflict();

  var Experts = (function () {

    /*Private vars*/
    var _window,
        _header,
        _widget,
        _widgetBody,
        _widgetHeader,
        _trigger,
        _overlay,
        _body,
        _submit;

    /*Private Methods*/
    function _cache (el) {
      _window = jq(window);
      _header = jq('.ia-Header');
      _widget = jq(el);
      _widgetBody = _widget.find('.ia-Experts__body');
      _widgetHeader = _widget.find('.ia-Experts__header');
      _trigger = _widget.find('#trigger-experts');
      _overlay = jq('.ia-Overlay');
      _body = jq('body');
      _submit = _widget.find('.ia-ExpertsForm__submit');
    }

    function _bindEvents () {
      _trigger.on('click', function (evt) {
        _showHide();

        Search.validateActive();
      });
      _submit.on('click', function () {
        setTimeout(function () {
          _validateSize();
        }, 100);
      });
      _window.resize(function () {
        _validateSize();
      });
    }

    function _showHide () {
      _widget.toggleClass('js-activeWidget');
      _body.toggleClass('js-noscroll');
      if (_overlay.hasClass('js-visible')) {
        _overlay.css({'opacity':'0'});
        setTimeout(function () {
          _overlay.removeClass('js-visible');
        }, 750);
      } else {
        _overlay.addClass('js-visible');
        setTimeout(function () {
          _overlay.css({'opacity':'0.8'});
        }, 100);
      }
    }

    function _validateSize () {
      var _safeHeight = _window.height() - _header.height() - _widgetHeader.height();

      if (Utils.isMobile()) {
        if (_widget.height() > _safeHeight) {
          _widgetBody.css({
            'max-height' : _safeHeight,
            'overflow' : 'auto'
          });
        } else {
          _widgetBody.removeAttr('style');
        }
      }
    }

    /*Public Methods*/
    function init (el) {
      setTimeout(function () {
        _cache(el);
        _bindEvents();
        _validateSize();
      }, 500);
    }

    function validateActive () {
      if (_widget.hasClass('js-activeWidget')) {
        _showHide();
      }
    }

    /*Return*/
    return {
      init : init,
      validateActive : validateActive
    }

  })();

  window.Experts = Experts;

})(jQuery || window.jQuery, window, document);
