import PropTypes from 'prop-types';
import { ColorTypes } from '../../common-props/color.props';
import { SizingTypes } from '../../common-props/sizing.props';
import { SpacingTypes } from '../../common-props/spacing.props';

export const BoxTypes = {
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
      // Set style to element's border
      borders: PropTypes.shape({
        /**
         * The border-width CSS property sets the width of an element's border.
         * When the value is specified, it applies the same width to all four sides.
         */
        border: PropTypes.number,
        // The border-top-width CSS property sets the width of the top border of an element
        borderTop: PropTypes.number,
        // The border-right-width CSS property sets the width of the right border of an element.
        borderRight: PropTypes.number,
        // The border-bottom-width CSS property sets the width of the bottom border of an element.
        borderBottom: PropTypes.number,
        // The border-left-width CSS property sets the width of the left border of an element.
        borderLeft: PropTypes.number,
        // The border-color CSS property sets the color of an element's border.
        borderColor: PropTypes.shape(ColorTypes),
        /**
         * The border-radius CSS property rounds the corners of an element's outer border edge.
         * You can set a single radius to make circular corners, or two radii to make elliptical corners.
         * Use a string value of the border radius to set units: 10% 30% 50% 70%
         */
        borderRadius: PropTypes.string,
      }),
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
