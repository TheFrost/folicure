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
      _sectionHeader = jq('.ia-ContentHeader');
      _expertsWidget = jq('#trigger-experts');
      _mainMenu = jq('#main-menu');
    }

    var _bindEvents = function () {
      _window.resize(function () {
        _bodyRender();
      });

      _dgOptions.on('click', function () {
        var el = jq(this)
        _optionAction(el);
      });
    }

    var _fetch = function () {

    }

    var _render = function () {

    }

    var _bodyRender = function () {
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

    var _initRender = function () {
      _dgQuestion.text(_dgService[0]['question']);
      _dgOptions = jq('.ia-Diagnostic__option');
    }

    var _optionAction = function (el) {
      _dgOptions.removeClass('js-active-option');
      el.addClass('js-active-option');
    }


    /*Public*/
    var init = function (header, body) {
      _cache(header, body);
      _bodyRender();
      _initRender();
      _bindEvents();
    }


    /*Revealing*/
    return {
      init : init
    }

  })();

  window.Diagnostic = Diagnostic;

})(jQuery || window.jQuery, window, document);
