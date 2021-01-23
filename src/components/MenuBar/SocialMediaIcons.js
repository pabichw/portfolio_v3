import React, {Component} from 'react';
import '../../style/menubar/socialMediaIcons.scss';
import {MobileUtils} from "../../utils/MobileUtils";

const githubIco = require('../../resources/images/github_ico_white.png');
const linkedInIco = require('../../resources/images/linkedid_ico_white.png');

const githubDarkIco = require('../../resources/images/github_ico_dark.png');
const linkedInDarkIco = require('../../resources/images/linkedid_ico_dark.png');

const ICONS_STATES = {DARK: 'DARK', LIGHT: 'LIGHT' };

class SocialMediaIcons extends Component {

    state = {
        socials: [
            {name: 'Github', iconLight: githubIco, iconDark: githubDarkIco, icoState: ICONS_STATES.LIGHT, link: 'http://github.com/pabichw'},
            {name: 'LinkedIn', iconLight: linkedInIco, iconDark: linkedInDarkIco, icoState: ICONS_STATES.LIGHT, link: 'http://linkedin.com/in/pabichw'}
        ],
        isMobile: MobileUtils.isDeviceMobile()
    };

    _setIconsTheme = (theme) => {
        const { socials } = this.state;
        let newSocials = [];
        if(theme) {
           socials.map(icon =>
               newSocials.push(Object.assign({}, icon, { icoState: theme}))
           )
        }
        this.setState({socials: newSocials}); // !!!!!!!
    };

    _watchIconsTheme = () => {
        const currentPosition = window.scrollY;
        const activateOnScrollValue = window.innerHeight;
        
        this.setState(() => ({isMobile: MobileUtils.isDeviceMobile()}), () => {
          const { isMobile } = this.state;
          currentPosition >= activateOnScrollValue && isMobile ? this._setIconsTheme(ICONS_STATES.DARK) : this._setIconsTheme(ICONS_STATES.LIGHT);
        })
    };

    componentDidMount() {
        window.addEventListener('scroll', this._watchIconsTheme);
    };

    render() {
        const socials = this.state.socials;
        return (
            <div className="social-icons-wrapper">
                {socials.map((s, i) => {
                    return (<a key={i} href={s.link}>
                        <img alt={s.name} className="social-icon" src={s.icoState === ICONS_STATES.DARK  ? s.iconDark : s.iconLight}/>
                    </a>);
                })}
            </div>
        );
    }
}

SocialMediaIcons.propTypes = {};

export default SocialMediaIcons;
