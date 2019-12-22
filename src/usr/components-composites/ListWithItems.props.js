import PropTypes from 'prop-types';

export const ListWithItemsTypes = {
  /**
   * The array of the data objects.
   */
  listItems: PropTypes.arrayOf(PropTypes.shape({
    // The list item id.
    id: PropTypes.string,
    // The list item primary text
    primaryText: PropTypes.string,
    // The list item secondary text
    secondaryText: PropTypes.string,
    /**
     * It is used for creating an URL link in the list item instead of a button.
     */
    href: PropTypes.string,
    /**
     * Add JSON description of the nested list items.
     * The structure of each child should be equal to the parent list item.
     */
    childrenListItems: PropTypes.array,
    // If true, the list item will be selected
    selected: PropTypes.bool,
    // If true, the list item will be disabled.
    disabled: PropTypes.bool,
    /**
     * If true, compact vertical padding designed for keyboard and mouse input will be used.
     */
    dense: PropTypes.bool,
    // If true, the left and right padding is removed.
    disableGutters: PropTypes.bool,
    // If true, a 1px light border is added to the bottom of the list item.
    divider: PropTypes.bool,
    /**
     * The index value if the icon in the icons array property
     */
    iconIndex: PropTypes.number,
  })),
  /**
   * An array of icons that can be used in the list item referenced by index number value in the iconIndex property.
   */
  icons: PropTypes.arrayOf(PropTypes.node),
  /*
   * Triggered when the user click on the list item.
   *
   * @param {ListWithItemsOnItemClickTypes}
   */
  onItemClick: PropTypes.func,
};

export const ListWithItemsOnItemClickTypes = {
  // It is a required field and should be unique.
  id: PropTypes.string.isRequired,
  //
  primaryText: PropTypes.string,
  //
  secondaryText: PropTypes.string,
  // It is used for creating an URL in the list item instead of button.
  href: PropTypes.string,
};
