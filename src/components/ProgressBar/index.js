import React, {Component} from 'react';
import '../../style/progress-bar/progressBar.scss';

class ProgressBar extends Component {

  state = {
    progress: 0
  };

  _handleOnScroll = () => {

    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    this.setState({progress: scrolled});
  };

  componentDidMount() {
    window.addEventListener('scroll', this._handleOnScroll);
  }

  render() {
    const {progress} = this.state;
    return (
      <div className="progress-container">
        <div className="progress-bar" id="progressBar" style={{width:  progress + "%"}}/>
      </div>
    );
  }
}

ProgressBar.propTypes = {};

export default ProgressBar;
