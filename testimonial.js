// testimonial-block/index.js
import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/block-editor';

registerBlockType('testimonial-block/testimonial', {
    title: 'Testimonial',
    icon: 'format-quote',
    category: 'common',
    attributes: {
        quote: {
            type: 'string',
            source: 'html',
            selector: 'blockquote',
        },
    },
    edit: ({ attributes, setAttributes }) => {
        const { quote } = attributes;

        const onChangeQuote = (newQuote) => {
            setAttributes({ quote: newQuote });
        };

        return (
            <div>
                <RichText
                    tagName="blockquote"
                    placeholder="Enter testimonial..."
                    value={quote}
                    onChange={onChangeQuote}
                />
            </div>
        );
    },
    save: ({ attributes }) => {
        const { quote } = attributes;
        return <blockquote>{quote}</blockquote>;
    },
});
