import React from 'react';
import SvgIcon from 'usr/components-composites/SvgIcon.comp';

const paths = [
  {
    fill: 'none',
    d: 'M0 0h24v24H0V0z'
  },
  {
    d: 'M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z'
  }
];

class MenuIcon extends React.Component {
  render () {
    return (
      <SvgIcon
        paths={paths}
      />
    );
  }
}

export default MenuIcon;
