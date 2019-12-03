import React from 'react';
import { DivWithStyleTypes } from './DivWithStyle.props';

/**
 * StyledDiv is used in case when the theme styles are not enough.
 * It is recommended to use it for complex layouts mostly.
 */
class DivWithStyle extends React.Component {
  render() {
    const { content, style } = this.props;
    return (
      <div style={style}>
        {content}
      </div>
    );
  }
}

DivWithStyle.propTypes = DivWithStyleTypes;

DivWithStyle.defaultProps = {
  style: {
    display: 'flex',
  },
  content: [<span/>],
};

export default DivWithStyle;
