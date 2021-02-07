import React, {Component} from 'react';
import '../../../../styles/panels/projects/projectsGallery.scss';
import Fade from 'react-reveal/Fade';

const twitchCloneVideo = '/static/videos/twitch-clone.mp4';
const canteenVideo = '/static/videos/canteen_all.mp4';
const spedtitionVideo = '/static/videos/spedition.mp4';
const gdzieJestMeczImg = '/static/images/gdzie_jest_mecz.png';
const yoursDemoGif = '/static/images/yours_demo.gif';

//TODO: [ Firefox] bugged widths on videos
const projects = [
  {
    name: 'Twitch clone',
    desc: 'Twitch.tv rip off based on Twitch Dev API.\nI wanted to see how far I can go with making 1:1 twitch clone using publicly available API. Turns out not so far :)\nFor this project I also created simple, proxy-like API to send my requests through',
    video: twitchCloneVideo,
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
    name: 'Yours',
    desc: 'Created at Goodylabs. I was responsible for delivering mobile client for app tailored for managing bookings at coworking spaces.\nUnfortunately this qucik gif is all I have left from this app :/. \n ' + 'Some of the main features are: calendar, support chat, qr code for door opening, listing and inviting collegues to your bookings, managing user profile, etc.',
    img: yoursDemoGif,
    repository: null,
    techStack: ['React Native', 'Typescript']
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
class ProjectsGallery extends Component {
  componentDidMount() {
    window.addEventListener('resize', this._handleOnScroll);
  }

  render() {
    return (
      <div className="projects-list-wrapper">
        <div>
          {projects.map((p, idx) => {
            return(
              <Fade bottom>
                <section className="project-item" key={idx}>
                  <div className={"project-number-wrapper ".concat(idx % 2 === 0 ? '' : 'to-the-right')}>
                    {/* <div className="project-number">{idx + 1}</div> */}
                  </div>
                  <div className={"preview-desc-container ".concat(idx % 2 === 0 ? '' : "row-reverse")}>
                    <Fade left={idx % 2 === 0} right={idx % 2 !== 0}>
                    {p.video?
                      <video className="project-video" controls>
                        <source src={p.video} type="video/mp4"/>
                        Your browser doesn't support video players ;( Just... use Chrome for god sake - it's year 2019.
                      </video>
                      :
                      <img className="project-img" alt="project-preview" src={p.img}/>
                    }
                    </Fade>
                    <Fade right={idx % 2 === 0} left={idx % 2 !== 0}>
  
                    <div className="desc-container">
                      <div className="project-name underline-project-name">{p.name}</div>
                      <div className="tech-stack">{p.techStack.join(' / ')}</div>
                      {p.repository && <a href={p.repository} className="project-repo" target="_blank" rel="noopener noreferrer">See repository</a>}
                      <p className="project-desc">{p.desc}</p>
                      {p.demo && <a href={p.demo} className="project-demo" target="_blank" rel="noopener noreferrer">DEMO</a>}
                    </div>
                    </Fade>
                  </div>
                </section>
              </Fade>
            )
          })}
        </div>
      </div>
    );
  }
}

ProjectsGallery.propTypes = {};


export default ProjectsGallery;