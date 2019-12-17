import React from 'react';
import Add from '@material-ui/icons/Add';
import AddOutlined from '@material-ui/icons/AddOutlined';
import AddRounded from '@material-ui/icons/AddRounded';
import AddSharp from '@material-ui/icons/AddSharp';
import AddTwoTone from '@material-ui/icons/AddTwoTone';
import {IconTypes} from "./icon.props";

const validStyleMap = {
  'filled': Add,
  'outlined': AddOutlined,
  'rounded': AddRounded,
  'two tone': AddTwoTone,
  'sharp': AddSharp,
};

class AddIcon extends React.Component {
  render() {
    const { fontSize, style, color } = this.props;
    return React.createElement(validStyleMap[style] || validStyleMap['filled'], {fontSize, color: color || 'inherit'});
  }
}

AddIcon.propTypes = IconTypes;

AddIcon.defaultProps = {
  doNotUseInFlows: true,
  style: 'filled',
  fontSize: 'default',
  color: 'inherit',
};

export default AddIcon;
