import React, {Component} from 'react';
import '../../../style/panels/contact/index.scss';
import Zoom from 'react-reveal/Zoom';

class Contact extends Component {
  state = {
    email: 'pabichwiktor@gmail.com'
  };
  render() {
    const { email } = this.state;
    return (
      <Zoom>
        <div id='contact' className='contact-panel-wrapper'>
          <div className='ending-wrapper'>
            <p>Want to get in touch? Cool.<br/>Please use following email address:</p>
            <a href={"mailto:" + email} target="_top" className="email primary-text">{email}</a>
          </div>
        </div>
      </Zoom>
    );
  }
}

Contact.propTypes = {};

export default Contact;
