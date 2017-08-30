('use strict');

import React from 'react';
import glamorous from 'glamorous';

const MessageInput = glamorous.textarea({
    position: 'absolute',
    background: '#fff',
    width: '100vw',
    height: '100vh',
    top: 0,
    left: 0,
    padding: '20px',
    border: 0,
    fontSize: 20,
    boxSizing: 'border-box',
    resize: 'none',
    boxShadow: 'inset 0 0 15px rgba(0,0,0, 0.15)',
    transition: 'box-shadow 300ms',
    ':focus': { 
        outline: 0,
        boxShadow: 'inset 0 0 30px rgba(0,0,0, 0.15)', 
    }
})

export default MessageInput;

