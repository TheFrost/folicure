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
        _activeOptions,
        _dgView,
        _dgSummary,
        _dgNav,
        _dgNavFinish,
        _dgPrevFinish,
        _dgFinish,
        _dgResults,
        _dgViews,
        _dgResultDesc,
        _dgResultProductTitle,
        _dgResultBottle,
        _dgResultLink,
        _dgResultReset,
        _dgMenuAction;

    var _cache = function (header, body) {
      _dgStateCount = 0;
      _dgHeader = header;
      _dgBody = body;
      _window = jq(window);
      _document = jq(document)
      _sectionHeader = jq('.ia-ContentHeader');
      _dgInit = jq('#diagnostic-init');
      _dgGeneral = jq('#diagnostic-general');
      _dgResults = jq('#diagnostic-result');
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
      _dgSummary = jq('.ia-Diagnostic__result__summary');
      _dgNav = jq('.ia-Diagnostic__ctrls__nav');
      _dgNavFinish = jq('.ia-Diagnostic__ctrls__last');
      _dgPrevFinish = jq('.ia-Diagnostic__ctrl--prev-finish');
      _dgFinish = jq('.ia-Diagnostic__ctrl--finish');
      _dgViews = jq('.ia-Diagnostic__view'),
      _dgResultDesc = jq('.ia-Diagnostic__result__desc');
      _dgResultProductTitle = _dgResults.find('.ia-Product__category');
      _dgResultBottle = jq('.ia-Diagnostic__result__bottle img');
      _dgResultLink = jq('.ia-Diagnostic__result__link');
      _dgResultReset = jq('.ia-Diagnostic__result__reset');
      _dgMenuAction = jq('#main-menu');
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
        _bodyBg(el);
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

      _dgPrevFinish.on('click', function (evt) {
        evt.preventDefault();
        _prevAction();
      });

      _dgFinish.on('click', function (evt) {
        evt.preventDefault();
        _nextAction();
        _dgStateCount = 2;
        _dgInit.hide();
        _dgGeneral.hide();
        _dgResults.addClass('js-state-active');
        sessionStorage.setItem('state', 2);
        _render();
      });

      _dgResultReset.on('click', function () {
        _resetAction();
      });

      _dgMenuAction.on('click', function () {
        _resetAction();
      });
    }

    var _render = function () {

      switch(_dgStateCount) {
        case 0 :
          _renderControlInit();
          break;
        case 1 :
          _renderControlQuestions();
          break;
        case 2 :
          _renderControlResult();
          break;
      }

      _dgOptions = jq('.ia-Diagnostic__option');

      _resetOptions();

      setTimeout(function () {
        _bodyRender();
      }, 500);

      _activeOptionData = null;

    }

    var _renderControlResult = function () {

      var _session = JSON.parse(sessionStorage.getItem('diagnostic')),
          _length = _dgService[1].general.length,
          _genere = '<p>' + _dgService[0].init.options[_session['init']].copy + '</p>',
          _results = _genere,
          _header = _dgService[2].copy,
          _session = JSON.parse(sessionStorage.getItem('diagnostic')),
          _genere = _session['init'],
          _srcImg = _dgResultBottle.attr('src'),
          _desc,
          _product,
          _class,
          _urlImg,
          _urlLink;


      for (var i = 0; i < _length; i++) {
        if (_session[String(i)]) {

          var _response = _session[String(i)];

          for (var x = 0; x < _dgService[1].general[i].options.length; x++) {

            if (_dgService[1].general[i].options[x].letter === _response) {

              if (_dgService[1].general[i].options[x].return) {

                if (i === _length - 1) {

                  _desc = _dgService[1].general[i].options[x].return;
                  _product = _dgService[1].general[i].options[x].product;
                  _class = _dgService[1].general[i].options[x].class;

                } else {

                  _results += '<p>' + _dgService[1].general[i].options[x].return + '</p>';

                }

              }

            }

          }
        }
      }

      _urlImg = _srcImg + 'single-' + _class + '-shampoo.png';

      _urlLink = 'product-' + _class + '.html'

      _dgResultBottle.attr('src', _urlImg);

      _dgResultLink.attr('href', _urlLink);

      _dgHeader.addClass('js-result-' + _class);

      _dgQuestion.text(_header);

      _dgProgressInfo.text('COMPLETADO').addClass('js-finish');

      _dgResults.addClass('js-result-' + _class);

      _dgResultProductTitle.text(_product);

      _dgResultDesc.html(_desc);

      _dgSummary.html(_results);

      _dgSummary.removeClass('js-bg-M');
      _dgSummary.removeClass('js-bg-H');
      _dgSummary.addClass('js-bg-' + _genere);

      _dgBody.removeClass('js-bg-' + _genere);

    }

    var _renderControlInit = function () {
      _dgQuestion.text(_dgService[0].init.question);
    }

    var _renderControlQuestions = function () {
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

      _validateControls();
    }

    var _renderOptions = function () {
      var _elements = _dgGeneral.find('.ia-Diagnostic__option .ia-Diagnostic__option__copy'),
          _size = Utils.isSmartphone()
            ? 100
            : 156,
          _extra = Utils.isSmartphone()
            ? 94
            : 64;

      _elements = jq.map(_elements, function (val) {
        return jq(val).innerHeight();
      }).sort(function (a, b) {
        return a < b;
      });

      if (_elements[0] > _size) {
        _dgGeneral.find('.ia-Diagnostic__option').css({'height':_elements[0] + _extra});
      }
    }

    var _nextAction = function () {

      _sessionControlAdd('next');

      var _setLength = _dgQuestionStart === 0
        ? _lengthQuestions - 1
        : _lengthQuestions;

      if (_dgQuestionCount < _setLength) {

        _dgQuestionCount++;
        _render();
        _selectedCache();
      }

      _manageStorage('add');

    }

    var _prevAction = function () {
      _sessionControlAdd('prev');
      _dgQuestionCount--;
      _render();
      _selectedCache();
      _manageStorage('add');
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

      if (action === 'next') {
        _dgSession[String(_dgQuestionCount)] = _activeOptionData;

      } else {

        if (_activeOptionData !== null) {
          _dgSession[String(_dgQuestionCount)] = _activeOptionData;
        }

      }
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

      if (_dgQuestionCount === 9) {
        _dgNav.hide();
        _dgNavFinish.show();
      } else {
        _dgNav.show();
        _dgNavFinish.hide();
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
      _toggleContainer();
      _manageStorage('kill');
      _dgStateCount = 0;
      _toggleStates();
      _disableStart();
      _resetProgress();
      _render();
      _resetOptions();
      _dgSession = {};
    }

    var _startAction = function () {
      _dgSession['init'] = _activeOptionData;
      _toggleContainer();
      _validateGenere(_activeOptionData);
      _toggleStates();
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
            sessionStorage.setItem('question', _dgQuestionCount);
            sessionStorage.setItem('state', _dgStateCount);
            break;
          case 'kill' :
            sessionStorage.removeItem('diagnostic');
            sessionStorage.removeItem('question');
            sessionStorage.removeItem('state');
            break;
        }
      } else {
        console.log('Web Storage not Found!');
      }
    }

    var _initRender = function () {
      var _session = sessionStorage.getItem('question');
      var _selections = JSON.parse(sessionStorage.getItem('diagnostic'));
      _dgStateCount = sessionStorage.getItem('state')
        ? JSON.parse(sessionStorage.getItem('state'))
        : 0;

      if (_dgStateCount) {

          _dgQuestionCount = parseInt(_session);
          _toggleContainer();
          _toggleStates();

          if (!(_dgStateCount === 2)) {
            _validateGenere(_selections.init);
          }

          setTimeout(function () {
            _selectedCache();
          }, 100);

      }
    }

    var _toggleContainer = function () {
      _dgContainer.toggleClass('js-init-active');
    }

    var _toggleStates = function () {
      _dgViews.removeClass('js-state-active');
      switch(_dgStateCount) {
        case 0 :
          _dgInit.addClass('js-state-active');
          break;
        case 1 :
          _dgGeneral.addClass('js-state-active');
          break;
        case 2 :
          _dgResults.addClass('js-state-active');
          break;
      }
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
      var _dgView,
          _contentCurrentHeight;

      switch(_dgStateCount) {
        case 0:
          _dgView = jq('#diagnostic-init');
          break;
        case 1:
          _dgView = jq('#diagnostic-general');
          break;
        case 2:
          _dgView = jq('#diagnostic-result');
          break;
      }

      _contentCurrentHeight = _dgView.innerHeight() + 64;

      _dgBody.removeAttr('style');

      if (!Utils.isSmartphone()) {
        var _fixedHeight = !Utils.isMobile()
          ? 44
          : 102;
        var _bodyHeight = _window.innerHeight() - (_sectionHeader.innerHeight() + _fixedHeight);

        if (_contentCurrentHeight < _bodyHeight) {
          _dgBody.css({'height' : _bodyHeight});
        } else {
          _dgBody.css({'max-height' : _contentCurrentHeight});
        }


        _summaryRender(_bodyHeight);


      } else {
        _dgBody.removeAttr('style');
      }
    }

    var _summaryRender = function (bodyH) {

        if (_window.innerWidth() >= 1280) {
          _dgSummary.perfectScrollbar();
          _dgSummary.css({'height':bodyH - 64});
        } else {
          _dgSummary.perfectScrollbar('destroy');
          _dgSummary.removeAttr('style');
        }
    }

    var _bodyBg = function (el) {
      console.log(el.data('option'));

      _dgBody.css({
        'background' : 'url(images/diagnostic-' + el.data('option') + '.jpg) no-repeat center center',
        'background-size' : 'cover'
      });
    }

    var _bodyBg = function (el) {
      console.log(el.data('option'));
      _dgBody.removeClass('js-bg-M');
      _dgBody.removeClass('js-bg-H');
      _dgBody.addClass('js-bg-' + el.data('option'));
    }

    /*Public*/
    var init = function (header, body) {
      _cache(header, body);
      _initRender();
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
