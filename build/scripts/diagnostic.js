(function($, window, document) {

  'use strict';

  var jq = $.noConflict();

  var Diagnostic = (function () {




    var _data = [
      {
        'texto' : 'texto de pregunta',
        'opciones' : {
          'a' : {
            'copy' : 'copy de opcion',
            'return' : 'copy de respuesta'
          }
        }
      },
      {
        'texto' : 'texto de pregunta2',
        'opciones' : {
          'a' : {
            'copy' : 'copy de opcion',
            'return' : 'copy de respuesta'
          }
        }
      },

    ];

    var getData = function () {

      return _data;

    }

    /*Revealing*/
    return {
      getData : getData
    }

  })();

  window.Diagnostic = Diagnostic.getData();

})(jQuery || window.jQuery, window, document);
