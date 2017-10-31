import React from 'react';
import glamorous from 'glamorous';

const MessageLabel = glamorous.label({
    position: 'absolute',
    top: 40,
    left: 40,
    fontSize: '3vw',
    lineHeight: '1.3',
    color: '#fff',
    transition: 'top 200ms ease-out, font-size 200ms ease-out, color 200ms, line-height 200ms',
    willChange: 'top, font-size, line-height',

    ' span': {
        position: 'relative',
        top: '-5px',
        fontFamily: 'Libre Baskerville',
        // opacity: 0.5,
    },
})

// html {
//     font-size: 16px;
//   }
//   @media screen and (min-width: 320px) {
//     html {
//       font-size: calc(16px + 6 * ((100vw - 320px) / 680));
//     }
//   }
//   @media screen and (min-width: 1000px) {
//     html {
//       font-size: 22px;
//     }
//   }

export default MessageLabel;

