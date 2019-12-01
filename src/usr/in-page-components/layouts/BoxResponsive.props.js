import PropTypes from 'prop-types';
import { ColorTypes } from '../../common-props/color.props';
import { SizingTypes } from '../../common-props/sizing.props';
import { SpacingTypes } from '../../common-props/spacing.props';
import { BordersTypes } from '../../common-props/borders.props';
import { DisplayTypes } from '../../common-props/display.props';

export const BoxResponsiveTypes = {
  /**
   * If true then the component's instance will not be allowed to use in flows,
   * and you will not see the instance name in the pages instances list
   */
  doNotUseInFlows: PropTypes.bool,
  /**
   * A list of the styles groups applied to different screen sizes accordingly.
   * Reload the entire page to see the changes.
   * The changes are not applied immediately due to the JSS nature of the Box component.
   */
  stylesByScreenSize: PropTypes.arrayOf(PropTypes.shape({
    /**
     * A screen size breakpoint id.
     * Find the real size value in the application settings in LivePreview.
     */
    breakpoint: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    /**
     * A groups of styles that are applied for the selected breakpoint.
     * Reload the entire page to see the changes.
     * The changes are not applied immediately due to the JSS nature of the Box component.
     */
    styling: PropTypes.shape({
      // Sets style to element's border
      borders: PropTypes.shape(BordersTypes),
      // Toggle the display value of components
      display: PropTypes.shape(DisplayTypes),
      // Sets the color of the component
      palette: PropTypes.shape({
        color: PropTypes.shape(ColorTypes),
        backgroundColor: PropTypes.shape(ColorTypes),
      }),
      /**
       * Easily make an element as wide or as tall (relative to its parent) with the width and height utilities.
       */
      sizing: PropTypes.shape(SizingTypes),
      /**
       * A range of shorthand responsive margin and padding utility classes to modify an element’s appearance.
       */
      spacing: PropTypes.shape(SpacingTypes),
    }),
  })),
  // A list of the components that will be placed inside the Box component. Increase the array to have more items.
  content: PropTypes.arrayOf(PropTypes.element),
};
