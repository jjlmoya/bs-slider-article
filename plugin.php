<?php
/**
 * Plugin Name: Slider Article [BonSeo Block]
 * Plugin URI: https://www.bonseo.es/wordpress-gutenberg-blocks/slider-article
 * Description: Un bloque Gutenberg que muestra un slider con los últimos artículos
 * Author: jjlmoya
 * Author URI: https://www.bonseo.es/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 * @package BS
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
	exit;
}

require_once plugin_dir_path(__FILE__) . 'src/init.php';
