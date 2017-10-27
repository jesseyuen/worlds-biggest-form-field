import React, { Component } from 'react';
import glamorous from 'glamorous';

const TwitterShare = glamorous.div({
  display: 'inline-block',
  margin: '0 0 0 30px'
})

class TwitterShareWrapper extends Component {
  render() {
    return (
      <TwitterShare>
        <a className="twitter-share" href="https://twitter.com/intent/tweet/?text=I%20visited%20the%20worlds%20biggest%20form%20field%20and%20all%20I%20got%20was%20this%20lousy%20tweet.&amp;url=http%3A%2F%2Fworldsbiggestformfield.com&via=jesseyuen" target="_blank" aria-label="Share on Twitter">
          <div className="">
              <div aria-hidden="true" className="">
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.5 7.4l-2 .2c-.4-.5-1-.8-2-.8C13.3 6.8 12 8 12 9.4v.6c-2 0-4-1-5.4-2.7-.2.4-.3.8-.3 1.3 0 1 .4 1.7 1.2 2.2-.5 0-1 0-1.2-.3 0 1.3 1 2.3 2 2.6-.3.4-.7.4-1 0 .2 1.4 1.2 2 2.3 2-1 1-2.5 1.4-4 1 1.3 1 2.7 1.4 4.2 1.4 4.8 0 7.5-4 7.5-7.5v-.4c.5-.4.8-1.5 1.2-2z"/><circle cx="12" cy="12" r="11.5"/></svg> */}
              </div>
              Share
          </div>
        </a>
      </TwitterShare>
    );
  }
}

export default TwitterShareWrapper;
