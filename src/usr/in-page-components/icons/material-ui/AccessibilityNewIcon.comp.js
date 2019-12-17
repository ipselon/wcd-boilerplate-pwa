import React from 'react';
import AccessibilityNew from '@material-ui/icons/AccessibilityNew';
import AccessibilityNewOutlined from '@material-ui/icons/AccessibilityNewOutlined';
import AccessibilityNewRounded from '@material-ui/icons/AccessibilityNewRounded';
import AccessibilityNewSharp from '@material-ui/icons/AccessibilityNewSharp';
import AccessibilityNewTwoTone from '@material-ui/icons/AccessibilityNewTwoTone';
import {IconTypes} from "./icon.props";

const validStyleMap = {
  'filled': AccessibilityNew,
  'outlined': AccessibilityNewOutlined,
  'rounded': AccessibilityNewRounded,
  'two tone': AccessibilityNewTwoTone,
  'sharp': AccessibilityNewSharp,
};

class AccessibilityNewIcon extends React.Component {
  render() {
    const { fontSize, style, color } = this.props;
    return React.createElement(validStyleMap[style] || validStyleMap['filled'], {fontSize, color: color || 'inherit'});
  }
}

AccessibilityNewIcon.propTypes = IconTypes;

AccessibilityNewIcon.defaultProps = {
  doNotUseInFlows: true,
  style: 'filled',
  fontSize: 'default',
  color: 'inherit',
};

export default AccessibilityNewIcon;
