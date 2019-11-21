import PropTypes from 'prop-types';

export const validGridNumbersMap = {
  'false': false,
  'auto': 'auto',
  'true': true,
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
  '11': 11,
  '12': 12
};

export const GridCellTypes = {
  /**
   * If true then the component's instance will not be allowed to use in flows,
   * and you will not see the instance name in the pages instances list
   */
  doNotUseInFlows: PropTypes.bool,
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the lg breakpoint and wider screens if not overridden.
   */
  lg: PropTypes.oneOf([
    'false', 'auto', 'true', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'
  ]),
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the md breakpoint and wider screens if not overridden.
   */
  md: PropTypes.oneOf([
    'false', 'auto', 'true', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'
  ]),
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the sm breakpoint and wider screens if not overridden.
   */
  sm: PropTypes.oneOf([
    'false', 'auto', 'true', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'
  ]),
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the xl breakpoint and wider screens if not overridden.
   */
  xl: PropTypes.oneOf([
    'false', 'auto', 'true', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'
  ]),
  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the xs breakpoint and wider screens if not overridden.
   */
  xs: PropTypes.oneOf([
    'false', 'auto', 'true', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'
  ]),
  // If true, it sets min-width: 0 on the item.
  zeroMinWidth: PropTypes.bool,
  // Content of the cell
  content: PropTypes.element,
};