<?php

  // add the main styles
  function theme_styles() {
    wp_enqueue_style( 'googlefonts', 'https://fonts.googleapis.com/css?family=Open+Sans:300italic,300' );
    wp_enqueue_style( 'FontAwesome', get_template_directory_uri() . '/css/font-awesome.min.css' );
    wp_enqueue_style( 'owl-carousel', get_template_directory_uri() . '/css/owl.carousel.min.css' );
    wp_enqueue_style( 'owl-carousel-theme', get_template_directory_uri() . '/css/owl.theme.default.min.css' );
    wp_enqueue_style( 'main', get_template_directory_uri() . '/style.css' );
  }
  add_action( 'wp_enqueue_scripts', 'theme_styles' );


  // add the javascript
  function theme_js() {
    // libs
    wp_enqueue_script( 'jquery-validate', get_template_directory_uri() . '/libs/jquery.validate.min.js', array('jquery'), '', true );
    wp_enqueue_script( 'owl-carousel', get_template_directory_uri() . '/libs/owl.carousel.min.js', array('jquery'), '', true );

    // theme js
    wp_enqueue_script( 'module-utils', get_template_directory_uri() . '/js/utils.js', array('jquery'), '', true );
    wp_enqueue_script( 'module-menu', get_template_directory_uri() . '/js/menu.js', array('jquery'), '', true );
    wp_enqueue_script( 'module-experts', get_template_directory_uri() . '/js/experts.js', array('jquery'), '', true );
    wp_enqueue_script( 'module-search', get_template_directory_uri() . '/js/search.js', array('jquery'), '', true );
    wp_enqueue_script( 'module-product', get_template_directory_uri() . '/js/product.js', array('jquery'), '', true );
    wp_enqueue_script( 'module-diagnostic-service', get_template_directory_uri() . '/js/diagnostic.service.js', array('jquery'), '', true );
    wp_enqueue_script( 'module-diagnostic', get_template_directory_uri() . '/js/diagnostic.js', array('jquery'), '', true );
    wp_enqueue_script( 'module-share', get_template_directory_uri() . '/js/share.js', array('jquery'), '', true );
    wp_enqueue_script( 'app', get_template_directory_uri() . '/js/app.js', array('jquery'), '', true );
  }
  add_action( 'wp_enqueue_scripts', 'theme_js' );

?>
