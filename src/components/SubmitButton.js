import React from 'react';
import glamorous from 'glamorous';

const SubmitButton = glamorous.button ({
    position: 'absolute',
    bottom: 20,
    right: 20,
    background: '#000',
    fontSize: '15px',
    border: 'none',
    cursor: 'pointer',
    display: 'inline-block',
    padding: '10px 20px 12px',
    textAlign: 'center',
    transition: '0.25s cubic-bezier(0.17, 0.67, 0.52, 0.97)',
    borderRadius: 4,
    color: '#fff',
    boxShadow: '0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)',
    ':hover': {
        background: '#333',
        transform: 'translateY(-1px)',
        boxShadow: '0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08)'
    },
    ':focus': { outline: 0 },
    ':active': {
        transform: 'translateY(1px)'
    }
})

export default SubmitButton;

