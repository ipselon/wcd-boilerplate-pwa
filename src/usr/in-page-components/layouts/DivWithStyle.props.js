import PropTypes from 'prop-types';

export const DivWithStyleTypes = {
  /**
   * Inline styles of the component. The object is used as a style property of the div component.
   */
  style: PropTypes.object,
  /**
   *  An array of the placeholders for child components.
   *  Increase array size to put more items.
   */
  content: PropTypes.arrayOf(PropTypes.element),
};
