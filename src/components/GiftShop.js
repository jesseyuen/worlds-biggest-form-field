import React, { Component } from 'react';
import glamorous from 'glamorous';

const { css } = glamor

const rotate = css.keyframes({
  '0%': { transform: `rotate(0deg)` },
  '100%': { transform: `rotate(360deg)` }
})

const GiftShop = glamorous.div({
  
  position: 'fixed',
  top: 40,
  right: 0,
  width: 200,
  height: 200,
  color: '#fff',
  zIndex: 1,
  fontSize: 22,
  textTransform: 'uppercase',
  letterSpacing: '0.3em',
  animation: `${rotate} 30s infinite`,

  ' #circle': {
    textAlign: 'center',
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
  },

  ' text': {
    fill: '#fff',
  }
})

class GiftShopWrapper extends Component {
  render() {
    return (
      <GiftShop>
        
       
        <a href="" title="Visit the gist Shop" target="_blank">
        <svg preserveAspectRatio="meet" viewBox="0 0 250 250">
          <title>Vit rhe Gift Shop</title>
          <path id="circle" d="M0,100a100,100 0 1,0 200,0a100,100 0 1,0 -200,0" fill="none"></path>
          <text font-size="30">
            <textPath xlinkHref="#circle">
            Gift Shop • Gift Shop • Gift Shop • 
            </textPath>
          </text>
        </svg>
        </a>

      </GiftShop>
    );
  }
}

export default GiftShopWrapper;
