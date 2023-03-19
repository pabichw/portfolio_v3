import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import Fade from 'react-reveal/Fade';

import CallToActionButton from "../../Buttons/CallToActionButton";
import useMobileDetect, { MobileUtils } from "../../../../utils/MobileUtils";

const arrowDownPath = '/static/images/arrow-down.png';

const VIDEO_PATH_WEBM = '/static/videos/tree.webm';
const VIDEO_PATH_H264 = '/static/videos/tree.h264';
const TREE_DUMMY_MOBILE = '/static/images/tree_dummy_mobile.jpg';
const LINKEDIN_URL = "http://linked.in/pabichw";

class HomePanel extends Component {

  render() {
    const { isMobile } = useMobileDetect();

    return (
      <div id="home" className="home-panel-wrapper scroll-container">
        <div className="video-wrapper">
          <video id="video-bckg" playsinline autoPlay muted loop>
            <source src={VIDEO_PATH_WEBM} type="video/webm" />
          </video>
          {isMobile() && <img id="video-bckg" src={TREE_DUMMY_MOBILE} />}
          <div className="video-filter" />
        </div>
        <header className="home-text-wrapper">
          <Fade top>
            <h3>Hello there</h3>
          </Fade>
          <Fade>
            <h1>I'M WIKTOR</h1>
          </Fade>
          <Fade bottom>
            <h3>a<br />front-end developer</h3>
            <div className="resume-button-wrapper">
              <CallToActionButton text="See my LinkedIn" icon={<FontAwesomeIcon icon={faAddressCard} />} action={() => window.location.href = linkedInUrl} />
            </div>
          </Fade>
        </header>
        <a href="#aboutMe" className="scroll-down-incent">
          <img alt="arrow down icon" src={arrowDownPath} className='scroll-down-incent-icon' />
          <h4 className="scroll-down-incent-text">Scroll down to see more</h4>
          <img alt="arrow down icon" src={arrowDownPath} className='scroll-down-incent-icon' />
        </a>
      </div>
    );
  }
}

HomePanel.propTypes = {};
export default HomePanel;
