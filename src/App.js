import React, { Component } from 'react';
import './App.css';
import glamorous from 'glamorous';
import WhatTheWrapper from './components/Wtf.js';
import SubmitButton from './components/SubmitButton';
import FormWrapper from './components/FormWrapper';
import MessageInput from './components/MessageInput';
import TwitterShareWrapper from './components/TwitterShare';
import InfoWrapper from './components/Info';
import MessageLabel from './components/MessageLabel';

// TODO
// unfocus form field on esc keydown

const shareMetaWrapperStyle = {
  position: 'fixed',
  bottom: 40,
  left: 40,
  zIndex: 10
};

const formFieldWrapper = {
  position: 'absolute',
  background: '#fff',
  width: '100vw',
  height: '100vh',
  top: 0,
  left: 0
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
                <div className="form__field" style={formFieldWrapper}>
                  <MessageInput type="text" id="worldsbiggestformfield" required></MessageInput>
                  {/* <MessageInput type="text" id="worldsbiggestformfield" placeholder="Welcome to the worlds biggest form field." required></MessageInput> */}
                  <MessageLabel htmlFor="worldsbiggestformfield">Welcome to the Worlds Biggest Form Field<span>*</span> <br/>Why not say hello...</MessageLabel>
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