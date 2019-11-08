import React from 'react';
import PropTypes from 'prop-types';
/*
  Panel with title
 */
class TitlePanel extends React.Component {
  static propTypes = {
    // simple title text
    title: PropTypes.string,
  };

  render () {
    return (
      <div style={{width: '100%'}}>
        <h1 style={{ textAlign: 'center' }}>
          {this.props.title || 'Welcome to Webcodesk!'}
        </h1>
      </div>
    );
  }
}

export default TitlePanel;
