import React from 'react';
import glamorous from 'glamorous';

const MessageLabel = glamorous.label({
    position: 'absolute',
    top: 40,
    left: 40,
    fontSize: 20,
    transition: 'top 200ms ease-out, font-size 200ms ease-out'
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

