import React, { Component } from 'react';
import glamorous from 'glamorous';

const Info = glamorous.div({
  position: 'fixed',
  height: '100vh',
  width: '500px',
  backgroundColor: "#191919",
  color: '#fff',
  overflowY: 'auto',
  lineHeight: '1.6',
  fontSize: '18px',
  fontSize: '1.8rem',

  '&::after': {
      display: 'block',
      position: 'fixed',
      bottom: '0',
      left: '0',
      width: '500px',
      height: '175px',
      background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 60%)',
      zIndex: '20',
      content: `''`, 
  },

  ' .infowrapper-inner': {
      position: 'relative',
      padding: '40px',
      zIndex: '5',
  },
  
  '& p': {
      margin: '0 0 20px 0',
  },

  


})

class InfoWrapper extends Component {
  render() {
    return (
      <Info>
        <div className="infowrapper-inner">
        <p>I come from a land obsessed with oversized things. Wait, not those kinds of things... get your mind out of the gutter, geez. Novelty structures of everyday things, but just really, really big.</p> 
        
        <p>There's the <a href="" title="More about The Big Banana">The Big Banana</a> in Coffs Harbour and the <a href="" title="More about The Big Camera">The Big Camera</a> in Meckering. The <a href="" title="More about Big Rocking Horse">Big Rocking Horse</a> in Gumeracha is a must see is the <a href="" title="More about The Big Poo">The Big Poo</a> in Mornington Peninsula.</p>
        </div>
      </Info>
    );
  }
}

export default InfoWrapper;
