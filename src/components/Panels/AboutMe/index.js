import React, {Component} from 'react';
import '../../../style/panels/about-me/index.scss';
import RoundedHeart from '../../RoundedHeart/index';

const jsIco = require('../../../resources/images/js_ico_dark.png');
const reactIco = require('../../../resources/images/react_ico_dark.png');
const htmlCssIco = require('../../../resources/images/html5_css3_dark_logo.png');

const studentIco = require('../../../resources/images/student-ico.png');
const workIco = require('../../../resources/images/work-ico.png');

class AboutMe extends Component {
    state = {
      facts: [
        {label: 'I\'ve got about 1.5 yr of commercial experience', ico: <img src={workIco} className="fact-ico" alt="work" />},
        {label: 'I’m a Bachelor of Computer Science', ico: <img src={studentIco} className="fact-ico" alt="student" />},
        {label: 'I enjoy front-end development!', ico: <RoundedHeart/>},

      ],
      technologies: [
        {name: 'JavaScript', img: jsIco},
        {name: 'React (Native)', img: reactIco},
        {name: 'HTML5 / CSS3', img: htmlCssIco}
      ]
    };

    render() {
      const { facts, technologies } = this.state;
        return (
          <div id="aboutMe" className="about-me-panel-wrapper scroll-container">
            <div className="about-me-top-container">
              <h3 className="facts-title">Some facts about me:</h3>
              <ul className="facts-wrapper">
                {facts.map((fact, idx) => {
                  return (
                    <li key={idx} className="fact">
                      {fact.ico}
                      <div className={"fact-label"}>
                        {fact.label}
                      </div>
                    </li>
                  )
                })}
              </ul>
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
