import PropTypes from 'prop-types';
import { ColorTypes } from '../../common-props/color.props';
import { SizingTypes } from '../../common-props/sizing.props';
import { SpacingTypes } from '../../common-props/spacing.props';
import { BordersTypes } from '../../common-props/borders.props';
import { DisplayTypes } from '../../common-props/display.props';
import { FlexboxTypes } from '../../common-props/flexbox.props';
import { PositionsTypes } from '../../common-props/positions.props';
import { TypographyTypes } from '../../common-props/typography.props';

export const BoxTypes = {
  /**
   * If true then the component's instance will not be allowed to use in flows,
   * and you will not see the instance name in the pages instances list
   */
  doNotUseInFlows: PropTypes.bool,
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
  /**
   * Manages the layout, alignment, and sizing of grid columns, navigation, components,
   * and more with a full suite of responsive Flexbox utilities.
   */
  flexbox: PropTypes.shape(FlexboxTypes),
  /**
   * Shorthand utilities for quickly configuring the position of an element.
   */
  positions: PropTypes.shape(PositionsTypes),
  /**
   * Shadow depth. It accepts values between 0 and 24 inclusive.
   */
  boxShadow: PropTypes.oneOf([
    '0', '1', '2', '3',
    '4', '5', '6', '7',
    '8', '9', '10', '11',
    '12', '13', '14', '15',
    '16', '17', '18', '19',
    '20', '21', '22', '23',
    '24'
  ]),
  // Text utilities to control alignment, wrapping, weight, and more.
  typography: PropTypes.shape(TypographyTypes),
  // A list of the components that will be placed inside the Box component. Increase the array to have more items.
  content: PropTypes.arrayOf(PropTypes.element),
};
