<?php

/* Template Name: Familias */

?>

<?php get_header(); ?>

<ul>
  <?php $args = array(
    'taxonomy' => 'familias',
    'hide_empty' => false
  ); ?>



  <?php $tax_menu_items = get_categories( $args );
    foreach ( $tax_menu_items as $tax_menu_item ):?>
      <li>
      	<a href="<?php echo get_term_link($tax_menu_item,$tax_menu_item->taxonomy); ?>">
      		<?php echo $tax_menu_item->name; ?>
          <?php $category = get_term(1,'familias') ?>

          <?php echo $category->name; ?>
      	</a>
      </li>
    <?php endforeach; ?>
</ul>




<p>
  <?php the_field('background', 'familias_3'); ?>
</p>


<?php get_footer(); ?>
