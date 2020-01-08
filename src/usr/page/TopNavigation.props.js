import PropTypes from 'prop-types';
import { TypographyTypes } from './props/typography.props';

export const TopNavigationTypes = {
  /**
   * A mobile view navigation controls
   */
  mobileView: PropTypes.shape({
    /**
     * A list of controls shown in the mobile view
     */
    controls: PropTypes.arrayOf(PropTypes.element),
  }),
  /**
   * A desktop view navigation controls
   */
  desktopView: PropTypes.shape({
    /**
     * The list of controls in the left side area
     */
    leftControls: PropTypes.arrayOf(PropTypes.element),
    /**
     * The list of controls in the right side area
     */
    rightControls: PropTypes.arrayOf(PropTypes.element),
  }),
  /**
   * Title of the top navigation
   */
  title: PropTypes.shape(TypographyTypes),
};
