import PropTypes from 'prop-types';

export const ListItemTypes = {
  // The list item id.
  id: PropTypes.string,
  // The list item primary text
  primaryText: PropTypes.string,
  // The list item secondary text
  secondaryText: PropTypes.string,
  /**
   * Nested list items
   */
  childrenItems: PropTypes.arrayOf(PropTypes.shape({
    // The list item id.
    id: PropTypes.string,
    // The list item primary text
    primaryText: PropTypes.string,
    // The list item secondary text
    secondaryText: PropTypes.string,
    // If true, a 1px light border is added to the bottom of the list item.
    divider: PropTypes.bool,
    /**
     * The index value of the icon in the icons array property
     */
    iconIndex: PropTypes.number,
  })),
  // If true, a 1px light border is added to the bottom of the list item.
  divider: PropTypes.bool,
  /**
   * The index value of the icon in the icons array property
   */
  iconIndex: PropTypes.number,
};
