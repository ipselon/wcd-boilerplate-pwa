import PropTypes from 'prop-types';

export const IconButtonTypes = {
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['', 'default', 'inherit', 'primary', 'secondary']),
  /**
   * If given, uses a negative margin to counteract the padding on one side
   * (this is often helpful for aligning the left or right side of the icon with content above or below,
   * without ruining the border size and shape).
   */
  edge: PropTypes.oneOf(['', 'start', 'end', 'false']),
  /**
   * If true, the button will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * An array of the elements placed as a child of the button. Only the first item is picked.
   */
  icon: PropTypes.arrayOf(PropTypes.element),
  /**
   * The size of the button. `small` is equivalent to the dense button styling.
   */
  size: PropTypes.oneOf(['', 'small', 'medium']),
  /*
   * Triggered when the user click on the button
   *
   * @param {IconButtonOnClickTypes}
   */
  onClick: PropTypes.func
};

export const IconButtonOnClickTypes = {
};
