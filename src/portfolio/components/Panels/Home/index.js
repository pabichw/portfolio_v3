import React, {Component} from 'react';
import '../../../../styles/panels/home/index.scss';
import CallToActionButton from "../../Buttons/CallToActionButton";
import Image from 'next/image'
import {MobileUtils} from "../../../../utils/MobileUtils";
import Fade from 'react-reveal/Fade';

const arrowDownPath = '/static/images/arrow-down.png';

const videoPath = '/static/videos/tree.mp4';
const tree_dummy_mobile = '/static/images/tree_dummy_mobile.jpg';

class HomePanel extends Component {
  state = {
    linkedInUrl: 'http://linked.in/pabichw',
    isIOS: false
  };

  _handleResize = () => {
    this.setState({isIOS : MobileUtils.isIOS()});
  };

  componentDidMount() {
    window.addEventListener('resize', this._handleResize);
    this.setState({isIOS: MobileUtils.isIOS()})
  }

  render() {
    const { linkedInUrl, isIOS } = this.state;

    const video = videoPath && !isIOS
      ?
      <video id="video-bckg" playsinline autoPlay muted loop>
        <source src={videoPath} type="video/mp4" />
      </video>
      : <Image id="video-placeholder" src={tree_dummy_mobile} alt="video-placeholder"/>;

    return (
      <div id="home" className="home-panel-wrapper scroll-container">
        <div className="video-wrapper">
          {video}
          <div className="video-filter"/>
        </div>
        <header className="home-text-wrapper">
          <Fade top>
            <h3>Hello there</h3>
          </Fade>
          <Fade>
            <h1>I'M WIKTOR</h1>
          </Fade>
          <Fade bottom>
            <h3>a<br/>front-end developer</h3>
            <div className="resume-button-wrapper">
              <CallToActionButton text="See my LinkedIn" icon={<i className="far fa-id-card"/>} action={() => window.location.href = linkedInUrl}/>
            </div>
          </Fade>
        </header>
        <a href="#aboutMe" className="scroll-down-incent">
          <img alt="arrow down icon" src={arrowDownPath} className='scroll-down-incent-icon'/>
          <h4 className="scroll-down-incent-text">Scroll down to see more</h4>
          <img alt="arrow down icon" src={arrowDownPath} className='scroll-down-incent-icon'/>
        </a>
      </div>
    );
  }
}

HomePanel.propTypes = {};
export default HomePanel;
