import React, { Component } from 'react';
import glamorous from 'glamorous';

const GiftShop = glamorous.div({
  position: 'fixed',
  top: 0,
  right: 0,
  color: '#fff',
  zIndex: 1,

  // '@media(max-width: 530px)': {
  //   width: '50%',
  //   margin: '0',

  //   ' span': {
  //      borderLeft: '0',
  //      borderRadius: '0 3px 3px 0',
  //   },
  // },
})

class GiftShopWrapper extends Component {
  render() {
    return (
      <GiftShop>
        
        <svg preserveAspectRatio="meet" viewBox="0 0 250 250">
        <title>Radial text</title>
          <path id="circle" d="M0.5,250.5c0,138.07,111.929,250,250,250s250-111.93,250-250 c0-138.071-111.929-250-250-250S0.5,112.429,0.5,250.5" fill="none"></path>
          <text font-size="30">
            <textpath xlink:href="#circle">
            Gift Shop • Gift Shop • Gift Shop • 
            </textpath>
          </text>
        </svg>

      </GiftShop>
    );
  }
}

export default GiftShopWrapper;
