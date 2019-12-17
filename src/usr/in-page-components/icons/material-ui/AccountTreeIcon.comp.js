import React from 'react';
import AccountTree from '@material-ui/icons/AccountTree';
import AccountTreeOutlined from '@material-ui/icons/AccountTreeOutlined';
import AccountTreeRounded from '@material-ui/icons/AccountTreeRounded';
import AccountTreeSharp from '@material-ui/icons/AccountTreeSharp';
import AccountTreeTwoTone from '@material-ui/icons/AccountTreeTwoTone';
import {IconTypes} from "./icon.props";

const validStyleMap = {
  'filled': AccountTree,
  'outlined': AccountTreeOutlined,
  'rounded': AccountTreeRounded,
  'two tone': AccountTreeTwoTone,
  'sharp': AccountTreeSharp,
};

class AccountTreeIcon extends React.Component {
  render() {
    const { fontSize, style, color } = this.props;
    return React.createElement(validStyleMap[style] || validStyleMap['filled'], {fontSize, color: color || 'inherit'});
  }
}

AccountTreeIcon.propTypes = IconTypes;

AccountTreeIcon.defaultProps = {
  doNotUseInFlows: true,
  style: 'filled',
  fontSize: 'default',
  color: 'inherit',
};

export default AccountTreeIcon;
