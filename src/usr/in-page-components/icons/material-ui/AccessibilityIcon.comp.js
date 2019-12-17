import React from 'react';
import Accessibility from '@material-ui/icons/Accessibility';
import AccessibilityOutlined from '@material-ui/icons/AccessibilityOutlined';
import AccessibilityRounded from '@material-ui/icons/AccessibilityRounded';
import AccessibilitySharp from '@material-ui/icons/AccessibilitySharp';
import AccessibilityTwoTone from '@material-ui/icons/AccessibilityTwoTone';
import {IconTypes} from "./icon.props";

const validStyleMap = {
  'filled': Accessibility,
  'outlined': AccessibilityOutlined,
  'rounded': AccessibilityRounded,
  'two tone': AccessibilityTwoTone,
  'sharp': AccessibilitySharp,
};

class AccessibilityIcon extends React.Component {
  render() {
    const { fontSize, style, color } = this.props;
    return React.createElement(validStyleMap[style] || validStyleMap['filled'], {fontSize, color: color || 'inherit'});
  }
}

AccessibilityIcon.propTypes = IconTypes;

AccessibilityIcon.defaultProps = {
  doNotUseInFlows: true,
  style: 'filled',
  fontSize: 'default',
  color: 'inherit',
};

export default AccessibilityIcon;
