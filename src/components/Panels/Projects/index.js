import React, {Component} from 'react';
import '../../../style/panels/projects/index.scss';
import ProjectsGallery from "./ProjectsGallery";

class ProjectsPanel extends Component {

  state = {
    scrollbarTriggered: false,
    progress: 0
  };

  _handleOnScroll = () => {
    const { scrollbarTriggered } = this.state;
    const currPos = document.documentElement.scrollTop;
    const projectsPosY = document.getElementById('projects').getBoundingClientRect().y;
    const contactPosY = document.getElementById('contact').getBoundingClientRect().y;

    if ( currPos > projectsPosY + 1000 && !scrollbarTriggered ) {
      this._startUpdatingProgressBar();
      this.setState({scrollbarTriggered: true});
    }

    if ( currPos > contactPosY + 1000 ) {
      this._stopUpdatingProgressBar();
    }
  };

  _startUpdatingProgressBar = () => {
    // console.log("updating Progress bar: START");
    // window.addEventListener('scroll', this._updateProgressBar);
  };

  _stopUpdatingProgressBar = () => {
    // console.log("updating Progress bar: STOP");
    // window.removeEventListener('scroll', this._updateProgressBar);
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
          <h2 className='section-title'>Projects:</h2>
          <p>Although, I have (almost) no commercial experience I try to spend as much time as
            I can making my own projects in order to self-develop. Also I was a Lodz University of Technology student, so I had to make some
            projects for grades whether I like It or not ;) I have listed a few below.
          </p>
        </article>
        <ProjectsGallery/>
      </main>
    );
  }

}

ProjectsPanel.propTypes = {};

export default ProjectsPanel;
