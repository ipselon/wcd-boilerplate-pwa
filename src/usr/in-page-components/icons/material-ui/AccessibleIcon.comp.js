import React from 'react';
import Accessible from '@material-ui/icons/Accessible';
import AccessibleOutlined from '@material-ui/icons/AccessibleOutlined';
import AccessibleRounded from '@material-ui/icons/AccessibleRounded';
import AccessibleSharp from '@material-ui/icons/AccessibleSharp';
import AccessibleTwoTone from '@material-ui/icons/AccessibleTwoTone';
import {IconTypes} from "./icon.props";

const validStyleMap = {
  'filled': Accessible,
  'outlined': AccessibleOutlined,
  'rounded': AccessibleRounded,
  'two tone': AccessibleTwoTone,
  'sharp': AccessibleSharp,
};

class AccessibleIcon extends React.Component {
  render() {
    const { fontSize, style, color } = this.props;
    return React.createElement(validStyleMap[style] || validStyleMap['filled'], {fontSize, color: color || 'inherit'});
  }
}

AccessibleIcon.propTypes = IconTypes;

AccessibleIcon.defaultProps = {
  doNotUseInFlows: true,
  style: 'filled',
  fontSize: 'default',
  color: 'inherit',
};

export default AccessibleIcon;
