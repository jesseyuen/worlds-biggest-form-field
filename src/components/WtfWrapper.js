import React, { Component } from 'react';
import glamorous from 'glamorous';

const WTFWrapper = glamorous.div({
  position: 'fixed',
  bottom: 40,
  left: 40,
  zIndex: 10,
  transform: 'translateZ(0)',

  ' a': {
    textDecoration: 'none',
    position: 'relative',
    display: 'inline-block',
    fontWeight: 700,
    textAlign: 'center',
  },
  
  ' span': {
      display: 'block',
      position: 'relative',
      padding: '15px 25px',
      background: '#fff',
      color: '#191919',
      border: '3px solid #191919',
      transition: 'transform .2s ease',
      zIndex: 1,
      willChange: 'transform',
      borderRadius: 3,
  },

  ' a::after': {
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
  
  '@media(min-width: 700px)': {
    
     ' a:hover span': {
         transform: 'translate(-2px, -2px)',
     },
       
     ' a:active span': {
         transition: 'transform .05s ease',
         transform: 'translate(0, 0)',
     },
  },

  '@media(max-width: 530px)': {
      bottom: 10,
      left: 10,
      width: 'calc(65% - 10px)',
      fontSize: '13px',
      fontSize: '1.3rem',

      ' span': {
          padding: '16px 5px',
      },

      ' a': {
        width: '100%',
        display: 'block',
        borderRadius: 0,
      },

      ' a::after': {
          content: `none`, 
      },
  },

})

export default WTFWrapper;


