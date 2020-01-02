import React from 'react';
import SvgIcon from 'usr/components-composites/SvgIcon.comp';

const paths = [
  {
    opacity: '.87',
    fill: 'none',
    d: 'M24 24H0V0h24v24z',
  },
  {
    d: 'M15.88 9.29L12 13.17 8.12 9.29c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z'
  },
];

class ExpandMoreIcon extends React.Component {
  render () {
    return (
      <SvgIcon
        paths={paths}
      />
    );
  }
}

export default ExpandMoreIcon;
