import React from 'react';
import glamorous from 'glamorous';

const MessageInput = glamorous.textarea({
    position: 'absolute',
    background: '#FDC02F',
    width: '100vw',
    height: '100vh',
    top: 0,
    left: 0,
    padding: '220px 40px 40px',
    fontSize: '3vw',
    boxSizing: 'border-box',
    resize: 'none',
    // boxShadow: 'inset 0 0 15px rgba(0,0,0, 0.15)',
    color:  '#fff',
    transition: 'box-shadow 300ms, background 200ms, padding 200ms',
    willChange: 'background, padding',
    ':focus': { 
        outline: 0,
        // border: '1px solid blue',
        // boxShadow: 'inset 0 0 40px rgba(0,0,0, 0.15)', 
        padding: '120px 40px 40px',
        background: '#03f'
    },
    ':focus + label': { 
        fontSize: '20px',
        top: '40px',
        color: '#fff',
        //opacity: '0.6',
    }
})

export default MessageInput;

