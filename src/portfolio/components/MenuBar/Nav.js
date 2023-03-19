import React, { Component } from 'react';
import Link from 'next/link'
import useMobileDetect from "../../../utils/MobileUtils";

const burgerIco = "/static/images/burger_ico_white.svg";
const burgerIcoDark = "/static/images/burger_ico.svg";
const xIco = "/static/images/x_ico_white.svg";
const xIcoDark = "/static/images/x_ico_black.svg";

const tabs = [
  { name: "home", anchor: '/' },
  { name: "about me", anchor: '/#aboutMe' },
  { name: "projects", anchor: '/#projects' },
  { name: "contact", anchor: '/#contact' },
  { name: "blog", anchor: '/blog' }
]

class Nav extends Component {
  state = {
    isCollapsed: true,
    isAfterHomePanel: false,
  };

  _handleBurgerClick = (e) => {
    e.preventDefault();
    this.setState({ isCollapsed: !this.state.isCollapsed });
  };

  _handleScroll = () => {
    const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    this.setState({ isAfterHomePanel: window.scrollY >= viewportHeight });
  };

  _handleTabOnClick = () => {
    this.setState({ isCollapsed: true }); //make sure that side menu is collapsed after tapping a tab
  };

  componentDidMount() {
    window.addEventListener('resize', this._handleResize);
    window.addEventListener('scroll', this._handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._handleResize);
    window.removeEventListener('scroll', this._handleScroll);
  }

  render() {
    const { isCollapsed, isAfterHomePanel } = this.state;
    const { isMobile } = useMobileDetect()

    return (
      <nav className="nav-wrapper">
        <img alt="burger icon" onClick={this._handleBurgerClick}
          src={
            isCollapsed ?
              isAfterHomePanel ? burgerIcoDark : burgerIco
              :
              isAfterHomePanel ?
                isMobile() ? xIco : xIcoDark
                :
                xIco
          }
          className="burger-ico"
        />
        <div className={isMobile() ? (isCollapsed ? 'side-menu-container-hidden' : 'side-menu-container-shown') : ''}>
          {tabs.map((tab, i) =>
            <Link key={i}
              href={tab.anchor}
            >
              <p className={"tab white-font"}>
                {tab.name}
              </p>
            </Link>
          )}
        </div>
      </nav>
    );
  }
}

export default Nav;
