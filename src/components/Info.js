import React, { Component } from 'react';
import glamorous from 'glamorous';

const Info = glamorous.div({
  position: 'fixed',
  height: '100vh',
  width: '500px',
  backgroundColor: "#191919",
  color: '#fff',
  overflowY: 'auto',
  lineHeight: '1.7',
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
      padding: '40px 40px 120px',
      zIndex: '5',
  },
  
  '& p': {
      margin: '0 0 20px 0',
  },

  ' span': {
    // borderLeft: '0',
    // borderRight: '0',
    borderBottom: '0',
    padding: '16px 5px',
  },

  ' a': {
    position: 'relative',
    color: 'inherit',
    textDecoration: 'none',
    transition: 'color 200ms',

    '&::after': {
      position: 'absolute',
      bottom: '-2px',
      left: '0',
      width: '100%',
      height: '2px',
      background: '#fff',
      content: `''`, 
    },
  },

  ' .bananna': {
      '&::after': {
        background: '#f1c40f',
      },
  
      ' &:hover': {
        color: '#f1c40f',
      },
  
    },
  
  ' .camera': {
    '&::after': {
      background: '#AAC6DC',
    },

    ' &:hover': {
      color: '#AAC6DC',
    },

  },
  
  ' .horse': {
    '&::after': {
      background: '#3498db',
    },

    ' &:hover': {
      color: '#3498db',
    },

  },
  
  ' .poo': {
    '&::after': {
      background: '#7F5446',
    },

    ' &:hover': {
      color: '#7F5446',
    },

  },
  
  ' .prawn': {
    '&::after': {
      background: '#F68548',
    },

    ' &:hover': {
      color: '#F68548',
    },

  },
  
  ' .boot': {
    '&::after': {
      background: '#27ae60',
    },

    ' &:hover': {
      color: '#27ae60',
    },

  },
  
  ' .orange': {
    '&::after': {
      background: '#f39c12',
    },

    ' &:hover': {
      color: '#f39c12',
    },

  },
  
  ' .rock': {
    '&::after': {
      background: '#C2431D',
    },

    ' &:hover': {
      color: '#C2431D',
    },

  },

  ' .fancy': {
    position: 'relative',
    fontSize: '22px',
    // top: '-5px',
    fontFamily: 'Libre Baskerville',
    padding: '0',
  },
  
  ' .smalltext': {
    fontSize: '13px',
  },

  '@media(max-width: 500px)': {
    width: '100vw',
  },

})

class InfoWrapper extends Component {
  render() {
    return (
      <Info>
        <div className="infowrapper-inner">
          <p>I come from a land seemingly obsessed with oversized things. Hey, not those kinds of things... get your mind out of the gutter, geez. I'm talking about novelty structures of everyday things, just really, really big.</p> 

          <p>These include a big <a href="http://www.thebigcamera.com.au/" title="More about The Big Camera" target="_blank" className="camera">Camera</a>, <a href="https://en.wikipedia.org/wiki/Big_Rocking_Horse
" title="More about The Big Rocking Horse" target="_blank" className="horse">Rocking Horse</a>, <a href="https://www.pinterest.com.au/pin/156570524516955715/" title="More about The Big Poo" target="_blank" className="poo">Poo</a>, <a href="https://www.tripadvisor.com.au/Attraction_Review-g528913-d8115622-Reviews-Big_Prawn-Ballina_New_South_Wales.html" title="More about The Big Prawn" target="_blank" className="rock">Prawn</a>, <a href="https://harveyvisitorcentre.com.au/big-orange---harvey-wa.html" title="More about The Big Orange" target="_blank" className="orange">Orange</a>, <a href="https://en.wikipedia.org/wiki/Golden_Gumboot" title="More about The Big Gumboot" target="_blank" className="boot">Gumboot</a>. I could go on.... <br/> We have an espcially lovely giant <a href="https://en.wikipedia.org/wiki/Uluru" title="More about Uluru" target="_blank" className="rock">Rock.</a></p> 

        <p>It's an honour to add this giant F O R M to the collection. Always expanding to fit your viewport, this form is only limited in size by the screen you view it in.</p>
        <br />
        <br />

        <p className="smalltext"><span className="fancy">*</span> Disclaimer: May not actually be the biggest form field in the world however it's without a doubt the biggest in the southern hemisphere.</p>
        
        <p className="smalltext"><span className="fancy">**</span> This project as an excuse to poke around and learn a little about React eco-system. It's rough around the edges and I'm ok with that.</p>

        </div>
      </Info>
    );
  }
}

export default InfoWrapper;
