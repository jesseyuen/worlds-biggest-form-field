import React, { Component } from 'react';
import glamorous from 'glamorous';

const WhatThe = glamorous.section({
  position: 'absolute',
  bottom: 20,
  left: 20,
  zIndex: 10
})

function toggleDraw(e) {
  e.preventDefault();
  if ( document.body.classList.contains('has-open-draw') ) {
  document.body.classList.remove('has-open-draw');
  } else {
    document.body.classList.add('has-open-draw');
  }
}

class WhatTheWrapper extends Component {
  render() {
    return (
      <WhatThe>
        <a href="" className="form-info-toggle" onClick={toggleDraw}>Whats all this then?</a>
      </WhatThe>
    );
  }
}

export default WhatTheWrapper;
