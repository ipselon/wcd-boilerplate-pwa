import React from 'react';
import Adb from '@material-ui/icons/Adb';
import AdbOutlined from '@material-ui/icons/AdbOutlined';
import AdbRounded from '@material-ui/icons/AdbRounded';
import AdbSharp from '@material-ui/icons/AdbSharp';
import AdbTwoTone from '@material-ui/icons/AdbTwoTone';
import {IconTypes} from "./icon.props";

const validStyleMap = {
  'filled': Adb,
  'outlined': AdbOutlined,
  'rounded': AdbRounded,
  'two tone': AdbTwoTone,
  'sharp': AdbSharp,
};

class AdbIcon extends React.Component {
  render() {
    const { fontSize, style, color } = this.props;
    return React.createElement(validStyleMap[style] || validStyleMap['filled'], {fontSize, color: color || 'inherit'});
  }
}

AdbIcon.propTypes = IconTypes;

AdbIcon.defaultProps = {
  doNotUseInFlows: true,
  style: 'filled',
  fontSize: 'default',
  color: 'inherit',
};

export default AdbIcon;
