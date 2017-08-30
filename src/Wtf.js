import React, { Component } from 'react';
import glamorous from 'glamorous';

const WhatThe = glamorous.section({
  display: 'none'
})

class WhatTheWrapper extends Component {
  render() {
    return (
      <WhatThe>
        <a href="" className="form-info-toggle">Whats all this then?</a>
        <div className="form-info"><p>Information about this project will be in a modal or something.</p></div>
      </WhatThe>
    );
  }
}

export default WhatTheWrapper;
