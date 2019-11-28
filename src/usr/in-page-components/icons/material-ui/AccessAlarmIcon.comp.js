import React from 'react';
import PropTypes from 'prop-types';
import AccessAlarm from '@material-ui/icons/AccessAlarm';
import AccessAlarmOutlined from '@material-ui/icons/AccessAlarmOutlined';
import AccessAlarmRounded from '@material-ui/icons/AccessAlarmRounded';
import AccessAlarmSharp from '@material-ui/icons/AccessAlarmSharp';
import AccessAlarmTwoTone from '@material-ui/icons/AccessAlarmTwoTone';

class AccessAlarmIcon extends React.Component {
  render() {
    const { fontSize, style, color } = this.props;
    return React.createElement(validStyleMap[style] || validStyleMap['filled'], {fontSize, color});
  }
}

const validStyleMap = {
  'filled': AccessAlarm,
  'outlined': AccessAlarmOutlined,
  'rounded': AccessAlarmRounded,
  'sharp': AccessAlarmSharp,
  'two tone': AccessAlarmTwoTone,
};

AccessAlarmIcon.propTypes = {
  /**
   * If true then the component's instance will not be allowed to use in flows,
   * and you will not see the instance name in the pages instances list
   */
  doNotUseInFlows: PropTypes.bool,
  // Icon drawing style.
  style: PropTypes.oneOf([
    'filled', 'outlined', 'rounded', 'sharp', 'two tone'
  ]),
  // The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
  fontSize: PropTypes.oneOf([
    'inherit', 'default', 'small', 'large'
  ]),
  // The color of the component. It supports those theme colors that make sense for this component.
  color: PropTypes.oneOf([
    'inherit', 'primary', 'secondary', 'action', 'error', 'disabled'
  ]),
};

AccessAlarmIcon.defaultProps = {
  doNotUseInFlows: true,
  style: 'filled',
  fontSize: 'default',
  color: 'inherit',
};

export default AccessAlarmIcon;
