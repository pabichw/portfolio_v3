import React, {Component} from 'react';
import ProjectsGallery from "./ProjectsGallery";
import Fade from 'react-reveal/Fade';

class ProjectsPanel extends Component {

  state = {
    scrollbarTriggered: false,
    progress: 0
  };

  _handleOnScroll = () => {
    const { scrollbarTriggered } = this.state;
    const currPos = document.documentElement.scrollTop;
    const projectsPosY = document.getElementById('projects').getBoundingClientRect().y;

    if ( currPos > projectsPosY + 1000 && !scrollbarTriggered ) {
      this.setState({scrollbarTriggered: true});
    }
  };

  _updateProgressBar = () => {
    const startPos = document.getElementById('projects').getBoundingClientRect().y;
    const endPos = document.getElementById('contact').getBoundingClientRect().y;
    const currPos = document.body.scrollTop || document.documentElement.scrollTop;
    const scrolled = ((currPos - startPos) / (endPos)) * 100;
    console.log("CurrPos:", currPos, " Scrolled:", scrolled);
  };

  componentDidMount() {
    window.addEventListener('scroll', this._handleOnScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._handleOnScroll);
  }

  render() {
    return (
      <main id="projects" className="projects-panel-wrapper" >
        <article className="introduction">
          <Fade top>
            <h2 className='section-title'>Projects:</h2>
          </Fade>
          <Fade bottom>
            <p>
              During my 3+ yrs of commercial experience I've developed a few fun frontend projects. I have listed a few below. Also, a couple of listed below I made in my spare time.
            </p>
          </Fade>
        </article>
        <ProjectsGallery/>
      </main>
    );
  }

}

export default ProjectsPanel;
