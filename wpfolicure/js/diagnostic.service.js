(function($, window, document) {

  'use strict';

  var jq = $.noConflict();

  var DiagnosticService = (function () {

    var _data = [
        {
          'init' : {
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
          }
        },
        {
          'general' : [
            {
              'id' : 0,
              'question' : 'Si eres mujer, ¿estás o crees que podrías estar embarazada?',
              'options' : [
                {
                  'letter' : 'A',
                  'copy' : 'Sí.',
                  'return' : 'Como parte del proceso hormonal que se manifiesta durante el embarazo, los ciclos del folículo piloso sufren ciertas alteraciones, por lo que es relativamente común que el crecimiento se detenga. Semanas después del parto, el cabello retoma su ciclo normal de crecimiento. '
                },
                {
                  'letter' : 'B',
                  'copy' : 'No.',
                  'return' : false
                }
              ]
            },
            {
              'id' : 1,
              'question' : '¿Cuántos años tienes?',
              'options' : [
                {
                  'letter' : 'A',
                  'copy' : 'Menos de 20.',
                  'return' : false
                },
                {
                  'letter' : 'B',
                  'copy' : 'De 20 a 30.',
                  'return' : 'Estás a un muy buen momento de hacer pequeños cambios en tu estilo de vida ya que de convertirlos en hábitos, evitarás que el cabello sufra alteraciones después de los 30. Empieza con balancear tu dieta y hacer ejercicio de tres a cinco veces por semana.'
                },
                {
                  'letter' : 'C',
                  'copy' : 'De 30 a 40.',
                  'return' : false
                },
                {
                  'letter' : 'D',
                  'copy' : 'De 40 en adelante.',
                  'return' : false
                }
              ]
            },
            {
              'id' : 2,
              'question' : '¿Cuáles de estas descripciones crees que definirían tu cabello?',
              'options' : [
                {
                  'letter' : 'A',
                  'copy' : 'Abundante y espeso, aunque te cuesta trabajo moldearlo.',
                  'return' : 'No cepilles muy fuerte tu cabello, utiliza accesorios de cerdas muy suaves y procura peinarlo cuando esté seco, no mojado, ya que esto facilita que el cabello delgado se quiebre. <br> Evita todo lo posible el uso de secadores de cabello; si no tienes opción, utiliza las temperaturas más bajas.'
                },
                {
                  'letter' : 'B',
                  'copy' : 'Abundante pero escurridizo, los peinados se te vienen abajo a las pocas horas y pareciera que en realidad tienes poco cabello.',
                  'return' : 'No cepilles muy fuerte tu cabello, utiliza accesorios de cerdas muy suaves y procura peinarlo cuando esté seco, no mojado, ya que esto facilita que el cabello delgado se quiebre. <br> Evita todo lo posible el uso de secadores de cabello; si no tienes opción, utiliza las temperaturas más bajas.'
                },
                {
                  'letter' : 'C',
                  'copy' : 'Cualquiera de las dos anteriores pero la caída del cabello cada vez es más notoria a simple vista.',
                  'return' : 'No cepilles muy fuerte tu cabello, utiliza accesorios de cerdas muy suaves y procura peinarlo cuando esté seco, no mojado, ya que esto facilita que el cabello delgado se quiebre. <br> Evita todo lo posible el uso de secadores de cabello; si no tienes opción, utiliza las temperaturas más bajas.'
                },
                {
                  'letter' : 'D',
                  'copy' : 'Cuando pasas la mano por tu cabello, sientes las yemas de tus dedos como grasosos.',
                  'return' : 'No cepilles muy fuerte tu cabello, utiliza accesorios de cerdas muy suaves y procura peinarlo cuando esté seco, no mojado, ya que esto facilita que el cabello delgado se quiebre. <br> Evita todo lo posible el uso de secadores de cabello; si no tienes opción, utiliza las temperaturas más bajas.'
                }
              ]
            },
            {
              'id' : 3,
              'question' : '¿Qué tan visible es tu caída del cabello?',
              'options' : [
                {
                  'letter' : 'A',
                  'copy' : 'Sólo se cae, pero a simple vista la abundancia del cabello se ve normal.',
                  'return' : false
                },
                {
                  'letter' : 'B',
                  'copy' : 'Una ligera circunferencia al centro del cráneo (que va haciéndose cada vez más notorio).',
                  'return' : false
                },
                {
                  'letter' : 'C',
                  'copy' : 'Pronunciado en las entradas (en forma de M).',
                  'return' : false
                },
                {
                  'letter' : 'D',
                  'copy' : 'Desde las sienes y hacia atrás (en forma de U).',
                  'return' : false
                }
              ]
            },
            {
              'id' : 4,
              'question' : '¿Cuántas veces a la semana usas shampoo?',
              'options' : [
                {
                  'letter' : 'A',
                  'copy' : '1 o 2.',
                  'return' : 'Te recomendamos lavar tu cabello con más frecuencia. No lavarlo diario, provocará que los residuos que en él se albergan, sobretodo aquellos que se obtienen por factores externos, permanezcan en tu cabello, perjudicándolo con el paso del tiempo y favoreciendo su caída. '
                },
                {
                  'letter' : 'B',
                  'copy' : '3 a 5.',
                  'return' : 'Recomendación: con un poco de fuerza de voluntad podrías esforzarte un poco más para lavarte el cabello prácticamente diario. '
                },
                {
                  'letter' : 'C',
                  'copy' : '5 a 7.',
                  'return' : 'Es hora de que elijas muy bien los productos con los que lavas tu cabello. Presta mucha atención a los agentes con los que están hechos, ya que algunos dañan sobretodo el cuero cabelludo, irritándolo casi siempre y provocando la caída del cabello; asegúrate que contengan los nutrientes básicos como una buena gama de vitaminas B, además de nutrientes como el Pantenol, que le darán a tu cabello brillo natural y lo fortalecerán para evitar futuras caídas. '
                },
                {
                  'letter' : 'D',
                  'copy' : 'Más de 7.',
                  'return' : 'Es hora de que elijas muy bien los productos con los que lavas tu cabello. Presta mucha atención a los agentes con los que están hechos, ya que algunos dañan sobretodo el cuero cabelludo, irritándolo casi siempre y provocando la caída del cabello; asegúrate que contengan los nutrientes básicos como una buena gama de vitaminas B, además de nutrientes como el Pantenol, que le darán a tu cabello brillo natural y lo fortalecerán para evitar futuras caídas. '
                }
              ]
            },
            {
              'id' : 5,
              'question' : '¿A cuáles de estos factores expones mayoritariamente tu cabello?',
              'options' : [
                {
                  'letter' : 'A',
                  'copy' : 'Agua muy caliente.',
                  'return' : 'Utiliza agua, de templada a fría, para lavarte el cabello. De acuerdo con la Asociación Americana para la Piel de los Estados Unidos, lavar el cabello con agua caliente o muy caliente, ocasiona que quede demasiado duro, lo cual se vuelve complicado de peinar. Además, las temperaturas altas suelen acentuar ciertos padecimientos, por lo que si tienes algún problema, tales como exceso de grasa, deshidratación o caspa, lo más probable es que notes más grasa o caspa si usas agua caliente. Lo ideal es que al lavar tu cabello con shampoo, utilices agua templada y, de usar enjuague, es recomendable el agua de templada a fría. Con esto no sólo mantendrás tu cabello a salvo, sino que notarás como su sedosidad y brillo natural cobran más fuerza.'
                },
                {
                  'letter' : 'B',
                  'copy' : 'Cualquier tipo de geles moldeadores del cabello, lacas o procesos químicos, tinte pare el cabello y/o calor.',
                  'return' : 'Los tintes, sprays y secadoras afectan el ciclo normal del cabello. Por lo mismo, debes tener especial cuidado en los productos que utilizas, revisar muy bien sus componentes para asegurarte que no contengan químicos muy agresivos y evitar, en la medida de lo posible, que lleguen a la raíz. <br> Productos con vitaminas y sustancias activas como Fintantriol y Queratina ayudan a fortalecer el cabello después de exponerlo a tratamientos como tintes, permanentes o secadoras, evitando su caída.'
                },
                {
                  'letter' : 'C',
                  'copy' : 'Excesiva sudoración. Estrés.',
                  'return' : false
                },
                {
                  'letter' : 'D',
                  'copy' : 'Smog, cloro de alberca, contaminantes extremos.',
                  'return' : 'La Sociedad Iberoamericana de Dermatología señala que: "El humo, la contaminación y la suciedad urbana se pueden acumular en el cabello, dándole un aspecto mate y desvitalizado que puede generar una caída prematura. Asimismo, el humo del tabaco y del gas natural de las cocinas, contaminantes externos, etcétera, también puede tener como efecto secundario la decoloración del cabello". Desgraciadamente es difícil controlar estos factores puesto que quedarse encerrado no es una opción. Una buena forma de mantenerlo a salvo es usando enjuague además del shampoo, de preferencia que el enjuague tenga propiedades hidratantes para mayor protección. <br> Si entras al mar y, sobre todo, a albercas, en la medida de lo posible, trata de lavar tu cabello con agua dulce y/o agua natural para eliminar sales y el cloro de las piscinas que irritan el cuero cabelludo, desgastándolo. También puedes usar un gorro de goma.'
                }
              ]
            },
            {
              'id' : 6,
              'question' : '¿Cómo describirías tu nivel de estrés?',
              'options' : [
                {
                  'letter' : 'A',
                  'copy' : 'A decir verdad, siempre estoy bastante relajado.',
                  'return' : false
                },
                {
                  'letter' : 'B',
                  'copy' : 'Bajo, sólo te estresas con situaciones realmente extremas, quizás una vez a la semana.',
                  'return' : '¡Cuidado con el estrés! Caminar por un periodo de al menos 10 minutos un par de veces al día te ayudará a disminuir tus niveles de estrés. Reducir tu consumo de cafeína también te ayudará a controlarlo. Verifica que estás cumpliendo con tus horas de sueño necesarias.'
                },
                {
                  'letter' : 'C',
                  'copy' : 'Sueles estresarte varias veces a la semana y el nivel aumenta cuando hay exámenes o complicaciones en la oficina.',
                  'return' : '¡Cuidado con el estrés! Caminar por un periodo de al menos 10 minutos un par de veces al día te ayudará a disminuir tus niveles de estrés. Reducir tu consumo de cafeína también te ayudará a controlarlo. Verifica que estás cumpliendo con tus horas de sueño necesarias.'
                },
                {
                  'letter' : 'D',
                  'copy' : 'Te estresas ante cualquier situación sin pensarlo, varias veces al día.',
                  'return' : '¡Cuidado con el estrés! Caminar por un periodo de al menos 10 minutos un par de veces al día te ayudará a disminuir tus niveles de estrés. Reducir tu consumo de cafeína también te ayudará a controlarlo. Verifica que estás cumpliendo con tus horas de sueño necesarias.'
                }
              ]
            },
            {
              'id' : 7,
              'question' : '¿Cómo calificarías tus niveles de ingesta de alcohol?',
              'options' : [
                {
                  'letter' : 'A',
                  'copy' : 'No consumo alcohol.',
                  'return' : false
                },
                {
                  'letter' : 'B',
                  'copy' : 'Los fines de semana.',
                  'return' : 'Debes considerar seriamente bajar tus niveles de ingesta de alcohol y alimentos con altos contenidos de azúcares. Datos de la de la Biblioteca Nacional de Medicina de los Estados Unidos indican que el consumo del alcohol, en exceso, provoca una descompensación en la llamada bomba sodio-potasio del cuerpo, lo que agota las reservas de vitaminas y proteínas; esto es, muchas vitaminas y nutrientes no llegan a tu cabello como deberían y por ende se debilita y se cae.'
                },
                {
                  'letter' : 'C',
                  'copy' : '3 o 4 días por semana.',
                  'return' : 'Debes considerar seriamente bajar tus niveles de ingesta de alcohol y alimentos con altos contenidos de azúcares. Datos de la de la Biblioteca Nacional de Medicina de los Estados Unidos indican que el consumo del alcohol, en exceso, provoca una descompensación en la llamada bomba sodio-potasio del cuerpo, lo que agota las reservas de vitaminas y proteínas; esto es, muchas vitaminas y nutrientes no llegan a tu cabello como deberían y por ende se debilita y se cae. '
                },
                {
                  'letter' : 'D',
                  'copy' : 'Más de 4 veces por semana.',
                  'return' : 'Debes considerar seriamente bajar tus niveles de ingesta de alcohol y alimentos con altos contenidos de azúcares. Datos de la de la Biblioteca Nacional de Medicina de los Estados Unidos indican que el consumo del alcohol, en exceso, provoca una descompensación en la llamada bomba sodio-potasio del cuerpo, lo que agota las reservas de vitaminas y proteínas; esto es, muchas vitaminas y nutrientes no llegan a tu cabello como deberían y por ende se debilita y se cae. '
                }
              ]
            },
            {
              'id' : 8,
              'question' : '¿Cómo calificarías tus niveles de tabaco?',
              'options' : [
                {
                  'letter' : 'A',
                  'copy' : 'No fumo.',
                  'return' : false
                },
                {
                  'letter' : 'B',
                  'copy' : 'Una cajetilla me dura más de una semana.',
                  'return' : 'Trata de abandonar el hábito de fumar o reducir el número de cigarrillos, al menos por un tiempo, en lo que te concentras en fortalecer tu cabello. De acuerdo con la Academia América de Dermatología, los químicos que entran a tu cuerpo con cada bocanada de tabaco afectan la microcirculación del cuero cabelludo; la nicotina suele impedir que los nutrientes lleguen al cabello, lo que a su vez provoca resequedad extrema que finalmente favorece la caída.'
                },
                {
                  'letter' : 'C',
                  'copy' : 'Una cajetilla me dura menos de una semana.',
                  'return' : 'Trata de abandonar el hábito de fumar o reducir el número de cigarrillos, al menos por un tiempo, en lo que te concentras en fortalecer tu cabello. De acuerdo con la Academia América de Dermatología, los químicos que entran a tu cuerpo con cada bocanada de tabaco afectan la microcirculación del cuero cabelludo; la nicotina suele impedir que los nutrientes lleguen al cabello, lo que a su vez provoca resequedad extrema que finalmente favorece la caída.'
                },
                {
                  'letter' : 'D',
                  'copy' : 'Más de una cajetilla a la semana.',
                  'return' : 'Trata de abandonar el hábito de fumar o reducir el número de cigarrillos, al menos por un tiempo, en lo que te concentras en fortalecer tu cabello. De acuerdo con la Academia América de Dermatología, los químicos que entran a tu cuerpo con cada bocanada de tabaco afectan la microcirculación del cuero cabelludo; la nicotina suele impedir que los nutrientes lleguen al cabello, lo que a su vez provoca resequedad extrema que finalmente favorece la caída.'
                }
              ]
            },
            {
              'id' : 9,
              'question' : '¿Qué prioridad quisieras solucionar? ',
              'options' : [
                {
                  'letter' : 'A',
                  'copy' : 'Mucho antes de padecer una fuerte caída de cabello, te gustaría prevenirlo. Estás más preocupado por darle un sano volumen pero, sobretodo, moldearlo con facilidad y que el peinado te dure a lo largo del día.',
                  'return' : 'Como todavía no tienes un indicio fuerte de pérdida de cabello, lo más recomendado para ti es utilizar cualquier producto Folicuré® Original que surge efecto desde la raíz, y con la que fortalecerás tu cabello. Además, vigorizarás el volumen y brillo natural de tu cabello, dándole un aspecto extremadamente sano; estarás previniendo una posible tendencia de caída de cabello si tienes antecedentes.',
                  'product' : 'Original',
                  'class' : 'original'
                },
                {
                  'letter' : 'B',
                  'copy' : 'Tienes miedo de que tu cabello delgado tenga que ver algo con la caída del cabello; buscas una forma de fortalecer tu cabello.',
                  'return' : 'Lo más probable, entre otros factores, es que tengas un cabello delgado y fino y éste tiende a ser quebradizo; de no tratarlo adecuadamente, puede ser un factor que propicie la caída del cabello ligeramente más rápido de lo normal. Muchas de las personas con este tipo de cabello tienden a perderlo con mayor facilidad. Por eso, es recomendable que empieces a utilizar cualquier producto de Folicuré® Hidratante, así podrás mantener tu frágil cabello en buen estado. Con los ingredientes exclusivos de Folicuré® estarás previniendo o incluso revirtiendo los efectos de la caída del cabello.',
                  'product' : 'Hidratante',
                  'class' : 'hidratante'
                },
                {
                  'letter' : 'C',
                  'copy' : 'Estás preocupado porque, además de la caída del cabello, crees que puedas estar padeciendo de algún problema de caspa.',
                  'return' : 'Ciertos aspectos de tu estilo de vida están ocasionándote problemas de caspa y, aunque creas que por el momento esa no es una prioridad, algunos dermatólogos sugieren que también la caspa puede ser un factor que fomente la caída del cabello. Cualquier producto Folicuré® Control de Caspa te ayudará a solucionar los problemas con todo y sus molestos síntomas; al mismo tiempo, estarás nutriendo a tu cabello con los ingredientes  exclusivos de Folicuré®, con los que podrás prevenir la caída a tiempo.',
                  'product' : 'Control Caspa',
                  'class' : 'control'
                },
                {
                  'letter' : 'D',
                  'copy' : 'Definitivamente, sientes que estás a contra reloj en la caída del cabello para no quedarte calvo.',
                  'return' : 'Quizás te encuentres en un punto de caída del cabello progresiva, la línea Extra, en la que cada integrante además de contar con los nutrientes exclusivos de Folicuré® como los Folisacáridos y el Pantenol, está adicionado con Fintantriol y Queratina que dejan tu cabello manejable y sedoso. Cabello fuerte y brillante.',
                  'product' : 'Extra',
                  'class' : 'extra'
                }
              ]
            }
          ]
        },
        {
          'copy' : 'Tus respuestas arrojaron los siguientes resultados'
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
