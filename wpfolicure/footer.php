<!-- Experts Form -->
<div class="ia-Experts" id="experts">
  <header class="ia-Experts__header" id="trigger-experts">
    <span class="ia-Experts__cta">Pregúntale a los expertos</span>
  </header>
  <div class="ia-Experts__body">
    <div class="ia-ExpertsAvatar">
      <img src="<?php get_template_directory_uri(); ?>/images/avatar-expert.png" alt="" class="u-ImgResponsive">
    </div>
    <form action="" method="post" class="ia-ExpertsForm" id="experts-form">
      <div class="ia-ExpertsForm__inputs">
        <header class="ia-ExpertsForm__header">
          <p class="ia-ExpertsForm__copy">Escribe tus datos para ponernos en contacto contigo y poder resolver tus preguntas:</p>
        </header>

        <div class="ia-ExpertsForm__group ia-ExpertsForm__group--name">
          <input type="text" placeholder="Tu nombre" name="name" required class="ia-ExpertsForm__input">
        </div>

        <div class="ia-ExpertsForm__group ia-ExpertsForm__group--email">
          <input type="text" placeholder="Tu correo electrónico" name="email" required class="ia-ExpertsForm__input">
        </div>

        <div class="ia-ExpertsForm__group ia-ExpertsForm__group--question">
          <input type="text" placeholder="Escribe tu pregunta aquí... " name="question" required class="ia-ExpertsForm__input">
          <label for="" class="ia-ExpertsForm__note">* Tiempo promedio de respuesta: 48 horas.</label>
        </div>

        <div class="ia-ExpertsForm__group ia-ExpertsForm__group--agree">
          <input type="checkbox" name="agree" required class="ia-ExpertsForm__input">

          <span class="ia-ExpertsForm__input__copy">Acepto la <a href="#">Política de Privacidad</a>.</span>

        </div>
      </div>
      <div class="ia-ExpertsForm__submit">
        <button type="submit" class="ia-ExpertsForm__submit__button">></button>
      </div>
    </form>
  </div>
</div>
<!-- // Experts Form -->

<!-- Overlay -->
<div class="ia-Overlay" id="content-overlay"></div>
<!-- // Overlay -->

<!-- Footer -->
<!-- // Footer -->

<?php wp_footer(); ?>

</body>
</html>
