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
        _submit,
        _form;

    /*Private Methods*/
    var _cache = function (el) {
      _window = jq(window);
      _header = jq('.ia-Header');
      _widget = jq(el);
      _widgetBody = _widget.find('.ia-Experts__body');
      _widgetHeader = _widget.find('.ia-Experts__header');
      _trigger = jq('#trigger-experts');
      _overlay = jq('#content-overlay');
      _body = jq('body');
      _form = jq('#experts-form');
      _submit = _widget.find('.ia-ExpertsForm__submit');
    }

    var _bindEvents = function () {
      _trigger.on('click', function (evt) {
        _showHide();

        Search.validateActive();
        Product.validateActive();
      });
      _overlay.on('click', function () {
        _showHide();
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

    var _showHide = function () {
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

    var _validateSize = function () {
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

    var _validateForm = function () {
      _form.validate({
        rules: {
          name : 'required',
          email : {
            required : true,
            email : true
          },
          question : 'required',
          agree : 'required'
        },
        messages : {
          name : 'Información necesaria',
          email : {
            required : 'Información necesaria',
            email : 'Formato email@ejemplo.com necesario'
          },
          question : 'Información necesaria',
          agree : 'Para continuar, es necesario aceptar las Políticas de Privacidad.'
        }
      });
    }

    /*Public Methods*/
    var init = function (el) {
      setTimeout(function () {
        _cache(el);
        _bindEvents();
        _validateSize();
        _validateForm();
      }, 500);
    }

    var validateActive = function () {
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
