import React from 'react';
import glamorous from 'glamorous';

const SubmitButton = glamorous.button ({
    position: 'absolute',
    bottom: 40,
    right: 40,
    border: 0,
    fontWeight: '700',
    background: 'none',
    border: 0,
    padding: 0,
      
    ' span': {
        display: 'block',
        position: 'relative',
        padding: '15px 26px',
        background: '#fff',
        color: '#191919',
        border: '4px solid #191919',
        transition: 'transform .2s ease',
        zIndex: 1,
        willChange: 'transform',
    },
    
    ' &::after': {
        content: `''`, 
        position: 'absolute',
        top: '4px',
        left: '4px',
        width: 'calc(100% - 5px)',
        height: 'calc(100% - 5px)',
        background: '#191919',
        border: '4px solid #191919',
    },
      
    ' &:hover span': {
        transform: 'translate(-2px, -2px)',
    },
      
    ' &:active span': {
        transition: 'transform .05s ease',
        transform: 'translate(0, 0)',
    },
    
    ' &:focus': {
        outline: 'none',
    }


})

export default SubmitButton;

