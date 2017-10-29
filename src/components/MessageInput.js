import React from 'react';
import glamorous from 'glamorous';

const MessageInput = glamorous.textarea({
    position: 'absolute',
    background: '#fff',
    width: '100vw',
    height: '100vh',
    top: 0,
    left: 0,
    padding: '60px 40px',
    border: '1px solid #f9f9f9',
    fontSize: '4vw',
    boxSizing: 'border-box',
    resize: 'none',
    boxShadow: 'inset 0 0 15px rgba(0,0,0, 0.15)',
    transition: 'box-shadow 300ms, border 200ms',
    ':focus': { 
        outline: 0,
        border: '1px solid blue',
        boxShadow: 'inset 0 0 40px rgba(0,0,0, 0.15)', 
    },
    ':focus + label': { 
        fontSize: '14px',
        top: '10px',
        color: '#929292',
        lineHeight: '1.6',
    }
})

export default MessageInput;

