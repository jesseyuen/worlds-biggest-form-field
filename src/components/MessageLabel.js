import React from 'react';
import glamorous from 'glamorous';

const MessageLabel = glamorous.label({
    position: 'absolute',
    top: 30,
    left: 30,
    fontSize: '45px',
    fontSize: '4.5rem',
    lineHeight: '1.3',
    color: '#fff',
    pointerEvents: 'none',

    ' span': {
        position: 'relative',
        top: '-5px',
        fontFamily: 'Libre Baskerville',
    },

    '@media(min-width: 701px) and (max-width: 1500px)': {
        fontSize: '3vw',
    },
    
    '@media(max-width: 700px)': {
        fontSize: '13px',
        fontSize: '1.3em',
        top: 25,
        left: 25,
        paddingRight: '20px',
    },
    
    '@media(max-width: 500px)': {
        fontSize: '11px',
        fontSize: '1.1em',
    },

})

export default MessageLabel;

