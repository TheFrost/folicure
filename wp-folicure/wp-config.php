<?php
/**
 * Configuración básica de WordPress.
 *
 * Este archivo contiene las siguientes configuraciones: ajustes de MySQL, prefijo de tablas,
 * claves secretas, idioma de WordPress y ABSPATH. Para obtener más información,
 * visita la página del Codex{@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} . Los ajustes de MySQL te los proporcionará tu proveedor de alojamiento web.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** Ajustes de MySQL. Solicita estos datos a tu proveedor de alojamiento web. ** //
/** El nombre de tu base de datos de WordPress */
define('DB_NAME', 'folicure');

/** Tu nombre de usuario de MySQL */
define('DB_USER', 'root');

/** Tu contraseña de MySQL */
define('DB_PASSWORD', '');

/** Host de MySQL (es muy probable que no necesites cambiarlo) */
define('DB_HOST', 'localhost');

/** Codificación de caracteres para la base de datos. */
define('DB_CHARSET', 'utf8mb4');

/** Cotejamiento de la base de datos. No lo modifiques si tienes dudas. */
define('DB_COLLATE', '');

/**#@+
 * Claves únicas de autentificación.
 *
 * Define cada clave secreta con una frase aleatoria distinta.
 * Puedes generarlas usando el {@link https://api.wordpress.org/secret-key/1.1/salt/ servicio de claves secretas de WordPress}
 * Puedes cambiar las claves en cualquier momento para invalidar todas las cookies existentes. Esto forzará a todos los usuarios a volver a hacer login.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', 'q~A3r}rug2gt.?Ownjw}Bv-`q+]9w|JBsP)K1[cGcR)sG,5v,-k~CAKVumm+(g!R');
define('SECURE_AUTH_KEY', '?x683C*gTXhzd=`T<cz8?6!.}AnF&ccM*J(u)0tZ]z yo5=8n^rnwU3xz0f2yJBg');
define('LOGGED_IN_KEY', '~->s|`JY)N 2[ZTndDcFUc{CsJ]yTA,(n$%.<sfTV*wh;Z+FD,m|;<X|<v@!l1:!');
define('NONCE_KEY', '<n@~`2t:2apO+#$~oj@Qx` s+?z*%w`3eg~3`P*iO%<ErTuORR}M xf+b_b7wtG4');
define('AUTH_SALT', 's8nSwaZ8aB~U~c[fc3_AtQ+=3;za:45;P.wOo8hT 7_]/>o_X7U$EZLV9zRS4kzL');
define('SECURE_AUTH_SALT', 'FC.3tI=@`*HF:w6Gq=NtuaTf5C;tFg=y[:]XDTe#+RQ)95&hH3K=xG:cLY%)^MwA');
define('LOGGED_IN_SALT', '+e3ef;BC=vP5P.P^v*X)`8kw;3iWMbRoZ)]&HLc3h8o[_uf-cNdEC@#n@[svT=-[');
define('NONCE_SALT', 'Y`E}%moNjCSwuu*](>vTV+tiC!x~DDst@am663Fh)`XsNwaUiJ)1JKRxwqrW30rq');

/**#@-*/

/**
 * Prefijo de la base de datos de WordPress.
 *
 * Cambia el prefijo si deseas instalar multiples blogs en una sola base de datos.
 * Emplea solo números, letras y guión bajo.
 */
$table_prefix  = 'ia_';


/**
 * Para desarrolladores: modo debug de WordPress.
 *
 * Cambia esto a true para activar la muestra de avisos durante el desarrollo.
 * Se recomienda encarecidamente a los desarrolladores de temas y plugins que usen WP_DEBUG
 * en sus entornos de desarrollo.
 */
define('WP_DEBUG', false);

/* ¡Eso es todo, deja de editar! Feliz blogging */

/** WordPress absolute path to the Wordpress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Allow plugins localhost */
define('FS_METHOD', 'direct');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
