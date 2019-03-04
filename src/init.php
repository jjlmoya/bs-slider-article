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
			'className' => array(
				'type' => 'string',
			),
		),
		'render_callback' => 'render_bs_slider_article',
	)
);


/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function bs_slider_article_assets()
{
	wp_enqueue_style(
		'bs_slider_article-style-css',
		plugins_url('dist/blocks.style.build.css', dirname(__FILE__)),
		array('wp-editor')
	);
}

add_action('enqueue_block_assets', 'bs_slider_article_assets');

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

	// Styles.
	wp_enqueue_style(
		'bs_slider_article-block-editor-css', // Handle.
		plugins_url('dist/blocks.editor.build.css', dirname(__FILE__)), // Block editor CSS.
		array('wp-edit-blocks') // Dependency to include the CSS after it.
	// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
	);
}

function render_bs_slider_article_element($post)
{
	$post_id = $post['ID'];

	return '<h3 class="ml-block-articles-minimalist__element a-pad--x-20">
				<a class="a-text a-text--s a-text--underline a-text--center a-text--secondary" href="' . esc_url(get_the_permalink($post_id)) . '">' . esc_html(get_the_title($post_id)) . '</a>
			</h3> ';
}

function render_bs_slider_article_post()
{
	$posts = wp_get_recent_posts([
		'numberposts' => 3,
		'post_status' => 'publish',
	]);
	$html = '';
	if (empty($posts)) {
		return '';
	}

	foreach ($posts as $key => $post) {
		$html .= render_bs_slider_article_element($post);
	}
	return '
	 	<hr class="a-separator a-separator--rainbow a-separator--animate l-column--1-2">
		<div class="ml-block-articles-minimalist l-flex l-flex--justify-center a-pad--y-20">
			' . $html . '   
		</div>
	 ';
}

function render_bs_slider_article($attributes)
{
	$class = isset($attributes['className']) ? ' ' . $attributes['className'] : '';
	$image = isset($attributes['backgroundImage']) ? $attributes["backgroundImage"] : '';
	return '
		<section class="og-slider og-slider--articles l-flex l-flex--direction-column a-bg--image a-bg--image--technology' . $class . '">
			<h1 class="a-text a-text--xl a-text--secondary a-mar-40 og-slider--articles__text">
				' . $attributes['title'] . '
			</h1>    
			' . render_bs_slider_article_post() . '
		</section>
		<style>
		 .a-bg--image--technology::after {
		 	background-image:url(' . $image . ');
		 }
		</style>
	';
}
// Hook: Editor assets.
add_action('enqueue_block_editor_assets', 'bs_slider_article_editor_assets');
