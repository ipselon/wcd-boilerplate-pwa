import React from 'react';
import AccountBalance from '@material-ui/icons/AccountBalance';
import AccountBalanceOutlined from '@material-ui/icons/AccountBalanceOutlined';
import AccountBalanceRounded from '@material-ui/icons/AccountBalanceRounded';
import AccountBalanceSharp from '@material-ui/icons/AccountBalanceSharp';
import AccountBalanceTwoTone from '@material-ui/icons/AccountBalanceTwoTone';
import {IconTypes} from "./icon.props";

const validStyleMap = {
  'filled': AccountBalance,
  'outlined': AccountBalanceOutlined,
  'rounded': AccountBalanceRounded,
  'two tone': AccountBalanceTwoTone,
  'sharp': AccountBalanceSharp,
};

class AccountBalanceIcon extends React.Component {
  render() {
    const { fontSize, style, color } = this.props;
    return React.createElement(validStyleMap[style] || validStyleMap['filled'], {fontSize, color: color || 'inherit'});
  }
}

AccountBalanceIcon.propTypes = IconTypes;

AccountBalanceIcon.defaultProps = {
  doNotUseInFlows: true,
  style: 'filled',
  fontSize: 'default',
  color: 'inherit',
};

export default AccountBalanceIcon;
