(function($, window, document) {

  'use strict';

  var jq = $.noConflict();

  var Diagnostic = (function () {

    /*Private*/
    var _window,
        _dgContainer,
        _dgHeader,
        _dgBody,
        _dgProgress,
        _dgService,
        _dgQuestion,
        _dgInfoCount,
        _dgGeneralCount,
        _dgStateCount,
        _dgOptions,
        _dgInit,
        _dgGeneral,
        _dgStart,
        _dgReturn,
        _sectionHeader,
        _expertsWidget,
        _mainMenu;


    var _cache = function (header, body) {
      _window = jq(window);
      _dgContainer = jq('.ia-Content--diagnostic');
      _dgService = DiagnosticService.getData();
      _dgHeader = header;
      _dgQuestion = _dgHeader.find('.ia-Diagnostic__qst');
      _dgBody = body;
      _dgStateCount = 0;
      _dgInit = jq('#diagnostic-init');
      _dgGeneral = jq('#diagnostic-general');
      _dgStart = _dgInit.find('.ia-Diagnostic__start');
      _dgReturn = _dgGeneral.find('.ia-Diagnostic__return');
      _dgOptions = jq('.ia-Diagnostic__option');

      _sectionHeader = jq('.ia-ContentHeader');
      _expertsWidget = jq('#trigger-experts');
      _mainMenu = jq('#main-menu');
    }

    var _bindEvents = function () {
      _window.resize(function () {
        _initBodyRender();
      });

      _dgOptions.on('click', function () {
        var el = jq(this);
        _optionAction(el);
      });

      _dgInit.on('click', '.ia-Diagnostic__option', function (evt) {
        var el = jq(this);
        _bodyBg(el);
      });

      _dgStart.on('click', function () {
        _startAction();
      });

      _dgReturn.on('click', function () {
        _returnAction();
      });

    }

    var _fetch = function () {

    }

    var _render = function () {

    }

    var _startAction = function () {
      _dgContainer.removeClass('js-init-active');
      _dgInit.hide();
      _dgGeneral.show();
    }

    var _returnAction = function () {
      _dgContainer.addClass('js-init-active');
      _dgInit.show();
      _dgGeneral.hide();
      _dgOptions.removeClass('js-active-option');
      _dgBody.css({'background':'#f5f5f5'});
    }

    var _initBodyRender = function () {
      if (!Utils.isSmartphone()) {
        var _fixedEelementsH = !Utils.isMobile()
          ? 44
          : 102;

        var _bodyHeight = _window.innerHeight() - (_sectionHeader.innerHeight() + _fixedEelementsH);

        _dgBody.css({'height':_bodyHeight});
      } else {
        _dgBody.removeAttr('style');
      }
    }

    var _bodyBg = function (el) {
      console.log(el.data('option'));

      _dgBody.css({
        'background' : 'url(images/diagnostic-' + el.data('option') + '.jpg) no-repeat center center',
        'background-size' : 'cover'
      });
    }

    var _optionAction = function (el) {
      _dgOptions.removeClass('js-active-option');
      el.addClass('js-active-option');
      jq('.ia-Diagnostic__start').removeClass('js-disabled');
    }


    /*Public*/
    var init = function (header, body) {
      _cache(header, body);
      _initBodyRender();
      _bindEvents();
    }


    /*Revealing*/
    return {
      init : init
    }

  })();

  window.Diagnostic = Diagnostic;

})(jQuery || window.jQuery, window, document);
