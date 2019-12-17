import PropTypes from 'prop-types';

export const IconTypes = {
  /**
   * If true then the component's instance will not be allowed to use in flows,
   * and you will not see the instance name in the pages instances list
   */
  doNotUseInFlows: PropTypes.bool,
  // Icon drawing style.
  style: PropTypes.oneOf([
    '', 'filled', 'outlined', 'rounded', 'two tone', 'sharp'
  ]),
  // The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
  fontSize: PropTypes.oneOf([
    'inherit', 'default', 'small', 'large'
  ]),
  // The color of the component. It supports those theme colors that make sense for this component.
  color: PropTypes.oneOf([
    '', 'inherit', 'primary', 'secondary', 'action', 'error', 'disabled'
  ]),
};
