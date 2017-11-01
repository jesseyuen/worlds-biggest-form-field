import React from 'react';
import glamorous from 'glamorous';

const MessageLabel = glamorous.label({
    position: 'absolute',
    top: 40,
    left: 40,
    fontSize: '60px',
    fontSize: '6rem',
    lineHeight: '1.3',
    color: '#fff',
    transition: 'transform 200ms, font-size 200ms, line-height 200ms',
    willChange: 'transform, font-size, line-height',
    transformOrigin: 'top left',

    ' span': {
        position: 'relative',
        top: '-5px',
        fontFamily: 'Libre Baskerville',
    },

    '@media(min-width: 701px) and (max-width: 1500px)': {
        fontSize: '3vw',
    },
    
    '@media(max-width: 700px)': {
        fontSize: '16px',
        fontSize: '1.6em',
        top: 25,
        left: 25,
        paddingRight: '20px',
    },

})

export default MessageLabel;

