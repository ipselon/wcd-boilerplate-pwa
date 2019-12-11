import PropTypes from 'prop-types';

export const ButtonGroupTypes = {
  /**
   * If true then the component's instance will not be allowed to use in flows,
   * and you will not see the instance name in the pages instances list
   */
  doNotUseInFlows: PropTypes.bool,
  /**
   * A list of buttons in the group.
   */
  buttons: PropTypes.arrayOf(PropTypes.shape({
    // The unique id of the button
    id: PropTypes.string.isRequired,
    /**
     * Button label text
     */
    label: PropTypes.string,
    /**
     * The URL to link to when the button is clicked. If defined, an a element will be used as the root node.
     */
    href: PropTypes.string,
    /**
     * If true the circular progress is shown and button is disabled.
     */
    loading: PropTypes.bool,
    /**
     * If true, the button will be disabled.
     */
    disabled: PropTypes.bool,
  })),
  // The icons list, each item corresponds to the button item in the group by index in the array
  icons: PropTypes.arrayOf(PropTypes.shape({
    /**
     * An array of the elements placed after the button label. Only the first item is picked.
     */
    endIcon: PropTypes.arrayOf(PropTypes.element),
    /**
     * An array of the elements placed before the button label. Only the first item is picked.
     */
    startIcon: PropTypes.arrayOf(PropTypes.element),
  })),
  /**
   * The variant to use.
   */
  variant: PropTypes.oneOf(['', 'text', 'outlined', 'contained']),
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(['', 'default', 'inherit', 'primary', 'secondary']),
  /**
   * If true, all buttons will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * The size of the button group. `small` is equivalent to the dense button styling.
   */
  size: PropTypes.oneOf(['', 'small', 'medium', 'large']),
  /**
   * If true, the button group will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,
  /*
   * Triggered when the user clicks on one of the buttons in the group
   *
   * @param {ButtonGroupOnClickTypes}
   */
  onClick: PropTypes.func
};

export const ButtonGroupOnClickTypes = {
  // The clicked button id
  id: PropTypes.string,
  /**
   * Button label text
   */
  label: PropTypes.string,
  /**
   * The URL to link to when the button is clicked. If defined, an a element will be used as the root node.
   */
  href: PropTypes.string,
};
