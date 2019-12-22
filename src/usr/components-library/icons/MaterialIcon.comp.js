import React from 'react';
import Icon from '@material-ui/core/Icon';
import { MaterialIconTypes } from './MaterialIcon.props';
import pickWithValues from '../common-props/utils/pickWithValues';

class MaterialIcon extends React.Component {

  render() {
    const { iconName, fontSize, color } = this.props;
    return <Icon {...pickWithValues({fontSize, color})}>{iconName || 'star'}</Icon>;
  }
}

MaterialIcon.propTypes = MaterialIconTypes;

MaterialIcon.defaultProps = {
  doNotUseInFlows: true,
  iconName: 'star',
  fontSize: 'default',
  color: 'inherit',
};

export default MaterialIcon;
