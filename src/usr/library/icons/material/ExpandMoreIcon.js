import React from 'react';
import SvgIcon from 'usr/components-composites/SvgIcon.comp';

const paths = [
  {
    d: 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z'
  },
  {
    fill: 'none',
    d: 'M0 0h24v24H0z'
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
