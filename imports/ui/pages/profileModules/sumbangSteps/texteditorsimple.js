import React from 'react';
import ReactQuill, {Quill} from 'react-quill';
import MagicUrl from 'quill-magic-url';
import 'react-quill/dist/quill.snow.css';

//registering magic url module
Quill.register('modules/magicUrl', MagicUrl);

const modules = {
    toolbar: [
        [
            { list: 'bullet' },
        ],
        ['link'],
    ],
    clipboard: {
        matchVisual: false,
    },
    magicUrl: true,
};

const formats = [
    'list',
    'bullet',
    'link',
];

const TextEditorSimple = ({ value, onChange, placeholder }) => {
    return (
        <>
            <ReactQuill
                theme="snow"
                value={value || ''}
                modules={modules}
                formats={formats}
                onChange={onChange}
                placeholder={placeholder}
            >
            </ReactQuill>
            <div id='counter'></div>
        </>
    )
}
export default TextEditorSimple;