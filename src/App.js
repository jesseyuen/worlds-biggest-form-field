import React, { Component } from 'react';
import './App.css';
import glamorous from 'glamorous';
import WhatTheWrapper from './Wtf.js';
import SubmitButton from './SubmitButton';
import FormWrapper from './FormWrapper';
import MessageInput from './MessageInput';

// TODO
// unfocus form field on esc keydown

class App extends Component {

  render() {
    return (
      
      <FormWrapper>       
        
        <form className="form" onSubmit={this.handleSubmit} method="POST">
            <div className="form__field">
              <label htmlFor="worldsbiggestformfield" style={{display:'none'}}>Welcome to the worlds biggest form field.</label>
              <MessageInput type="text" id="worldsbiggestformfield" placeholder="Welcome to the worlds biggest form field." required></MessageInput>
              <SubmitButton type="submit" className="btn">Send me a message</SubmitButton>
            </div>
        </form>

        <WhatTheWrapper />
      </FormWrapper> 
    );
  }
}

export default App;