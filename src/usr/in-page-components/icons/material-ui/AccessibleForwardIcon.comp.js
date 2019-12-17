import React from 'react';
import AccessibleForward from '@material-ui/icons/AccessibleForward';
import AccessibleForwardOutlined from '@material-ui/icons/AccessibleForwardOutlined';
import AccessibleForwardRounded from '@material-ui/icons/AccessibleForwardRounded';
import AccessibleForwardSharp from '@material-ui/icons/AccessibleForwardSharp';
import AccessibleForwardTwoTone from '@material-ui/icons/AccessibleForwardTwoTone';
import {IconTypes} from "./icon.props";

const validStyleMap = {
  'filled': AccessibleForward,
  'outlined': AccessibleForwardOutlined,
  'rounded': AccessibleForwardRounded,
  'two tone': AccessibleForwardTwoTone,
  'sharp': AccessibleForwardSharp,
};

class AccessibleForwardIcon extends React.Component {
  render() {
    const { fontSize, style, color } = this.props;
    return React.createElement(validStyleMap[style] || validStyleMap['filled'], {fontSize, color: color || 'inherit'});
  }
}

AccessibleForwardIcon.propTypes = IconTypes;

AccessibleForwardIcon.defaultProps = {
  doNotUseInFlows: true,
  style: 'filled',
  fontSize: 'default',
  color: 'inherit',
};

export default AccessibleForwardIcon;
