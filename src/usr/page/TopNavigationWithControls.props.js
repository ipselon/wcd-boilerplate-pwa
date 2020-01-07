import PropTypes from 'prop-types';
import { TypographyTypes } from './props/typography.props';

export const TopAreaControlTypes = {
  /**
   * Action control id
   */
  id: PropTypes.string,
  /**
   * Action control type
   */
  controlType: PropTypes.oneOf(['iconButton', 'button']),
  /**
   * Works when the controlType is "button"
   */
  button: PropTypes.shape({
    /**
     * Action control label
     */
    label: PropTypes.string,
    /**
     * An icon placed before the button label.
     */
    startIconIndex: PropTypes.number,
    /**
     * An icon placed after the button label.
     */
    endIconIndex: PropTypes.number,
  }),
  /**
   * Works when the controlType is "iconButton"
   */
  iconButton: PropTypes.shape({
    /**
     * An icon found in the icons array by index
     */
    iconIndex: PropTypes.number,
  }),
};

export const TopNavigationWithControlsTypes = {
  /**
   * Set the controls props by their ids
   */
  byId: PropTypes.shape({
    /**
     * An array of the ids of the controls that will show the loading indicator.
     * The controls will be disabled.
     */
    loadingIds: PropTypes.arrayOf(PropTypes.string),
    /**
     * An array of the ids of the controls that should be disabled.
     */
    disabledIds: PropTypes.arrayOf(PropTypes.string),
  }),
  /**
   * A dropdown menu items for mobile view
   */
  mobile: PropTypes.shape({}),
  /**
   * A desktop navigation controls view
   */
  desktop: PropTypes.shape({
    /**
     * The size of all controls on the toolbar
     */
    controlsSize: PropTypes.oneOf(['', 'small', 'medium', 'large']),
    /**
     * The list of controls in the left side area of the toolbar
     */
    leftArea: PropTypes.arrayOf(PropTypes.shape(TopAreaControlTypes)),
    /**
     * The list of controls in the right side area of the toolbar
     */
    rightArea: PropTypes.arrayOf(PropTypes.shape(TopAreaControlTypes)),
  }),
  /**
   * An array of icons that can be used in the control referenced by
   * index number value in the index property.
   */
  icons: PropTypes.arrayOf(PropTypes.node),
  /**
   * Title of the top navigation
   */
  title: PropTypes.shape(TypographyTypes),
  /**
   * Triggered when the user clicks on a control
   *
   * @functionTypes {TopNavigationWithControlsOnClickTypes}
   */
  onControlClick: PropTypes.func
};

export const TopNavigationWithControlsOnClickTypes = {
  argument: PropTypes.shape({
    /**
     * An id of the control
     */
    id: PropTypes.string,
  })
};