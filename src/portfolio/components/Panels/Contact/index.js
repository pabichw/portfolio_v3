import React, {Component} from 'react';

import Zoom from 'react-reveal/Zoom';

const EMAIL = 'pabichwiktor@gmail.com'

class Contact extends Component {
  render() {
    return (
      <Zoom>
        <div id='contact' className='contact-panel-wrapper'>
          <div className='ending-wrapper'>
            <p>Want to get in touch? Cool.<br/>Please use following email address:</p>
            <a href={"mailto:" + EMAIL} target="_top" className="email primary-text">{EMAIL}</a>
          </div>
        </div>
      </Zoom>
    );
  }
}

Contact.propTypes = {};

export default Contact;
