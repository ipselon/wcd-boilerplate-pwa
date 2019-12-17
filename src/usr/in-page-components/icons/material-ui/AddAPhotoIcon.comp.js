import React from 'react';
import AddAPhoto from '@material-ui/icons/AddAPhoto';
import AddAPhotoOutlined from '@material-ui/icons/AddAPhotoOutlined';
import AddAPhotoRounded from '@material-ui/icons/AddAPhotoRounded';
import AddAPhotoSharp from '@material-ui/icons/AddAPhotoSharp';
import AddAPhotoTwoTone from '@material-ui/icons/AddAPhotoTwoTone';
import {IconTypes} from "./icon.props";

const validStyleMap = {
  'filled': AddAPhoto,
  'outlined': AddAPhotoOutlined,
  'rounded': AddAPhotoRounded,
  'two tone': AddAPhotoTwoTone,
  'sharp': AddAPhotoSharp,
};

class AddAPhotoIcon extends React.Component {
  render() {
    const { fontSize, style, color } = this.props;
    return React.createElement(validStyleMap[style] || validStyleMap['filled'], {fontSize, color: color || 'inherit'});
  }
}

AddAPhotoIcon.propTypes = IconTypes;

AddAPhotoIcon.defaultProps = {
  doNotUseInFlows: true,
  style: 'filled',
  fontSize: 'default',
  color: 'inherit',
};

export default AddAPhotoIcon;
