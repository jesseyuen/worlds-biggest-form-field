import React, { Component } from 'react';
import './normalize.css';
import './App.css';
import WhatTheWrapper from './components/Wtf.js';
import SubmitButton from './components/SubmitButton';
import FormWrapper from './components/FormWrapper';
import MessageInput from './components/MessageInput';
import TwitterShareWrapper from './components/TwitterShare';
import InfoWrapper from './components/Info';
import MessageLabel from './components/MessageLabel';
import WTFWrapper from './components/WtfWrapper';

// TODO
// unfocus form field on esc keydown

const shareMetaWrapperStyle = {
 
};

const formFieldWrapper = {
  position: 'fixed',
  background: '#fff',
  width: '100vw',
  height: '100vh',
  top: 0,
  left: 0,
};

class App extends Component {

  render() {
    return (
      
      <div className="page-container">

        <InfoWrapper />

        <WTFWrapper>
          <WhatTheWrapper />
          <TwitterShareWrapper />
        </WTFWrapper>

        <div className="outer-container">
        
          <FormWrapper>       
            
            <form className="form" onSubmit={this.handleSubmit} method="POST">
                <div className="form__field" style={formFieldWrapper}>
                  <MessageInput type="text" id="worldsbiggestformfield" required></MessageInput>
                  {/* <MessageInput type="text" id="worldsbiggestformfield" placeholder="Welcome to the worlds biggest form field." required></MessageInput> */}
                  <MessageLabel htmlFor="worldsbiggestformfield">Welcome to the Worlds Biggest Form Field<span>*</span><br/>p.s. You're in it! Why not say hello?</MessageLabel>
                  <SubmitButton type="submit"><span>🚀&nbsp; Send message</span></SubmitButton>
                </div>
            </form>

          </FormWrapper>

        </div>
      </div> 
    );
  }
}

export default App;