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
      border: '4px solid #191919',
      transition: 'transform .2s ease',
      zIndex: 1,
      willChange: 'transform',
  },

  ' a::after': {
    content: `''`, 
		position: 'absolute',
		top: '4px',
		left: '4px',
		width: 'calc(100% - 5px)',
		height: 'calc(100% - 5px)',
		background: '#191919',
		border: '4px solid #191919',
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
      bottom: '0',
      left: 0,
      width: '100%',

      ' span': {
          padding: '16px 25px',
      },

      ' a': {
        width: '100%',
        display: 'block',
      },

      ' a::after': {
          content: `none`, 
      },
  },

})

export default WTFWrapper;


