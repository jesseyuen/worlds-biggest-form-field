import React, { Component } from 'react';
import glamorous from 'glamorous';

const TwitterShare = glamorous.div({
  display: 'inline-block',
  margin: '0 0 0 20px'
})

class TwitterShareWrapper extends Component {
  render() {
    return (
      <TwitterShare>
        <a className="twitter-share" href="https://twitter.com/intent/tweet/?text=I%20visited%20the%20worlds%20biggest%20form%20field%20and%20all%20I%20got%20was%20this%20lousy%20tweet.&amp;url=http%3A%2F%2Fworldsbiggestformfield.com&via=jesseyuen" target="_blank" aria-label="Share on Twitter">
            <span>Share</span>
        </a>
      </TwitterShare>
    );
  }
}

export default TwitterShareWrapper;
