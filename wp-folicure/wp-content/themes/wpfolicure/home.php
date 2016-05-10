<?php get_header(); ?>

<?php

  $posts_count_row_1 = 1;
  $posts_count_row_2 = 1;
  $posts_row = 1;
  $post_class = '';

?>

<!-- Main -->
<main class="ia-Content ia-Content--grid ia-Content--blog">
  <header class="ia-ContentHeader">
    <h1 class="ia-ContentHeader__title">Caída del cabello</h1>
    <span class="ia-ContentHeader__txt">Todo lo que debes saber</span>
  </header>

  <div class="ia-ContentBody">
    <aside class="ia-Column">

      <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

        <?php if ( $posts_count_row_1 % 2 ): // Print odd posts ?>

          <?php
            // Define class block
            if ( !($posts_row % 2) ) {

              $post_class = 'normal';

            } else {

              $post_class = 'tall';

            }

            ++$posts_row;
          ?>

          <article class="ia-Brick ia-Brick--<?php echo $post_class; ?>">
            <a href="<?php the_permalink(); ?>" class="ia-BrickLink">
              <span class="ia-BrickFig" style="background-image:url(<?php the_post_thumbnail_url( 'full' ); ?>)"></span>
              <span class="ia-BrickCaption ia-BrickCaption--bottom">
                <p class="ia-BrickCaption__txt">
                  <?php the_title(); ?>
                </p>
              </span>
            </a>
          </article>

        <?php endif; ?>

        <?php ++$posts_count_row_1; ?>

      <?php endwhile; else: ?>

        <p>No hay posts</p>

      <?php endif; ?>

    </aside>
    <aside class="ia-Column">

      <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

        <?php if ( !($posts_count_row_2 % 2) ): // Print even posts ?>

          <?php
            // Define class block
            if ( !($posts_row % 2) ) {

              $post_class = 'tall';

            } else {

              $post_class = 'normal';

            }

            ++$posts_row;
          ?>

          <article class="ia-Brick ia-Brick--<?php echo $post_class; ?>">
            <a href="<?php the_permalink(); ?>" class="ia-BrickLink">
              <span class="ia-BrickFig" style="background-image:url(<?php the_post_thumbnail_url( 'full' ); ?>)"></span>
              <span class="ia-BrickCaption ia-BrickCaption--bottom">
                <p class="ia-BrickCaption__txt">
                  <?php the_title(); ?>
                </p>
              </span>
            </a>
          </article>

        <?php endif; ?>

        <?php ++$posts_count_row_2; ?>

      <?php endwhile; else: ?>

        <p>No hay posts</p>

      <?php endif; ?>

    </aside>
  </div>

  <footer class="ia-Blog__footer">
    <div class="ia-Blog__footer__pages">

      <div class="ia-Blog__footer__ctrl ia-Blog__footer__ctrl--prev">

        <?php if ( get_previous_posts_link() ): ?>

          <?php previous_posts_link ( 'Recientes' ) ?>

        <?php else: ?>

          <a href="" class="disabled">
            Recientes
          </a>

        <?php endif; ?>

      </div>

      <div class="ia-Blog__footer__ctrl ia-Blog__footer__ctrl--next">

        <?php if ( get_next_posts_link() ): ?>

          <?php next_posts_link ( 'Anteriores' ) ?>

        <?php else: ?>

          <a href="" class="disabled">
            Anteriores
          </a>

        <?php endif; ?>

      </div>

    </div>
  </footer>
</main>
<!-- // Main -->

<?php get_footer(); ?>
