import React from 'react';
import AccountBox from '@material-ui/icons/AccountBox';
import AccountBoxOutlined from '@material-ui/icons/AccountBoxOutlined';
import AccountBoxRounded from '@material-ui/icons/AccountBoxRounded';
import AccountBoxSharp from '@material-ui/icons/AccountBoxSharp';
import AccountBoxTwoTone from '@material-ui/icons/AccountBoxTwoTone';
import {IconTypes} from "./icon.props";

const validStyleMap = {
  'filled': AccountBox,
  'outlined': AccountBoxOutlined,
  'rounded': AccountBoxRounded,
  'two tone': AccountBoxTwoTone,
  'sharp': AccountBoxSharp,
};

class AccountBoxIcon extends React.Component {
  render() {
    const { fontSize, style, color } = this.props;
    return React.createElement(validStyleMap[style] || validStyleMap['filled'], {fontSize, color: color || 'inherit'});
  }
}

AccountBoxIcon.propTypes = IconTypes;

AccountBoxIcon.defaultProps = {
  doNotUseInFlows: true,
  style: 'filled',
  fontSize: 'default',
  color: 'inherit',
};

export default AccountBoxIcon;
