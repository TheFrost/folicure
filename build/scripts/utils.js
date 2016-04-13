(function($, window, document) {

  'use strict';

  var jq = $.noConflict();

  var Utils = (function () {

    String.prototype.capitalize = function () {
      return this.charAt(0).toUpperCase() + this.slice(1);
    };

    return {

      isMobile : function () {
        return jq(window).innerWidth() <= 768;
      },

      prefix : function () {
        var styles = window.getComputedStyle(document.documentElement, ''),
          pre = (Array.prototype.slice
            .call(styles)
            .join('')
            .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
          )[1],
          dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
        return {
          dom: dom,
          lowercase: pre,
          css: '-' + pre + '-',
          js: pre[0].toUpperCase() + pre.substr(1)
        };
      },

      vendorProp : function (prop, val, el) {
        var tempDiv = document.createElement("div");
        var prefixes = [prop, 'ms' + prop.capitalize(), 'Moz' + prop.capitalize(), 'Webkit' + prop.capitalize(), 'O' + prop.capitalize()];

        var propSelected = prefixes.filter(function (value) {
          return typeof tempDiv.style[value] != 'undefined';
        });

        el.css(propSelected[0], val);
      }

    }

  })();

  window.Utils = Utils;

})(jQuery || window.jQuery, window, document);
