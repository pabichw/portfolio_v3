import React, { Component } from 'react';
import { Metrics } from "../../../utils/Metrics";

import Fade from 'react-reveal/Fade';
import useMobileDetect from 'src/utils/MobileUtils';

class ScrollIndicator extends Component {

  constructor(props) {
    super(props);

    this.state = {
      screens: [
        { name: 'home', anchorID: 'home' },
        { name: 'about', anchorID: 'aboutMe' },
        { name: 'projects', anchorID: 'projects' },
        { name: 'contact', anchorID: 'contact' }
      ],
      activeScreen: { name: 'home', anchorID: 'home' },
    };
  }

  _handleOnScroll = () => {
    const currPosY = window.scrollY;
    const { activeScreen, screens } = this.state;
    const indexOfActiveScreen = screens.map(s => s.name).indexOf(activeScreen.name);
    const documentHeight = Metrics.getDocumentHeight();

    const prevScreen = screens[indexOfActiveScreen - 1];
    const nextScreen = screens[indexOfActiveScreen + 1];

    let anchorPosPrevScreen;
    let anchorPosNextScreen;

    if (prevScreen) {
      anchorPosPrevScreen = document.getElementById(prevScreen.anchorID)?.getBoundingClientRect().bottom;
    }

    if (nextScreen) {
      anchorPosNextScreen = document.getElementById(nextScreen.anchorID)?.getBoundingClientRect().top + window.scrollY;
    }

    if (currPosY >= anchorPosNextScreen) {
      this.setState({ activeScreen: nextScreen });
    } else if (currPosY <= anchorPosPrevScreen) {
      this.setState({ activeScreen: prevScreen });
    } else if (currPosY === 0) {
      this.setState({ activeScreen: screens[0] })
    } else if (currPosY >= documentHeight) {
      this.setState({ activeScreen: screens[screens.length - 1] })
    }
  };

  _handleDotClick = (s) => {
    this.setState({ activeScreen: s });
  };

  componentDidMount() {
    window.addEventListener('scroll', this._handleOnScroll);
    window.addEventListener('resize', this._handleOnResize)
  }

  render() {
    const { activeScreen, screens } = this.state;
    const activeScreenIndex = screens.map(s => s.name).indexOf(activeScreen.name);
    const labelToDisplay = activeScreenIndex < 10
      ?
      "0" + (activeScreenIndex + 1).toString() + " " + activeScreen.name
      :
      activeScreenIndex + " " + activeScreen.name;

    const { isMobile } = useMobileDetect()

    return (
      <Fade right>
        <div className="scroll-indicator-wrapper">
          <div className="active-screen-label" style={isMobile() ? null : { marginTop: activeScreenIndex * 30 + 'px' }}>
            {labelToDisplay}
          </div>
          <div className="dots">
            {screens.map((screen, idx) => {
              return <a key={idx} href={'#' + screen.anchorID} onClick={() => this._handleDotClick(screen)}><div className={"dot ".concat(idx === activeScreenIndex ? "dot-active" : "dot-inactive")} /></a>
            })}
          </div>
        </div>
      </Fade>
    );
  }
}

export default ScrollIndicator;
