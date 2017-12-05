/*eslint-env jquery*/

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

const formFieldWrapper = {
  position: 'fixed',
  background: '#fff',
  width: '100vw',
  height: '100vh',
  top: 0,
  left: 0,
};


document.onkeydown = function(evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
    document.body.classList.remove('has-open-draw');
    document.getElementById('form-info-toggle').innerHTML = '<span>🤔&nbsp; Eh?</span>';
    document.activeElement.blur();
  }
}


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      contactMessage: ''
    }; 

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  //Change state of input field so text is updated while typing
  handleChange(e) {
    this.setState({
      contactMessage: e.target.value,
    });
  }
  
  handleSubmit(e) {
    e.preventDefault();
  
    $.ajax({
      // url: process.env.NODE_ENV !== "production" ? '/getMail' : "mailer.php",
      url: "mailer.php",
      type: "POST",
      data: {
        "form_msg": this.state.contactMessage
      },
      dataType: "html",
      success: function(data) {
        // Success..
        this.setState({
          contactMessage: ''
        });
        $('#formButton').html("<span>🙌&nbsp; Recieved!</span>");
        
        setTimeout(function(){
          $('#formButton').html("<span>🚀&nbsp; Send</span>");
        }, 4000);
        console.log('success', data);
      }.bind(this),

      beforeSend: function(data){
        $('#formButton').html("<span>⏱️&nbsp; Sending</span>");
      },
      
      // Fail..
      error: function(xhr, status, err) {
        console.log(xhr, status);
        console.log(err);
        this.setState({
          //contactMessage: ''
        });
        $('#formButton').html("<span>😲&nbsp; Error!</span>");

        setTimeout(function(){
          $('#formButton').html("<span>🚀&nbsp; Send</span>");
        }, 4000);

        console.log(this.state.contactMessage + "fail");
      }.bind(this)
    });
  }

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
                  <MessageInput type="text" id="formMsg" value={this.state.contactMessage} onChange={this.handleChange} required></MessageInput>
                  <MessageLabel htmlFor="worldsbiggestformfield" id="formLabel">Welcome to The Worlds Biggest Form<span>*</span><br/>Why not say hello?</MessageLabel>
                  <SubmitButton type="submit" id="formButton"><span>🚀&nbsp; Send!</span></SubmitButton>
                </div>
            </form>

          </FormWrapper>

        </div>
      </div> 
    );
  }
}

export default App;