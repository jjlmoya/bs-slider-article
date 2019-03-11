/**
 * BLOCK: bs-last-articles-zig-zag
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */
const {__} = wp.i18n;
const {registerBlockType} = wp.blocks;
const {TextControl} = wp.components;
const {MediaUpload} = wp.editor;
registerBlockType('bonseo/block-bs-slider-article', {
	title: __('Slider Article'),
	icon: 'slides',
	category: 'bonseo-blocks',
	keywords: [
		__('slider-article'),
		__('BonSeo'),
		__('BonSeo Block'),
	],
	edit: function ({posts, className, attributes, setAttributes}) {
		function onImageSelect(imageObject) {
			setAttributes({
				backgroundImage: imageObject.sizes.full.url
			})
		};

		function drawImageButton(open) {
			var html;
			if (attributes.backgroundImage) {
				html = <img src={attributes.backgroundImage}/>;
			} else {
				html = "Upload";
			}

			return (<button onClick={open}>
				{html}
			</button>)

		}

		return (
			<div>
				<h2> Slider Block</h2>
				<TextControl
					className={`${className}__title`}
					label={__('Encabezado del bloque:')}
					value={attributes.title}
					onChange={title => setAttributes({title})}
				/>
				<MediaUpload
					onSelect={onImageSelect}
					type="image"
					value={attributes.backgroundImage}
					render={({open}) => (
						drawImageButton(open)
					)}
				/>
			</div>
		);
	},
	save: function () {
		return null;
	}
})
;
