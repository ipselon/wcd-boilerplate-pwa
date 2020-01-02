import React from 'react';
import SvgIcon from 'usr/components-composites/SvgIcon.comp';

const paths = [
  {
    fill: 'none',
    d: 'M0 0h24v24H0V0z'
  },
  {
    d: 'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'
  }
];

class MoreVertIcon extends React.Component {
  render () {
    return (
      <SvgIcon
        paths={paths}
      />
    );
  }
}

export default MoreVertIcon;
