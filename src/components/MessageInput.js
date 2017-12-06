import React from 'react';
import glamorous from 'glamorous';

const MessageInput = glamorous.textarea({
    position: 'absolute',
    background: '#2c3e50',    
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    padding: '220px 40px 40px',
    fontSize: '60px',
    fontSize: '6rem',
    boxSizing: 'border-box',
    resize: 'none',
    color:  '#fff',
    transition: 'background 200ms, padding 150ms linear',
    willChange: 'padding',
    fontFamily: " 'soleil', sans-serif ",
    fontWeight: 300,

    ':focus': { 
        outline: 0,
        padding: '180px 40px 40px',
        background: '#4e6379',
        // background: 'linear-gradient(to bottom, #f14b97 23%,#f14b97 23%,#f7d100 39%,#f7d100 39%,#f7d100 60%,#5cae3f 76%,#5cae3f 76%)',
    },

    ':focus + label': { 
        fontSize: '16px',
        fontSize: '1.6em',
        //transform: 'scale(0.6)',
        color: '#fff',
        opacity: 0.5,
    },

    '@media(min-width: 701px) and (max-width: 1500px)': {
        padding: '13vw 40px 40px',
        fontSize: '3vw',

        ':focus': { 
            padding: '12vw 40px 40px',
        },
        
        ':focus + label': { 
            fontSize: '2vw',
        },
    },
    
    '@media(max-width: 700px)': {
        padding: '120px 25px 40px',
        fontSize: '16px',
        fontSize: '1.6em',

        ':focus': { 
            padding: '80px 25px 40px',
        },

        ':focus + label': { 
            fontSize: '9px',
            fontSize: '0.9em',
            //transform: 'scale(0.5)',
            // fontSize: '10px',
            // fontSize: '1.0em',
        },
    },

    '@media(max-width: 530px)': {
        //border: '4px solid #191919'
    },
})

export default MessageInput;

