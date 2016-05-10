<?php get_header(); ?>

<!-- Main -->
<main class="ia-Content ia-Content--frontpage">
  <div class="ia-ContentBody">
    <aside class="ia-Column">

      <article class="ia-Brick ia-Brick--tall">
        <a href="product-extra.html" class="ia-BrickLink ia-BrickLink--extra">
          <span class="ia-BrickFig"></span>
          <img src="<?php echo get_template_directory_uri(); ?>/images/extra-shampoo.png" class="ia-BrickBottle" alt="">
          <span class="ia-BrickCaption ia-BrickCaption--bottom">
            <h1 class="ia-BrickCaption__title">Folicuré<span class="ia-Reg">&reg;</span> Extra</h1>
            <hr class="ia-BrickCaption__hr">
            <!-- <p class="ia-BrickCaption__txt">Quisque semper felis et tellus hendrerit volutpat.</p> -->
          </span>
        </a>
      </article>

      <article class="ia-Brick ia-Brick--normal">
        <a href="promos.html" class="ia-BrickLink ia-BrickLink--something">
          <span class="ia-BrickFig"></span>
          <span class="ia-BrickCaption ia-BrickCaption--bottom">
            <h1 class="ia-BrickCaption__title">Promociones</h1>
            <hr class="ia-BrickCaption__hr">
            <!-- <p class="ia-BrickCaption__txt">Quisque semper felis et tellus hendrerit volutpat.</p> -->
          </span>
        </a>
      </article>

    </aside>
    <aside class="ia-Column">

      <article class="ia-Brick ia-Brick--normal">
        <a href="<?php echo get_permalink( 13 ); ?>" class="ia-BrickLink ia-BrickLink--test">
          <span class="ia-BrickFig"></span>
          <span class="ia-BrickCaption ia-BrickCaption--top">
            <h1 class="ia-BrickCaption__title">Diagnóstico Folicuré<span class="ia-Reg">&reg;</span></h1>
            <hr class="ia-BrickCaption__hr">
            <!-- <p class="ia-BrickCaption__txt">Quisque semper felis et tellus hendrerit volutpat.</p> -->
          </span>
        </a>
      </article>

      <article class="ia-Brick ia-Brick--tall">
        <a href="blog.html" class="ia-BrickLink ia-BrickColumn ia-BrickLink--article">
          <span class="ia-BrickFig"></span>
          <span class="ia-BrickCaption ia-BrickCaption--bottom">
            <h1 class="ia-BrickCaption__title">Caída del cabello</h1>
          </span>
        </a>
        <a href="product-control.html" class="ia-BrickLink ia-BrickColumn ia-BrickLink--control">
          <span class="ia-BrickFig"></span>
          <img src="<?php echo get_template_directory_uri(); ?>/images/control-shampoo.png" class="ia-BrickBottle" alt="">
          <span class="ia-BrickCaption ia-BrickCaption--bottom">
            <h1 class="ia-BrickCaption__title">Folicuré<span class="ia-Reg">&reg;</span> Control Caspa</h1>
          </span>
        </a>
      </article>

    </aside>
  </div>
</main>
<!-- // Main -->

<?php get_footer(); ?>
