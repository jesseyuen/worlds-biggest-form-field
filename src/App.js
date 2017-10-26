import React, { Component } from 'react';
import './App.css';
import glamorous from 'glamorous';
import WhatTheWrapper from './components/Wtf.js';
import SubmitButton from './components/SubmitButton';
import FormWrapper from './components/FormWrapper';
import MessageInput from './components/MessageInput';
import TwitterShareWrapper from './components/TwitterShare';
import InfoWrapper from './components/Info';

// TODO
// unfocus form field on esc keydown

const shareMetaWrapperStyle = {
  position: 'fixed',
  bottom: 40,
  left: 40,
  zIndex: 10
};

class App extends Component {

  render() {
    return (
      
      <div className="page-container">

        <InfoWrapper />

        <div className="share-meta-wrapper" style={shareMetaWrapperStyle}>
            <WhatTheWrapper />
            <TwitterShareWrapper />
          </div>

        <div className="outer-container">
        
          <FormWrapper>       
            
            <form className="form" onSubmit={this.handleSubmit} method="POST">
                <div className="form__field">
                  <label htmlFor="worldsbiggestformfield" style={{display:'none'}}>Welcome to the worlds biggest form field.</label>
                  <MessageInput type="text" id="worldsbiggestformfield" placeholder="Welcome to the worlds biggest form field." required></MessageInput>
                  <SubmitButton type="submit" className="btn">Send me a message</SubmitButton>
                </div>
            </form>

          </FormWrapper>

        </div>
      </div> 
    );
  }
}

export default App;