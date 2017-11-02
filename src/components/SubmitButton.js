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
    fontFamily: " 'soleil', sans-serif ",
    textTransform: 'uppercase',
    letterSpacing: '0.02em',
      
    ' span': {
        display: 'block',
        position: 'relative',
        padding: '15px 25px',
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
    
    ' &:focus': {
        outline: 'none',
    },

    '@media(min-width: 700px)': {
       
        ' &:hover span': {
            transform: 'translate(-2px, -2px)',
        },
          
        ' &:active span': {
            transition: 'transform .05s ease',
            transform: 'translate(0, 0)',
        },
    },
    
    '@media(max-width: 530px)': {
        bottom: '58px',
        right: 0,
        width: '100%',

        ' span': {
            borderBottom: '0',
            padding: '16px 25px',
        },

        ' &::after': {
            content: `none`, 
        },
    },


})

export default SubmitButton;

