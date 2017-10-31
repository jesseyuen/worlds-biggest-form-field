import React, { Component } from 'react';
import glamorous from 'glamorous';

const WhatThe = glamorous.section({
  display: 'inline-block'
})


function toggleDraw(e) {
  e.preventDefault();  
  if ( document.body.classList.contains('has-open-draw') ) {
    document.body.classList.remove('has-open-draw');
    document.getElementById('form-info-toggle').innerHTML = '<span>🤔&nbsp; Whats all this then?</span>';
  } else {
    document.body.classList.add('has-open-draw');
    document.getElementById('form-info-toggle').innerHTML = '<span>😐&nbsp; Oh, I see.</span>';
  }
}

class WhatTheWrapper extends Component {
  render() {
    return (
      <WhatThe>
        <a href="" id="form-info-toggle" onClick={toggleDraw}><span>🤔&nbsp; Whats all this then?</span></a>
      </WhatThe>
    );
  }
}

export default WhatTheWrapper;


