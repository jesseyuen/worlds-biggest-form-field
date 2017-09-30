import React, { Component } from 'react';
import glamorous from 'glamorous';

const Info = glamorous.div({
  display: 'inline-block'
})

class InfoWrapper extends Component {
  render() {
    return (
      <Info>
        <p>Info here</p>
      </Info>
    );
  }
}

export default InfoWrapper;


