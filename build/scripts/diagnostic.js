(function($, window, document) {

  'use strict';

  var jq = $.noConflict();

  var Diagnostic = (function () {
    /*Private*/
    var _dgHeader,
        _dgBody,
        _window,
        _document,
        _sectionHeader,
        _dgOptions,
        _dgInit,
        _dgGeneral,
        _dgStart,
        _dgSession,
        _dgQuestionCount,
        _dgStateCount,
        _dgContainer,
        _dgReset,
        _dgQuestion,
        _dgService,
        _dgProgressBar,
        _dgProgressInfo,
        _dgGeneralOptions,
        _dgNext,
        _dgPrev,
        _lengthQuestions,
        _dgQuestionStart,
        _activeOptionData,
        _activeOptions;

    var _cache = function (header, body) {
      _dgStateCount = null;
      _dgHeader = header;
      _dgBody = body;
      _window = jq(window);
      _document = jq(document)
      _sectionHeader = jq('.ia-ContentHeader');
      _dgInit = jq('#diagnostic-init');
      _dgGeneral = jq('#diagnostic-general');
      _dgStart = jq('.ia-Diagnostic__start');
      _dgSession = JSON.parse(sessionStorage.getItem('diagnostic')) || {};
      _dgContainer = jq('.ia-Content--diagnostic');
      _dgReset = jq('.ia-Diagnostic__reset');
      _dgQuestion = jq('.ia-Diagnostic__qst');
      _dgService = DiagnosticService.getData();
      _dgProgressBar = jq('.ia-Diagnostic__padding');
      _dgProgressInfo = jq('.ia-Diagnostic__count');
      _dgGeneralOptions = _dgGeneral.find('.ia-Diagnostic__options');
      _dgNext = jq('.ia-Diagnostic__ctrl--next');
      _dgPrev = jq('.ia-Diagnostic__ctrl--prev');
    }

    var _bindEvents = function () {

      _window.resize(function () {
        _bodyRender();
        _renderOptions();
      });

      _dgGeneral.on('click', '.ia-Diagnostic__option', function () {
        var el = jq(this);
        _optionSelected(el);
        _validateControls();
      });

      _dgInit.on('click', '.ia-Diagnostic__option', function () {
        var el = jq(this);
        _optionSelected(el);
        _activeStart();
      });

      _dgStart.on('click', function () {
        _startAction();
      });

      _dgReset.on('click', function () {
        _resetAction();
      });

      _dgNext.on('click', function (evt) {
        evt.preventDefault();
        _nextAction();
      });

      _dgPrev.on('click', function (evt) {
        evt.preventDefault();
        _prevAction();
      });
    }

    var _render = function () {

      if (_dgStateCount === null) {
        _dgQuestion.text(_dgService[0].init.question);
      } else {

        _lengthQuestions = _dgService[1].general.length - _dgQuestionStart;

        var _currentQuestion = _dgQuestionStart === 0
              ? _dgQuestionCount + 1
              : _dgQuestionCount,
            _porcent = (100 / _lengthQuestions) * _currentQuestion + '%',
            _options = _dgService[1].general[_dgQuestionCount].options,
            _blocks = '';

        _dgQuestion.text(_dgService[1].general[_dgQuestionCount].question);

        _dgProgressBar.css({'width': _porcent});

        _dgProgressInfo
          .text(_currentQuestion + '/' + _lengthQuestions)
          .css({'left' : _porcent});

        for (var i = 0; i < _options.length; i++) {
          _blocks += '<div class="ia-Diagnostic__option" data-option="' + _options[i].letter + '"><div class="ia-Diagnostic__option__inner"><span class="ia-Diagnostic__option__letter" data-option="A">' + _options[i].letter + ' .</span><p class="ia-Diagnostic__option__copy">' + _options[i].copy + '</p></div></div>'
        }

        _dgGeneralOptions.html(_blocks)

        _renderOptions();
      }

      _dgOptions = jq('.ia-Diagnostic__option');



      _resetOptions();

      _validateControls();

    }

    var _renderOptions = function () {
      var _elements = _dgGeneral.find('.ia-Diagnostic__option .ia-Diagnostic__option__copy');

      _elements = jq.map(_elements, function (val) {
        return jq(val).innerHeight();
      }).sort(function (a, b) {
        return a < b;
      });

      if (_elements[0] > 156) {
        _dgGeneral.find('.ia-Diagnostic__option').css({'height':_elements[0] + 64});
      }
    }

    var _nextAction = function () {

      if (_dgQuestionCount <= _lengthQuestions - 1) {
        _sessionControlAdd('next');
        _render();

        _selectedCache();

      }
    }

    var _prevAction = function () {
      _sessionControlAdd('prev');
      _render();
      _selectedCache();
    }

    var _selectedCache = function () {
      var _session = JSON.parse(sessionStorage.getItem('diagnostic'));

      if (_session[String(_dgQuestionCount)]) {

        var _selected = _session[String(_dgQuestionCount)];

        _dgGeneral.find('.ia-Diagnostic__option[data-option="' + _selected + '"]').trigger('click');

        _validateControls();
      }
    }

    var _sessionControlAdd = function (action) {
      _dgSession[String(_dgQuestionCount)] = _activeOptionData;
      _dgQuestionCount = action === 'next'
        ? _dgQuestionCount + 1
        : _dgQuestionCount - 1;
      _manageStorage('add');
    }

    var _validateControls = function () {

      _activeOptions = jq('.js-active-option');

      if (!_activeOptions.length) {
        _dgNext.addClass('js-disabled');
      } else {
        _dgNext.removeClass('js-disabled')
      }

      if (_dgQuestionCount === _dgQuestionStart) {
        _dgPrev.addClass('js-disabled');
      } else {
        _dgPrev.removeClass('js-disabled')
      }

    }

    var _resetOptions = function () {
      _dgOptions.removeClass('js-active-option');
    }

    var _resetProgress = function () {
      _dgProgressBar.removeAttr('style');
      _dgProgressInfo.removeAttr('style');
    }

    var _resetAction = function () {
      _toggleStates();
      _toggleContainer();
      _manageStorage('kill');
      _dgStateCount = null;
      _disableStart();
      _resetProgress();
      _render();
      _resetOptions();
      _dgSession = {};
    }

    var _startAction = function () {
      _dgSession['init'] = _activeOptionData;
      _toggleContainer();
      _toggleStates();

      _validateGenere(_activeOptionData);

      _dgQuestionCount = _dgQuestionStart;

      _manageStorage('add');
      _render();
    }

    var _validateGenere = function (selected) {
      _dgStateCount = 1;
      _dgQuestionStart = selected === 'M'
        ? 0
        : 1;
    }

    var _manageStorage = function (action) {
      if(typeof(Storage) !== "undefined") {
        switch(action) {
          case 'add' :
            sessionStorage.setItem('diagnostic', JSON.stringify(_dgSession));
            sessionStorage.setItem('state', _dgQuestionCount);
            break;
          case 'kill' :
            sessionStorage.removeItem('diagnostic');
            sessionStorage.removeItem('state');
            break;
        }
      } else {
        console.log('Web Storage not Found!');
      }
    }

    var _initRender = function () {
      var _session = sessionStorage.getItem('state');
      var _selections = JSON.parse(sessionStorage.getItem('diagnostic'));

      if (_session) {
        _dgQuestionCount = parseInt(_session);
        _toggleContainer();
        _toggleStates();
        _validateGenere(_selections.init);

        setTimeout(function () {
          _selectedCache();
        }, 100);
      }
    }

    var _toggleContainer = function () {
      _dgContainer.toggleClass('js-init-active');
    }

    var _toggleStates = function () {
      _dgInit.toggleClass('js-state-active');
      _dgGeneral.toggleClass('js-state-active');
    }

    var _activeStart = function () {
      _dgStart.removeClass('js-disabled');
    }

    var _disableStart = function () {
      _dgStart.addClass('js-disabled');
    }

    var _optionSelected = function (el) {
      _dgOptions.removeClass('js-active-option');
      el.addClass('js-active-option');
      _activeOptionData = jq('.js-active-option').data('option');
    }

    var _bodyRender = function () {
      if (!Utils.isSmartphone()) {
        var _fixedHeight = !Utils.isMobile()
          ? 44
          : 102;
        var _bodyHeight = _window.innerHeight() - (_sectionHeader.innerHeight() + _fixedHeight)

        _dgBody.css({'min-height':_bodyHeight});
      } else {
        _dgBody.removeAttr('style');
      }
    }

    /*Public*/
    var init = function (header, body) {
      _cache(header, body)
      _initRender();
      _bodyRender();
      _render();
      _bindEvents();
    }

    /*Revealing*/
    return {
      init : init
    }

  })();

  window.Diagnostic = Diagnostic;

})(jQuery || window.jQuery, window, document);
