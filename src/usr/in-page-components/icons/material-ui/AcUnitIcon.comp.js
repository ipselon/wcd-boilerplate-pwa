import React from 'react';
import PropTypes from 'prop-types';
import AcUnit from '@material-ui/icons/AcUnit';
import AcUnitOutlined from '@material-ui/icons/AcUnitOutlined';
import AcUnitRounded from '@material-ui/icons/AcUnitRounded';
import AcUnitSharp from '@material-ui/icons/AcUnitSharp';
import AcUnitTwoTone from '@material-ui/icons/AcUnitTwoTone';

class AcUnitIcon extends React.Component {
  render() {
    const { fontSize, style, color } = this.props;
    return React.createElement(validStyleMap[style] || validStyleMap['filled'], {fontSize, color});
  }
}

const validStyleMap = {
  'filled': AcUnit,
  'outlined': AcUnitOutlined,
  'rounded': AcUnitRounded,
  'two tone': AcUnitTwoTone,
  'sharp': AcUnitSharp,
};

AcUnitIcon.propTypes = {
  /**
   * If true then the component's instance will not be allowed to use in flows,
   * and you will not see the instance name in the pages instances list
   */
  doNotUseInFlows: PropTypes.bool,
  // Icon drawing style.
  style: PropTypes.oneOf([
    'filled', 'outlined', 'rounded', 'two tone', 'sharp'
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

AcUnitIcon.defaultProps = {
  doNotUseInFlows: true,
  style: 'filled',
  fontSize: 'default',
  color: 'inherit',
};

export default AcUnitIcon;
