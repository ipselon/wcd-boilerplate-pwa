import React from 'react';
import AddAlarm from '@material-ui/icons/AddAlarm';
import AddAlarmOutlined from '@material-ui/icons/AddAlarmOutlined';
import AddAlarmRounded from '@material-ui/icons/AddAlarmRounded';
import AddAlarmSharp from '@material-ui/icons/AddAlarmSharp';
import AddAlarmTwoTone from '@material-ui/icons/AddAlarmTwoTone';
import {IconTypes} from "./icon.props";

const validStyleMap = {
  'filled': AddAlarm,
  'outlined': AddAlarmOutlined,
  'rounded': AddAlarmRounded,
  'two tone': AddAlarmTwoTone,
  'sharp': AddAlarmSharp,
};

class AddAlarmIcon extends React.Component {
  render() {
    const { fontSize, style, color } = this.props;
    return React.createElement(validStyleMap[style] || validStyleMap['filled'], {fontSize, color: color || 'inherit'});
  }
}

AddAlarmIcon.propTypes = IconTypes;

AddAlarmIcon.defaultProps = {
  doNotUseInFlows: true,
  style: 'filled',
  fontSize: 'default',
  color: 'inherit',
};

export default AddAlarmIcon;
