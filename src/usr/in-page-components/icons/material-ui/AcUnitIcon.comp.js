import React from 'react';
import AcUnit from '@material-ui/icons/AcUnit';
import AcUnitOutlined from '@material-ui/icons/AcUnitOutlined';
import AcUnitRounded from '@material-ui/icons/AcUnitRounded';
import AcUnitSharp from '@material-ui/icons/AcUnitSharp';
import AcUnitTwoTone from '@material-ui/icons/AcUnitTwoTone';
import {IconTypes} from "./icon.props";

const validStyleMap = {
  'filled': AcUnit,
  'outlined': AcUnitOutlined,
  'rounded': AcUnitRounded,
  'two tone': AcUnitTwoTone,
  'sharp': AcUnitSharp,
};

class AcUnitIcon extends React.Component {
  render() {
    const { fontSize, style, color } = this.props;
    return React.createElement(validStyleMap[style] || validStyleMap['filled'], {fontSize, color: color || 'inherit'});
  }
}

AcUnitIcon.propTypes = IconTypes;

AcUnitIcon.defaultProps = {
  doNotUseInFlows: true,
  style: 'filled',
  fontSize: 'default',
  color: 'inherit',
};

export default AcUnitIcon;
