import PropTypes from 'prop-types';

export const validSpacingNumbersMap = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': 10,
};

export const GridContainerTypes = {
  /**
   * If true then the component's instance will not be allowed to use in flows,
   * and you will not see the instance name in the pages instances list
   */
  doNotUseInFlows: PropTypes.bool,
  /**
   * Defines the space between the type item component.
   */
  spacing: PropTypes.oneOf([
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
  ]),
  // Defines the align-content style property. It's applied for all screen sizes.
  alignContent: PropTypes.oneOf([
    'stretch', 'center', 'flex-start', 'flex-end', 'space-between', 'space-around'
  ]),
  // Defines the align-items style property. It's applied for all screen sizes.
  alignItems: PropTypes.oneOf([
    'flex-start', 'center', 'flex-end', 'stretch', 'baseline'
  ]),
  // Defines the flex-direction style property. It is applied for all screen sizes.
  direction: PropTypes.oneOf([
    'row', 'row-reverse', 'column', 'column-reverse'
  ]),
  // Defines the justify-content style property. It is applied for all screen sizes.
  justify: PropTypes.oneOf([
    'flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'
  ]),
  // Defines the flex-wrap style property. It's applied for all screen sizes.
  wrap: PropTypes.oneOf([
    'nowrap', 'wrap', 'wrap-reverse'
  ]),
  // Content - a list of the cells in the grid.
  content: PropTypes.arrayOf(PropTypes.element),
};