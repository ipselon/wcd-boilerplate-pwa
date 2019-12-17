import React from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AccountCircleOutlined from '@material-ui/icons/AccountCircleOutlined';
import AccountCircleRounded from '@material-ui/icons/AccountCircleRounded';
import AccountCircleSharp from '@material-ui/icons/AccountCircleSharp';
import AccountCircleTwoTone from '@material-ui/icons/AccountCircleTwoTone';
import {IconTypes} from "./icon.props";

const validStyleMap = {
  'filled': AccountCircle,
  'outlined': AccountCircleOutlined,
  'rounded': AccountCircleRounded,
  'two tone': AccountCircleTwoTone,
  'sharp': AccountCircleSharp,
};

class AccountCircleIcon extends React.Component {
  render() {
    const { fontSize, style, color } = this.props;
    return React.createElement(validStyleMap[style] || validStyleMap['filled'], {fontSize, color: color || 'inherit'});
  }
}

AccountCircleIcon.propTypes = IconTypes;

AccountCircleIcon.defaultProps = {
  doNotUseInFlows: true,
  style: 'filled',
  fontSize: 'default',
  color: 'inherit',
};

export default AccountCircleIcon;
