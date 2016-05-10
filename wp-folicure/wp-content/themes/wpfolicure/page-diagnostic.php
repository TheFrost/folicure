<?php

/* Template Name: Diagnostic */

?>

<?php get_header(); ?>

<!-- Main -->
<main class="ia-Content ia-Content--diagnostic js-init-active">
  <header class="ia-ContentHeader">
    <h1 class="ia-ContentHeader__title">Diagnóstico</h1>
    <span class="ia-ContentHeader__txt">Bienvenido. Responde las siguientes preguntas haciendo clic sobre la opción correcta y conoce más sobre el tema</span>

    <!-- Diagnostic Header -->
    <div class="ia-Diagnostic__header" id="diagnostic-header">
      <p class="ia-Diagnostic__qst"></p>
      <div class="ia-Diagnostic__progress">
        <span class="ia-Diagnostic__count">1/11</span>
        <div class="ia-Diagnostic__bar">
          <div class="ia-Diagnostic__padding"></div>
        </div>
      </div>
    </div>
    <!-- // Diagnostic Header -->

  </header>


  <div class="ia-Diagnostic__body" id="diagnostic-body">

    <!-- Diagnostic init options -->
    <div class="ia-Diagnostic__view ia-Diagnostic__view--init js-state-active" id="diagnostic-init">
      <div class="ia-Diagnostic__options ia-Diagnostic__options--init">
        <figure class="ia-Diagnostic__option" data-option="H">
          <img src="<?php echo get_template_directory_uri (); ?>/images/diagnostic-option-man.jpg" alt="" class="ia-Diagnostic__option__img">
        </figure>
        <figure class="ia-Diagnostic__option" data-option="M">
          <img src="<?php echo get_template_directory_uri (); ?>/images/diagnostic-option-woman.jpg" alt="" class="ia-Diagnostic__option__img">
        </figure>
      </div>
      <a href="#" class="ia-Diagnostic__start js-disabled">Comenzar</a>
    </div>
    <!-- // Diagnostic init options -->

    <!-- Diagnostic General -->
    <div class="ia-Diagnostic__view ia-Diagnostic__view--general" id="diagnostic-general">
      <div class="ia-Diagnostic__options">
        <div class="ia-Diagnostic__option">
          <div class="ia-Diagnostic__option__inner">
            <span class="ia-Diagnostic__option__letter" data-option="A">A .</span>
            <p class="ia-Diagnostic__option__copy">Agua muy caliente.</p>
          </div>
        </div>
        <div class="ia-Diagnostic__option">
          <div class="ia-Diagnostic__option__inner">
            <span class="ia-Diagnostic__option__letter" data-option="A">B .</span>
            <p class="ia-Diagnostic__option__copy">Excesiva sudoración. Estrés</p>
          </div>
        </div>
        <div class="ia-Diagnostic__option">
          <div class="ia-Diagnostic__option__inner">
            <span class="ia-Diagnostic__option__letter" data-option="A">C .</span>
            <p class="ia-Diagnostic__option__copy">Cualquier tipo de geles moldeadores del cabello, lacas o procesos químicos, tinte para el cabello y/o calor.</p>
          </div>
        </div>
      </div>
      <!-- Diagnostic controls -->
      <div class="ia-Diagnostic__ctrls">
        <div class="ia-Diagnostic__ctrls__nav">
          <a href="#" class="ia-Diagnostic__ctrl ia-Diagnostic__ctrl--prev js-disabled">
            <i class="fa fa-angle-left" aria-hidden="true"></i>
          </a>
          <a href="#" class="ia-Diagnostic__ctrl ia-Diagnostic__ctrl--next">
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </a>
        </div>
        <div class="ia-Diagnostic__ctrls__last js-hide">
          <a href="#" class="ia-Diagnostic__ctrl ia-Diagnostic__ctrl--prev-finish">
            <i class="fa fa-angle-left" aria-hidden="true"></i>
            <span>anterior</span>
          </a>
          <a href="#" class="ia-Diagnostic__ctrl ia-Diagnostic__ctrl--finish">
            <span>resultados</span>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <!-- // Diagnostic controls -->
      <a href="#" class="ia-Diagnostic__reset">cambiar de género</a>
    </div>
    <!-- // Diagnostic General -->

    <!-- Diagnostic Results -->
    <div class="ia-Diagnostic__view ia-Diagnostic__view--result" id="diagnostic-result">
      <div class="ia-Diagnostic__result__column">
        <figure class="ia-Diagnostic__result__bottle">
          <img src="<?php echo get_template_directory_uri(); ?>/images/" class="u-ImgResponsive" alt="">
        </figure>
        <div class="ia-Diagnostic__result__info">
          <h1 class="ia-Product__category">Hidratante</h1>
          <p class="ia-Diagnostic__result__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, cumque architecto amet. Inventore omnis voluptates unde quibusdam magnam consectetur officia hic animi voluptatum, expedita eaque saepe delectus culpa error magni!</p>
          <a href="" class="ia-Diagnostic__result__link">Conoce más</a>
          <a href="" class="ia-Diagnostic__result__reset">Repetir prueba</a>
        </div>
      </div>
      <div class="ia-Diagnostic__result__column">
        <div class="ia-Diagnostic__result__summary">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium provident, hic doloremque autem, dolores aliquam officia libero eaque dolorem tempore. Repellendus nobis nostrum perferendis fugiat quis facilis quaerat repellat, facere.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium provident, hic doloremque autem, dolores aliquam officia libero eaque dolorem tempore. Repellendus nobis nostrum perferendis fugiat quis facilis quaerat repellat, facere.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium provident, hic doloremque autem, dolores aliquam officia libero eaque dolorem tempore. Repellendus nobis nostrum perferendis fugiat quis facilis quaerat repellat, facere.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium provident, hic doloremque autem, dolores aliquam officia libero eaque dolorem tempore. Repellendus nobis nostrum perferendis fugiat quis facilis quaerat repellat, facere.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium provident, hic doloremque autem, dolores aliquam officia libero eaque dolorem tempore. Repellendus nobis nostrum perferendis fugiat quis facilis quaerat repellat, facere.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium provident, hic doloremque autem, dolores aliquam officia libero eaque dolorem tempore. Repellendus nobis nostrum perferendis fugiat quis facilis quaerat repellat, facere.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium provident, hic doloremque autem, dolores aliquam officia libero eaque dolorem tempore. Repellendus nobis nostrum perferendis fugiat quis facilis quaerat repellat, facere.</p>
        </div>
      </div>
    </div>
    <!-- // Diagnostic Results -->

  </div>


</main>
<!-- // Main -->


<?php get_footer(); ?>
