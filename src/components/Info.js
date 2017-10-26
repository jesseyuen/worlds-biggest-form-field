import React, { Component } from 'react';
import glamorous from 'glamorous';

const Info = glamorous.div({
  position: 'fixed',
  height: '100vh',
  width: '500px',
  backgroundColor: "#000",
  color: '#fff',
  overflowY: 'scroll',
  lineHeight: '1.6',

  '&::after': {
    display: 'block',
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '500px',
    height: '175px',
    background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 60%)',
    zIndex: '20',
    content: `''`, 
  },

  ' .infowrapper-inner': {
    position: 'relative',
    padding: '40px',
    zIndex: '5',
  },
  
  '& p': {
    margin: '0 0 20px 0',
  },

  


})

class InfoWrapper extends Component {
  render() {
    return (
      <Info>
        <div className="infowrapper-inner">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida, eros eu semper dapibus, est erat luctus dolor, non ultricies nulla ex eget magna. In dapibus nisl id scelerisque eleifend. Fusce mollis justo vel faucibus volutpat. Nulla ut vulputate turpis. In sed semper velit, nec sagittis urna. Proin mollis tincidunt ex. Praesent tincidunt neque eget consectetur porttitor. Morbi euismod, urna sit amet interdum porta, ligula sem cursus massa, ut suscipit mauris velit quis ipsum. Cras nec lorem vulputate, sodales nisl vitae, gravida enim. Mauris elementum mi pellentesque mi vehicula facilisis.</p>
        </div>
      </Info>
    );
  }
}

export default InfoWrapper;
