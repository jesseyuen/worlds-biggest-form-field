// import React from 'react';
import glamorous from 'glamorous';

const SubmitButton = glamorous.button ({
    position: 'fixed',
    bottom: 30,
    right: 30,
    border: 0,
    fontWeight: '600',
    background: 'none',
    border: 0,
    padding: 0,
    fontFamily: " 'soleil', sans-serif ",
    textTransform: 'uppercase',
    letterSpacing: '0.02em',
    fontSize: '16px',
    fontSize: '1.6rem',
      
    ' span': {
        display: 'block',
        position: 'relative',
        padding: '10px 20px',
        background: '#fff',
        color: '#191919',
        border: '3px solid #191919',
        transition: 'transform .2s ease',
        zIndex: 1,
        willChange: 'transform',
        borderRadius: 3,
    },
    
    ' &::after': {
        content: `''`, 
        position: 'absolute',
        top: '3px',
        left: '3px',
        width: 'calc(100% - 5px)',
        height: 'calc(100% - 5px)',
        background: '#191919',
        border: '3px solid #191919',
        borderRadius: 3,
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
        bottom: 10,
        right: 10,
        width: 'calc(30% - 10px)',
        fontSize: '13px',
        fontSize: '1.3rem',
        width: '120px',

        ' span': {
            padding: '12px 5px',
        },
        

        ' &::after': {
            content: `none`, 
        },
    },


})

export default SubmitButton;

