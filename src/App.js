import React, { Component } from 'react';
import './App.css';

class BiggestFormField extends Component {

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
        <form className="form">
            <div className="form__field">
              {/* <label for="worldsbiggestformfield">Welcome to the worlds biggest form field. Guess what? You're in it! Why not send me a message While you're here. <sup>*</sup></label> */ }
              <label for="worldsbiggestformfield">Welcome to the worlds biggest form field.</label>
              {/* <input type="text" id="worldsbiggestformfield" required /> */}
              <input type="text" id="worldsbiggestformfield"
                ref={input => this.input = input}
                className={['input', this.state.focused && 'input-focused'].join(' ')}
              />
            </div>
        </form>
      </div>
    );
  }
}

export default BiggestFormField;
