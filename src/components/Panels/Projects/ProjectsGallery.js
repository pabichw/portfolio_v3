import React, {Component} from 'react';
import '../../../style/panels/projects/projectsGallery.scss';

// const twitchCloneVideo = require('../../../resources/videos/twitch-clone-demo.mp4');
const canteenVideo = require('../../../resources/videos/canteen_all.mp4');
// const spedtitionVideo = require('../../../resources/videos/spedition.mp4');
const gdzieJestMeczImg = require('../../../resources/images/gdzie_jest_mecz.png');

//TODO: [ Firefox] bugged widths on videos

class ProjectsGallery extends Component {
  state = {
    projects: [
      {
        name: 'Twitch clone',
        desc: 'Twitch.tv rip off based on Twitch Dev API.\nI wanted to see how far I can go with making 1:1 twitch clone using publicly available API. Turns out not so far :)\nFor this project I also created simple, proxy-like API to send my requests through',
        video: null,
        repository: 'https://github.com/pabichw/twitch-clone',
        demo: 'https://twitch.pabich.cc',
        techStack: ['React', 'Typescript', 'Redux', 'Node (for API)']
      },
      {
        name: 'Canteen',
        desc: 'My bachelor of science thesis.\n' +
          'The point of this app was to make ordering food at university’s canteen more comfortable and more efficient. \n' +
          'A client signs in using Google account, then makes an order and pays for it. Next step is waiting for notification when meal is ready for pick up. \n' +
          'Canteen operator can edit every position in menu, add new and keep track of ordered food.\n' +
          'Technologies used: React Native, JavaScript, TypeScript, Ruby On Rails, MongoDB and a few more…',
        video: canteenVideo,
        repository: 'https://github.com/pabichw/canteen',
        techStack: ['React Native', 'Ruby On Rails', 'MongoDB']
      },
      {
        name: 'Cho Na Mecz',
        desc: 'Another group project.\n' +
          'Android app indicating match transmissions in local pubs. I was responsible for Android part of the application.\nNo video - all I could find is this screenshoot',
        img: gdzieJestMeczImg,
        repository: 'https://github.com/TM2gr4/gdzie-jest-mecz',
        techStack: ['Android SDK', 'Spring', 'Hibernate', 'MySQL']
      }
    ]
  };

  _handleOnScroll = () => {
  };

  componentDidMount() {
    window.addEventListener('resize', this._handleOnScroll);
  }

  render() {
    const {projects} = this.state;
    return (
      <div className="projects-list-wrapper">
        <div>
          {projects.map((p, idx) => {
            return(
              <section className="project-item" key={idx}>
                <div className={"project-number-wrapper ".concat(idx % 2 === 0 ? '' : 'to-the-right')}>
                  <div className="project-number">{idx + 1}</div>
                </div>
                <div className={"preview-desc-container ".concat(idx % 2 === 0 ? '' : "row-reverse")}>
                  {p.video?
                    <video className="project-video" controls>
                      <source src={p.video} type="video/mp4"/>
                      Your browser doesn't support video players ;( Just... use Chrome for god sake - it's year 2019.
                    </video>
                    :
                    <img className="project-img" alt="project-preview" src={p.img}/>
                  }
                  <div className="desc-container">
                    <div className="project-name underline-project-name">{p.name}</div>
                    <div className="tech-stack">{p.techStack.join(' / ')}</div>
                    {p.repository && <a href={p.repository} className="project-repo" target="_blank" rel="noopener noreferrer">See repository</a>}
                    <div className="project-desc">{p.desc}</div>
                    {p.demo && <a href={p.demo} className="project-demo" target="_blank" rel="noopener noreferrer">DEMO</a>}

                  </div>
                </div>

              </section>
            )
          })}
        </div>
      </div>
    );
  }
}

ProjectsGallery.propTypes = {};

export default ProjectsGallery;
