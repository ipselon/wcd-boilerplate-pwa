import React from 'react';
import AccessTime from '@material-ui/icons/AccessTime';
import AccessTimeOutlined from '@material-ui/icons/AccessTimeOutlined';
import AccessTimeRounded from '@material-ui/icons/AccessTimeRounded';
import AccessTimeSharp from '@material-ui/icons/AccessTimeSharp';
import AccessTimeTwoTone from '@material-ui/icons/AccessTimeTwoTone';
import {IconTypes} from "./icon.props";

const validStyleMap = {
  'filled': AccessTime,
  'outlined': AccessTimeOutlined,
  'rounded': AccessTimeRounded,
  'two tone': AccessTimeTwoTone,
  'sharp': AccessTimeSharp,
};

class AccessTimeIcon extends React.Component {
  render() {
    const { fontSize, style, color } = this.props;
    return React.createElement(validStyleMap[style] || validStyleMap['filled'], {fontSize, color: color || 'inherit'});
  }
}

AccessTimeIcon.propTypes = IconTypes;

AccessTimeIcon.defaultProps = {
  doNotUseInFlows: true,
  style: 'filled',
  fontSize: 'default',
  color: 'inherit',
};

export default AccessTimeIcon;
