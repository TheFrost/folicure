(function($, window, document) {

  'use strict';

  var jq = $.noConflict();

  var Diagnostic = (function () {
    /*Private*/
    var _dgHeader,
        _dgBody,
        _window,
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
        _dgGeneralOptions;

    var _cache = function (header, body) {
      _dgStateCount = null;
      _dgHeader = header;
      _dgBody = body;
      _window = jq(window);
      _sectionHeader = jq('.ia-ContentHeader');
      _dgOptions = jq('.ia-Diagnostic__option');
      _dgInit = jq('#diagnostic-init');
      _dgGeneral = jq('#diagnostic-general');
      _dgStart = jq('.ia-Diagnostic__start');
      _dgSession = {};
      _dgContainer = jq('.ia-Content--diagnostic');
      _dgReset = jq('.ia-Diagnostic__reset');
      _dgQuestion = jq('.ia-Diagnostic__qst');
      _dgService = DiagnosticService.getData();
      _dgProgressBar = jq('.ia-Diagnostic__padding');
      _dgProgressInfo = jq('.ia-Diagnostic__count');
      _dgGeneralOptions = _dgGeneral.find('.ia-Diagnostic__options');

      console.log(_dgService[1].general[0]);
    }

    var _bindEvents = function () {
      _window.resize(function () {
        _bodyRender();
      });

      _dgOptions.on('click', function () {
        var el = jq(this);
        _optionSelected(el);
      });

      _dgInit.on('click', '.ia-Diagnostic__option', function () {
        _activeStart();
      });

      _dgStart.on('click', function () {
        _startAction();
      });

      _dgReset.on('click', function () {
        _resetAction();
      });
    }

    var _render = function () {

      if (_dgStateCount === null) {
        _dgQuestion.text(_dgService[0].init.question)
      } else {

        var _lengthQuestions = _dgService[1].general.length - _dgQuestionCount,
            _porcent = (100 / _lengthQuestions) + '%',
            _options = _dgService[1].general[_dgQuestionCount].options,
            _blocks = '',
            _currentQuestion = _dgQuestionCount === 0
              ? 1
              : _dgQuestionCount;

        _dgQuestion.text(_dgService[1].general[_dgQuestionCount].question);

        _dgProgressBar.css({'width': _porcent});

        _dgProgressInfo
          .text(_currentQuestion + '/' + _lengthQuestions)
          .css({'left' : _porcent});

        console.log(typeof _options);

        // _options.each(function (index, value) {
        //
        //   _blocks += '<div class="ia-Diagnostic__option"><div class="ia-Diagnostic__option__inner"><span class="ia-Diagnostic__option__letter" data-option="A">' + value.letter + ' .</span><p class="ia-Diagnostic__option__copy">' + value.copy + '</p></div></div>'
        //
        // });

        // _dgGeneralOptions.html(_blocks)
      }

    }

    var _resetAction = function () {
      _toggleStates();
      _toggleContainer();
      _manageStorage('kill');
      _dgStateCount = null;
      _render();
    }

    var _startAction = function () {
      var _activeOptionData = jq('.js-active-option').data('option');
      _dgSession['init'] = _activeOptionData;
      _toggleContainer();
      _toggleStates();

      _validateGenere(_activeOptionData);

      _manageStorage('add');
      _render();
    }

    var _validateGenere = function (selected) {
      _dgStateCount = 1;
      _dgQuestionCount = selected === 'M'
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
        _toggleContainer();
        _toggleStates();
        _validateGenere(_selections.init);
        _render();
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
    }

    var _bodyRender = function () {
      if (!Utils.isSmartphone()) {
        var _fixedHeight = !Utils.isMobile()
          ? 44
          : 102;
        var _bodyHeight = _window.innerHeight() - (_sectionHeader.innerHeight() + _fixedHeight)

        _dgBody.css({'height':_bodyHeight});
      } else {
        _dgBody.removeAttr('style');
      }
    }

    /*Public*/
    var init = function (header, body) {
      _cache(header, body)
      _initRender();
      _bodyRender();
      _bindEvents();

      if (!_dgStateCount) {
        _render()
      }
    }

    /*Revealing*/
    return {
      init : init
    }

  })();

  window.Diagnostic = Diagnostic;

})(jQuery || window.jQuery, window, document);
