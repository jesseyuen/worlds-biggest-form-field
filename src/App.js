import React, { Component } from 'react';
import './App.css';
import WhatThe from './Wtf.js';

class App extends Component {

  state = {
    focused: false
  }

  componentDidMount() {
    this.input.addEventListener('focus', this.focus);
    this.input.addEventListener('blur', this.focus);
  }
  focus = () => {
    this.setState((state) => ({ focused: !state.focused }))
  }

  render() {
    return (
      <div className="form-wrapper">
        <form className="form" onSubmit={this.handleSubmit}>
            <div className="form__field">
              <label htmlFor="worldsbiggestformfield">Welcome to the worlds biggest form field.</label>
              <input type="text" id="worldsbiggestformfield"
                ref={input => this.input = input}
                className={['input', this.state.focused && 'input-focused'].join(' ')}
                required
              />
              <button type="submit" className="btn">Say hello</button>
            </div>
        </form>

        <WhatThe />

      </div>
    );
  }
}

export default App;