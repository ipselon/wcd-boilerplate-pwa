import PropTypes from 'prop-types';

export const ButtonTypes = {
  /**
   * Button label text
   */
  label: PropTypes.string,
  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['', 'text', 'outlined', 'contained']),
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['', 'default', 'inherit', 'primary', 'secondary']),
  /**
   * If true, the button will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * An array of the elements placed after the button label. Only the first item is picked.
   */
  endIcon: PropTypes.arrayOf(PropTypes.element),
  /**
   * An array of the elements placed before the button label. Only the first item is picked.
   */
  startIcon: PropTypes.arrayOf(PropTypes.element),
  /**
   * The size of the button. `small` is equivalent to the dense button styling.
   */
  size: PropTypes.oneOf(['', 'small', 'medium', 'large']),
  /**
   * If true, the button will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,
  /**
   * The URL to link to when the button is clicked. If defined, an a element will be used as the root node.
   */
  href: PropTypes.string,
  /**
   * If true the circular progress is shown and button is disabled.
   */
  loading: PropTypes.bool,
  /*
   * Triggered when the user click on the button
   *
   * @param {ButtonOnClickTypes}
   */
  onClick: PropTypes.func
};

export const ButtonOnClickTypes = {
};
