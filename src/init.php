<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package BS
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
	exit;
}

$block = 'block-bs-slider-article';

// Hook server side rendering into render callback
register_block_type('bonseo/' . $block,
	array(
		'attributes' => array(
			'title' => array(
				'type' => 'string',
			),
			'backgroundImage' => array(
				'type' => 'string',
			),
			'type' => array(
				'type' => 'string',
			),
			'className' => array(
				'type' => 'string',
			),
		),
		'render_callback' => 'render_bs_slider_article',
	)
);

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function bs_slider_article_editor_assets()
{ // phpcs:ignore
	// Scripts.
	wp_enqueue_script(
		'bs_slider_article-block-js', // Handle.
		plugins_url('/dist/blocks.build.js', dirname(__FILE__)), // Block.build.js: We register the block here. Built with Webpack.
		array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'), // Dependencies, defined above.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: File modification time.
		true // Enqueue the script in the footer.
	);
}

function render_bs_slider_article_post($articles)
{
	$html = '';
	while ($articles->have_posts()) : $articles->the_post();
		$title = get_the_title();
		$url = esc_url(get_the_permalink());
		$html .= '<h3 class="ml-block-articles-minimalist__element a-pad--x-20">
					<a class="a-text a-text--s a-text--underline a-text--center a-text--secondary" href="' . $url . '">' . $title . '</a>
				  </h3>';
		unset($post);
	endwhile;
	return '
	 	<hr class="a-separator a-separator--gradient a-separator--animate l-column--1-2">
		<div class="ml-block-articles-minimalist l-flex l-flex--justify-center a-pad--y-20">
			' . $html . '   
		</div>
	 ';
}

function render_bs_slider_article($attributes)
{
	$class = isset($attributes['className']) ? ' ' . $attributes['className'] : '';
	$image = isset($attributes['backgroundImage']) ? $attributes["backgroundImage"] : '';
	$title = isset($attributes['title']) ? $attributes["title"] : '';
	$type = isset($attributes['type']) ? $attributes["type"] : 'posts';
	$args = array(
		'post_type' => $type,
		'post_status' => 'publish',
		'posts_per_page' => 3
	);
	$articles = new WP_Query($args);
	if (empty($articles)) {
		return '';
	}
	return '
		<section class="og-slider og-slider--articles
		 			   l-flex l-flex--direction-column l-grid-column--full 
		 			    a-bg--image a-bg--image--technology ' . $class . '">
			<h1 class="a-text a-text--xl a-text--secondary a-mar-40 og-slider--articles__text">
				' . $title . '
			</h1>    
			' . render_bs_slider_article_post($articles) . '
		</section>
		<style>
		 .a-bg--image--technology::after {
		 	background-image:url(' . $image . ');
		 }
		</style>
	';
}

add_action('enqueue_block_editor_assets', 'bs_slider_article_editor_assets');
