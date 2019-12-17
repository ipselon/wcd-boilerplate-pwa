import React from 'react';
import AccountBalanceWallet from '@material-ui/icons/AccountBalanceWallet';
import AccountBalanceWalletOutlined from '@material-ui/icons/AccountBalanceWalletOutlined';
import AccountBalanceWalletRounded from '@material-ui/icons/AccountBalanceWalletRounded';
import AccountBalanceWalletSharp from '@material-ui/icons/AccountBalanceWalletSharp';
import AccountBalanceWalletTwoTone from '@material-ui/icons/AccountBalanceWalletTwoTone';
import {IconTypes} from "./icon.props";

const validStyleMap = {
  'filled': AccountBalanceWallet,
  'outlined': AccountBalanceWalletOutlined,
  'rounded': AccountBalanceWalletRounded,
  'two tone': AccountBalanceWalletTwoTone,
  'sharp': AccountBalanceWalletSharp,
};

class AccountBalanceWalletIcon extends React.Component {
  render() {
    const { fontSize, style, color } = this.props;
    return React.createElement(validStyleMap[style] || validStyleMap['filled'], {fontSize, color: color || 'inherit'});
  }
}

AccountBalanceWalletIcon.propTypes = IconTypes;

AccountBalanceWalletIcon.defaultProps = {
  doNotUseInFlows: true,
  style: 'filled',
  fontSize: 'default',
  color: 'inherit',
};

export default AccountBalanceWalletIcon;
