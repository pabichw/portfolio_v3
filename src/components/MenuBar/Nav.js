import React, {Component} from 'react';
import '../../style/menubar/nav.scss';
import {MobileUtils} from "../../utils/MobileUtils";

const burgerIco = require("../../resources/images/burger_ico_white.svg");
const burgerIcoDark = require("../../resources/images/burger_ico.svg");
const xIco = require("../../resources/images/x_ico_white.svg");
const xIcoDark = require("../../resources/images/x_ico_black.svg");

class Nav extends Component {

  state = {
    isCollapsed: true,
    isMobile: MobileUtils.isDeviceMobile(),
    tabs: [
      {name: "home", anchor: '#home'},
      {name: "about me", anchor: '#aboutMe'},
      {name: "projects", anchor: '#projects'},
      {name: "contact", anchor: '#contact'}
    ],
    isAfterHomePanel: false,
  };

  _handleBurgerClick = (e) => {
    e.preventDefault();
    this.setState({isCollapsed: !this.state.isCollapsed});
  };
  _handleResize = () => {
    this.setState({isMobile: MobileUtils.isDeviceMobile()});
  };
  _handleScroll = () => {
    const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    this.setState({isAfterHomePanel: window.scrollY >= viewportHeight});
  };
  _handleTabOnClick = () => {
    this.setState({isCollapsed: true}); //make sure that side menu is collapsed after tapping a tab
  };
   componentDidMount() {
    window.addEventListener('resize', this._handleResize);
    window.addEventListener('scroll', this._handleScroll);
  }

  render() {
    const {isCollapsed, isMobile, tabs, isAfterHomePanel} = this.state;
    return (
      <nav className="nav-wrapper">
        <img alt="burger icon" onClick={this._handleBurgerClick} src={isCollapsed?
                                                                        isAfterHomePanel ? burgerIcoDark: burgerIco
                                                                        :
                                                                        isAfterHomePanel ?
                                                                            isMobile? xIco : xIcoDark
                                                                          :
                                                                          xIco}
             className="burger-ico"/>
        <div className={isMobile? (isCollapsed ? 'side-menu-container-hidden':'side-menu-container-shown') : ''}>
          {tabs.map((tab, i) => {
            return (
              <a key={i}
                 className={"tab white-font"}
                 onClick={this._handleTabOnClick}
                 href={tab.anchor}>{tab.name}</a>
            )
          })}
        </div>
      </nav>
    );
  }
}

Nav.propTypes = {};
export default Nav;
