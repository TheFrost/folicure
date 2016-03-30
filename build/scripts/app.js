(function($, window, document) {

  'use strict';

  var jq = $.noConflict();

  // Home init animation
  var homeEntry = (function () {
    var bricks = jq('.ia-Brick');

    setTimeout(function () {
      bricks.each(function (index, el) {
        jq(el).delay(index*100).animate({opacity:1});
      });
    }, 1000);

  })();

  // Init Main Menu
  Menu.init('#header-action', '#main-menu', 'body');


  // Experts Widget Init
  Experts.init('#experts');


  // Experts Form Validation
  jq('#experts-form').validate({
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
      agree : 'Debe estar de acuerdo'
    }
  });


  // Search Widget init
  Search.init('#search');

})(jQuery || window.jQuery, window, document);
