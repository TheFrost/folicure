(function($, window, document) {

  'use strict';

  var jq = $.noConflict();

  var DiagnosticService = (function () {

    var _data = [
        {
          'id' : 0,
          'question' : '¿Cúal es tu género?',
          'options' : {
            'H' : {
              'copy' : 'En general, el cabello masculino requiere sobretodo de una higiene adecuada y frecuente con productos que lo fortalezcan y lo mantengan libre de impurezas y partículas contaminantes. Así al mismo tiempo que se mantiene nutrido, se estará previniendo su caída.'
            },
            'M' : {
              'copy' : 'Dado que en la población femenina es frecuente el cabello largo, debes tener especial cuidado en eliminar el resto de agua después del baño delicadamente y con una toalla; evita sujetar tu cabello (trenzas, cola de caballo, etc.) cuando está húmedo, pues esto propicia el desarrollo hongos que luego se convierten en caspa, lo que debilita la raíz y favorece la caída de cabello. '
            }
          }
        },
        {
          'general' : [
            {
              'id' : 0,
              'copy' : 'Si eres mujer, ¿estás o crees que podrías estar embarazada?',
              'options' : [
                {
                  'letter' : 'A',
                  'copy' : 'Si',
                  'return' : 'Como parte del proceso hormonal que se manifiesta durante el embarazo, los ciclos del folículo piloso sufren ciertas alteraciones, por lo que es relativamente común que el crecimiento se detenga. Semanas después del parto, el cabello retoma su ciclo normal de crecimiento. '
                },
                {
                  'letter' : 'B',
                  'copy' : 'No',
                  'return' : false
                }
              ]
            },
            {
              'id' : 1,
              'copy' : '¿Cuántos años tienes?',
              'options' : [
                {
                  'letter' : 'A',
                  'copy' : 'Menos de 20',
                  'return' : false
                },
                {
                  'letter' : 'B',
                  'copy' : 'De 20 a 30',
                  'return' : 'Estás a un muy buen momento de hacer pequeños cambios en tu estilo de vida ya que de convertirlos en hábitos, evitarás que el cabello sufra alteraciones después de los 30. Empieza con balancear tu dieta y hacer ejercicio de tres a cinco veces por semana.'
                },
                {
                  'letter' : 'C',
                  'copy' : 'De 30 a 40',
                  'return' : false
                },
                {
                  'letter' : 'D',
                  'copy' : 'De 40 en adelante',
                  'return' : false
                }
              ]
            },
          ]
        }
    ];

    var getData = function () {

      return _data;

    }

    /*Revealing*/
    return {
      getData : getData
    }

  })();

  window.DiagnosticService = DiagnosticService;

})(jQuery || window.jQuery, window, document);
