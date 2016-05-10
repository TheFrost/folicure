(function($, window, document) {

  'use strict';

  var jq = $.noConflict();

  var Share = (function () {

    /*Private*/
    var _triggerFb,
        _facebookUrl,
        _rect;

    var _cache = function (trigger) {
      _triggerFb = trigger;
      _facebookUrl = 'https://www.facebook.com/sharer/sharer.php?u={0}';
      _rect = {
        x: 0,
        y: 0,
        width: 550,
        height: 450,
        position: function() {
          this.x = Math.round(($(window).width() - this.width) / 2);
          this.y = Math.round(($(window).height() - this.height) / 2);
        }
      }
    }

    var _bindEvents = function () {
      _triggerFb.on('click', function (evt) {
        evt.preventDefault();
        var _baseUrl = jq(this).data('url');
        _shareFacebook(_baseUrl);
      });
    }

    var _shareFacebook = function (url) {
      var _settings, _shareUrl;
      _shareUrl = Utils.format(_facebookUrl, url);
      _rect.position();
      _settings = "width=" + _rect.width + ", height=" + _rect.height + ", left=" + _rect.x + ", top=" + _rect.y + ", toolbar=0, location=0, menubar=0, directories=0, scrollbars=0";
      
      if (url) {
        window.open(_shareUrl, 'Facebook', _settings);
      }
    }

    /*Public*/
    var init = function (trigger) {
      _cache(trigger);
      _bindEvents();
      _shareFacebook();
    }

    /*Return*/
    return {
      init : init
    }

  })();

  window.Share = Share;


})(jQuery || window.jQuery, window, document);
