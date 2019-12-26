import React from 'react';
import SvgIcon from 'usr/components-composites/SvgIcon.comp';

const paths = [
  {
    d: 'M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z'
  },
  {
    fill: 'none',
    d: 'M0 0h24v24H0z'
  },
];

class ExpandLessIcon extends React.Component {
  render () {
    return (
      <SvgIcon
        paths={paths}
      />
    );
  }
}

export default ExpandLessIcon;
