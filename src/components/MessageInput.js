import React from 'react';
import glamorous from 'glamorous';

const MessageInput = glamorous.textarea({
    position: 'absolute',
    // background: '#34495e',
    // background: '#27ae60',
    //background: '#2980b9',
    background: '#f1c40f',
    width: '100vw',
    height: '100vh',
    top: 0,
    left: 0,
    padding: '220px 40px 40px',
    fontSize: '60px',
    fontSize: '6rem',
    boxSizing: 'border-box',
    resize: 'none',
    // boxShadow: 'inset 0 0 15px rgba(0,0,0, 0.15)',
    color:  '#fff',
    transition: 'background 200ms, padding 150ms linear',
    willChange: 'padding',
    fontFamily: " 'soleil', sans-serif ",
    fontWeight: 300,

    ':focus': { 
        outline: 0,
        padding: '180px 40px 40px',
        background: '#2c3e50'
    },

    ':focus + label': { 
        fontSize: '16px',
        fontSize: '1.6em',
        //transform: 'scale(0.6)',
        color: '#fff',
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
        border: '4px solid #191919'
    },
})

// const bounce = css.keyframes({ 
//     '0%': { transform: 'scale(1)', opacity: 0.3 },
//     '55%': { transform: 'scale(1.2)', opacity: 1 },
//     '100%': { transform: 'scale(1)', opacity: 0.3 }
// })

// const MyBouncyDiv = glamorous.div({
//     animation: `${bounce} 1s infinite`,
//     width: 50,
//     height: 50,
//     backgroundColor: 'red',
// })

export default MessageInput;

