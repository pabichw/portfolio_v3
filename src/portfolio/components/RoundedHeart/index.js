import React, {Component} from 'react';
import '../../../styles/rounded-heart/rounded-heart.scss';

class RoundedHeart extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="heart">♥</div>
      </div>
    );
  }
}

RoundedHeart.propTypes = {};
export default RoundedHeart;
