<?php get_header(); ?>


<!-- Main -->
<main class="ia-Content ia-Content--single">
  <header class="ia-ContentHeader">
    <h1 class="ia-ContentHeader__title">Caída del cabello</h1>
    <a href="<?php echo get_permalink( 7 ); ?>" class="ia-Single__home">
      <i class="fa fa-th-large" aria-hidden="true"></i>
    </a>
  </header>

  <div class="ia-Single">

    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

      <header class="ia-Single__header">
        <h1 class="ia-Single__title">
          <?php the_title(); ?>
        </h1>
      </header>

      <div class="ia-Single__content">

        <h2><?php the_excerpt(); ?></h2>

        <?php the_content(); ?>

      </div>

      <footer class="ia-Single__footer">
        <a href="" class="ia-Single__share" data-url="<?php the_permalink(); ?>">
          <img src="<?php echo get_template_directory_uri(); ?>/images/icon-share.svg" class="ia-Single__share__icon" alt="">
        </a>
      </footer>

    <?php endwhile; else: ?>

      <p>No hay posts</p>

    <?php endif; ?>

    <!-- Controls -->

    <?php
      // Controls logic

      // Next ctrl
      $next_ctrl = '';

      if ( !(get_next_post_link()) ) {
        $next_ctrl = 'disabled';
      }

      // Prev ctrl
      $prev_ctrl = '';

      if ( !(get_previous_post_link()) ) {
        $prev_ctrl = 'disabled';
      }

    ?>

    <div class="ia-Single__ctrl ia-Single__ctrl--prev <?php echo $prev_ctrl; ?>">

      <?php if ( !(get_previous_post_link()) ): ?>

        <a href="#" rel="prev">
          <i class="fa fa-angle-left" aria-hidden="true"></i>
        </a>

      <?php else: ?>

        <?php previous_post_link('%link', '<i class="fa fa-angle-left" aria-hidden="true"></i>'); ?>

      <?php endif; ?>

      <div class="ia-Single__ctrl__title">
        <h1>
          <?php previous_post_link('%link', '%title'); ?>
        </h1>
      </div>
    </div>
    <div class="ia-Single__ctrl ia-Single__ctrl--next <?php echo $next_ctrl; ?>">

      <?php if ( !(get_next_post_link()) ): ?>

        <a href="#" rel="next">
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </a>

      <?php else: ?>

        <?php next_post_link('%link', '<i class="fa fa-angle-right" aria-hidden="true"></i>'); ?>

      <?php endif; ?>

      <div class="ia-Single__ctrl__title">
        <h1>
          <?php next_post_link('%link', '%title'); ?>
        </h1>
      </div>
    </div>
    <!-- // Controls -->

  </div>
</main>
<!-- // Main -->

<!-- Controls Mobile -->
<div class="ia-Single__ctrl-m">

  <?php if ( !(get_previous_post_link()) ): ?>

    <a href="#" class="disabled">
      <i class="fa fa-angle-left" aria-hidden="true"></i>
    </a>

  <?php else: ?>

    <?php previous_post_link('%link', '<i class="fa fa-angle-left" aria-hidden="true"></i>'); ?>

  <?php endif; ?>

  <a href="blog.html" class="ia-Single__ctrl-m__item">
    <i class="fa fa-th-large" aria-hidden="true"></i>
  </a>

  <?php if ( !(get_next_post_link()) ): ?>

    <a href="#" class="disabled">
      <i class="fa fa-angle-right" aria-hidden="true"></i>
    </a>

  <?php else: ?>

    <?php next_post_link('%link', '<i class="fa fa-angle-right" aria-hidden="true"></i>'); ?>

  <?php endif; ?>

</div>
<!-- // Controls Mobile -->

<?php get_footer(); ?>
