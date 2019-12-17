import React from 'react';
import AccessAlarm from '@material-ui/icons/AccessAlarm';
import AccessAlarmOutlined from '@material-ui/icons/AccessAlarmOutlined';
import AccessAlarmRounded from '@material-ui/icons/AccessAlarmRounded';
import AccessAlarmSharp from '@material-ui/icons/AccessAlarmSharp';
import AccessAlarmTwoTone from '@material-ui/icons/AccessAlarmTwoTone';
import {IconTypes} from "./icon.props";

const validStyleMap = {
  'filled': AccessAlarm,
  'outlined': AccessAlarmOutlined,
  'rounded': AccessAlarmRounded,
  'sharp': AccessAlarmSharp,
  'two tone': AccessAlarmTwoTone,
};

class AccessAlarmIcon extends React.Component {
  render() {
    const { fontSize, style, color } = this.props;
    return React.createElement(validStyleMap[style] || validStyleMap['filled'], {fontSize, color: color || 'inherit'});
  }
}

AccessAlarmIcon.propTypes = IconTypes;

AccessAlarmIcon.defaultProps = {
  doNotUseInFlows: true,
  style: 'filled',
  fontSize: 'default',
  color: 'inherit',
};

export default AccessAlarmIcon;
