import React, {Component} from 'react';
import '../../../../styles/panels/about-me/index.scss';
import RoundedHeart from '../../RoundedHeart/index';
import Fade from 'react-reveal/Fade';

const jsIco = '/static/images/js_ico_dark.png';
const reactIco = '/static/images/react_ico_dark.png';
const htmlCssIco = '/static/images/html5_css3_dark_logo.png';

const studentIco = '/static/images/student-ico.png';
const workIco = '/static/images/work-ico.png';

const facts = [
  {label: 'I\'ve got about 1.5 yr of commercial experience', ico: <img src={workIco} className="fact-ico" alt="work" />},
  {label: 'I’m a Bachelor of Computer Science', ico: <img src={studentIco} className="fact-ico" alt="student" />},
  {label: 'I enjoy front-end development!', ico: <RoundedHeart/>},

];

const technologies = [
  {name: 'JavaScript', img: jsIco},
  {name: 'React (Native)', img: reactIco},
  {name: 'HTML5 / CSS3', img: htmlCssIco}
]

class AboutMe extends Component {
  render() {
    return (
      <div id="aboutMe" className="about-me-panel-wrapper scroll-container">
        <div className="about-me-top-container">
          <Fade top>
            <h3 className="facts-title">Some facts about me:</h3>
          </Fade>
          <Fade bottom cascade>
            <ul className="facts-wrapper">
              {facts.map((fact, idx) => {
                return (
                  <li key={idx} className="fact">
                    {fact.ico}
                    <div className="fact-label">
                      {fact.label}
                    </div>
                  </li>
                )
              })}
            </ul>
          </Fade>
        </div>
        {/*<div className="about-me-bottom-container">*/}
        {/*  <h3 className="technologies-label">Some technologies I work with:</h3>*/}
        {/*  <div className="technologies-wrapper">*/}
        {/*    {technologies.map((t, i) => {*/}
        {/*      return(*/}
        {/*        <div key={i} className="technologies-item-wrapper">*/}
        {/*          <img alt={t.name + " icon"} className="technologies-item-icon" src={t.img}/>*/}
        {/*          <p>{t.name}</p>*/}
        {/*        </div>*/}
        {/*      );*/}
        {/*    })}*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    );
  }
}

AboutMe.propTypes = {};

export default AboutMe;
