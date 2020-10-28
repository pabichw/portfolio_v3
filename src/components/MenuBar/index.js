import React, {Component} from 'react';
import Nav from "./Nav";
import SocialMediaIcons from "./SocialMediaIcons";
import '../../style/menubar/menubar.scss';
import ProgressBar from "../ProgressBar";

class MenuBar extends Component {

  state = {
    isFree: true,
  };

  _handleOnScroll = () => {
    const yPixelsWhenSticked = 10;

    this.setState({isFree: window.scrollY < yPixelsWhenSticked});
  };

  componentDidMount(){
    window.addEventListener('scroll', this._handleOnScroll);
  }

  render() {
    const {isFree} = this.state;
    return (
      <>
        <div className={isFree ? 'hidden' : 'shown'}/>
        <div className={"menubar-wrapper ".concat(isFree ? "menubar-free" : "menubar-sticked")}>
          <div className="dummy"/>
          <Nav/>
          <SocialMediaIcons/>
        </div>
        <ProgressBar/>
      </>
    );
  }
}

MenuBar.propTypes = {};

export default MenuBar;
