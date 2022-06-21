import React, {Component} from 'react';

class CallToActionButton extends Component {
  render() {
    const { text, action, icon } = this.props;
    return (
      <div className="btn btn-wrapper">
        {icon || null}
        <div className="btn-text" onClick={action}>{text}</div>
      </div>
    );
  }
};
export default CallToActionButton;
