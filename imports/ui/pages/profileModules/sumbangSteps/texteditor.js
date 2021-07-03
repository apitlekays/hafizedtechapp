import React from 'react';
import ReactQuill, {Quill} from 'react-quill';
import ImageCompress from 'quill-image-compress';
import MagicUrl from 'quill-magic-url';
import BlotFormatter from "quill-blot-formatter";
import 'react-quill/dist/quill.snow.css';

//registering image compression module
Quill.register('modules/imageCompress', ImageCompress);

//registering magic url module
Quill.register('modules/magicUrl', MagicUrl);

//registering BlotFormatter
Quill.register('modules/blotFormatter', BlotFormatter);

const modules = {
    toolbar: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    
        [
            { list: 'ordered'},
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
        ],

        ['link', 'image', 'code'],
    
        ['clean'],
    ],
    clipboard: {
        matchVisual: false,
    },
    imageCompress: {
        quality: 0.7, // default
        maxWidth: 1000, // default
        maxHeight: 1000, // default
        imageType: 'image/jpeg', // default
    },
    magicUrl: true,
    blotFormatter: {}
};

const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'code',
    'image',
];

const TextEditor = ({ value, onChange, placeholder }) => {
    return (
        <>
            <ReactQuill
                theme="snow"
                value={value || ''}
                modules={modules}
                formats={formats}
                onChange={onChange}
                placeholder={placeholder}
            />
        </>
    )
}
export default TextEditor;