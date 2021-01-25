import React, {Component} from 'react';
import Nav from "./Nav";
import SocialMediaIcons from "./SocialMediaIcons";
import '../../../styles/menubar/menubar.scss';
import ProgressBar from "../ProgressBar";
import Fade from 'react-reveal/Fade'

class MenuBar extends Component {
  state = {
    isFree: true,
  };

  _handleOnScroll = () => {
    const yPixelsWhenSticked = 10;

    this.setState({isFree: window.scrollY < yPixelsWhenSticked});
  };

  componentDidMount(){
    const {alwaysStick} = this.props;

    if(!alwaysStick) {
      window.addEventListener('scroll', this._handleOnScroll);
    }
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this._handleOnScroll, true);
  }

  render() {
    const {isFree} = this.state;
    const {alwaysStick} = this.props;

    const __isFree = alwaysStick ? false : isFree;

    return (
      <>
        <div className={__isFree ? 'hidden' : 'shown'}/>
        <div className={"menubar-wrapper ".concat(__isFree ? "menubar-free" : "menubar-sticked")}>
          <div className="dummy"/>
          <Nav/>
          <Fade>
            <SocialMediaIcons/>
          </Fade>
        </div>
        <ProgressBar/>
      </>
    );
  }
}

export default MenuBar;
