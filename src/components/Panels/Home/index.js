import React, {Component} from 'react';
import '../../../style/panels/home/index.scss';
import CallToActionButton from "../../Buttons/CallToActionButton";
import {MobileUtils} from "../../../utils/MobileUtils";

const arrowDown = require('../../../resources/images/arrow-down.png');
const videoPath = require('../../../resources/videos/tree.mp4');
const tree_dummy_mobile = require('../../../resources/images/tree_dummy_mobile.jpg');

class HomePanel extends Component {
  state = {
    videoSrc: videoPath,
    linkedInUrl: 'http://linked.in/pabichw',
    isIOS: MobileUtils.isIOS()
  };

  _handleResize = () => {
    this.setState({isIOS : MobileUtils.isIOS()});
  };

  componentDidMount() {
    window.addEventListener('resize', this._handleResize);
  }

  render() {
    const { videoSrc, linkedInUrl, isIOS } = this.state;

    const video = videoSrc && !isIOS
      ?
      <video id="video-bckg" playsinline autoPlay muted loop>
        <source src={videoSrc} type="video/mp4" />
      </video>
      : <img id="video-placeholder" src={tree_dummy_mobile} alt="video-placeholder"/>;

    return (
      <div id="home" className="home-panel-wrapper scroll-container">
        <div className="video-wrapper">
          {video}
          <div className="video-filter"/>
        </div>
        <header className="home-text-wrapper">
          <h3>Hello there</h3>
          <h1>I'M WIKTOR</h1>
          <h3>a<br/>front-end developer</h3>
          <div className="resume-button-wrapper">
            <CallToActionButton text="See my LinkedIn" icon={<i className="far fa-id-card"/>} action={() => window.location.href = linkedInUrl}/>
          </div>
        </header>
        <a href="#aboutMe" className="scroll-down-incent">
          <img alt="arrow down icon" src={arrowDown} className='scroll-down-incent-icon'/>
          <h4 className="scroll-down-incent-text">Scroll down to see more</h4>
          <img alt="arrow down icon" src={arrowDown} className='scroll-down-incent-icon'/>
        </a>
      </div>
    );
  }
}

HomePanel.propTypes = {};
export default HomePanel;
