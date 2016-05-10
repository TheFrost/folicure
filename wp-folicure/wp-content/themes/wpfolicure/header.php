<!DOCTYPE html>
<!--[if lte IE 8 ]><html dir="ltr" lang="es-MX" class="no-js ie ie8 lte8 lte9"><![endif]-->
<!--[if IE 9 ]><html dir="ltr" lang="es-MX" class="no-js ie ie9 lte9"><![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--><html dir="ltr" lang="es-MX" class="no-js"><!--<![endif]-->
<head>
  <meta charset="UTF-8">

  <meta name="viewport" content="initial-scale=1.0, width=device-width, maximum-scale=1.0" />

  <?php if ( is_single() ): // Control Open Graph ?>

    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

      <meta property="og:title" content="<?php the_title(); ?>"/>
      <meta property="og:description" content="<?php echo get_the_excerpt(); ?>"/>
      <meta property="og:type" content="article"/>
      <meta property="og:url" content="<?php the_permalink(); ?>"/>
      <meta property="og:site_name" content="<?php bloginfo( 'name' ); ?>"/>
      <meta property="og:image" content="<?php the_post_thumbnail_url( 'full' ); ?>"/>

    <?php endwhile; endif; ?>

  <?php endif; ?>

  <title>
    <?php
      bloginfo( 'name' );
      wp_title( '-', true, 'left' );
    ?>
  </title>

  <?php wp_head(); ?>

</head>
<body>

  <!-- Search -->
  <div class="ia-Search" id="search">
    <form action="" class="ia-Search__form">
      <input type="text" class="ia-Search__input" name="search" placeholder="Encuentra aquí todo sobre la caída del cabello" id="search-input">
      <button type="button" class="ia-Search__submit" id="search-trigger">
        <i class="fa fa-search"></i>
      </button>
    </form>
  </div>
  <!-- // Search -->

  <!-- Header -->
  <header class="ia-Header" id="main-menu">
    <header class="ia-HeaderHead" id="menu-head">
      <a href="#" class="ia-HeaderAction" id="header-action">
        <span class="ia-HeaderAction__line"></span>
        <span class="ia-HeaderAction__line"></span>
        <span class="ia-HeaderAction__line"></span>
      </a>
      <a href="<?php bloginfo( 'url' ); ?>" class="ia-HeaderLogo">
        <h1 class="ia-HeaderLogo__text">Folicuré</h1>
      </a>
      <a href="#" class="ia-Search__mobile" id="m-search-trigger">
        <i class="fa fa-search"></i>
      </a>
    </header>
    <ul class="ia-HeaderMenu u-ListNoStyle" id="menu-list">
      <li class="ia-HeaderMenuItem">
        <a href="product-grid.html" class="ia-HeaderMenuLink">
          <figure class="ia-HeaderMenuLink__fig ia-HeaderMenuLink__fig--product"></figure>
          <span class="ia-HeaderMenuLink__txt">Productos</span>
          <hr class="ia-HeaderMenuLink__hr">
        </a>
      </li>
      <li class="ia-HeaderMenuItem">
        <a href="<?php echo get_permalink( 13 ); ?>" class="ia-HeaderMenuLink">
          <figure class="ia-HeaderMenuLink__fig ia-HeaderMenuLink__fig--eye"></figure>
          <span class="ia-HeaderMenuLink__txt">Diagnóstico</span>
          <hr class="ia-HeaderMenuLink__hr">
        </a>
      </li>
      <li class="ia-HeaderMenuItem">
        <a href="<?php echo get_permalink( 7 ); ?>" class="ia-HeaderMenuLink">
          <figure class="ia-HeaderMenuLink__fig ia-HeaderMenuLink__fig--hair"></figure>
          <span class="ia-HeaderMenuLink__txt">Caída del cabello</span>
          <hr class="ia-HeaderMenuLink__hr">
        </a>
      </li>
      <li class="ia-HeaderMenuItem">
        <a href="promos.html" class="ia-HeaderMenuLink">
          <figure class="ia-HeaderMenuLink__fig ia-HeaderMenuLink__fig--money"></figure>
          <span class="ia-HeaderMenuLink__txt">Promociones</span>
        </a>
      </li>
    </ul>
    <footer class="ia-HeaderFooter" id="menu-footer">
      <div class="ia-HeaderFooterSocial">
        <a href="https://www.facebook.com/FolicureMexico?fref=ts" target="_blank" class="ia-HeaderFooterSocial__link ia-HeaderFooterSocial__link--facebook"></a>
        <!-- <a href="#" class="ia-HeaderFooterSocial__link ia-HeaderFooterSocial__link--twitter"></a> -->
      </div>
      <figure class="ia-HeaderFooter__logo ia-HeaderFooter__logo--m"></figure>
      <a href="http://www.unileverprivacypolicy.com/spanish/policy.aspx" target="_blank" class="ia-HeaderFooter__policity">Política de privacidad</a>
      <hr class="ia-HeaderFooter__hr">
      <figure class="ia-HeaderFooter__logo"></figure>
      <span class="ia-HeaderFooter__copyright">&copy;2016 Unilever Derechos Reservados</span>
    </footer>
  </header>
  <!-- // Header -->
