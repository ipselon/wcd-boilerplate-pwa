import PropTypes from 'prop-types';

export const ListItemTypes = {
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
   * Nested list items
   */
  childrenItems: PropTypes.arrayOf(PropTypes.shape({
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
    // If true, the list item will be selected.
    selected: PropTypes.bool,
    // If true, the list item will be disabled.
    disabled: PropTypes.bool,
    // If true, a 1px light border is added to the bottom of the list item.
    divider: PropTypes.bool,
    /**
     * The index value of the icon in the icons array property
     */
    iconIndex: PropTypes.number,
  })),
  // If true, the list item will be expanded.
  expanded: PropTypes.bool,
  // If true, the list item will be selected.
  selected: PropTypes.bool,
  // If true, the list item will be disabled.
  disabled: PropTypes.bool,
  // If true, a 1px light border is added to the bottom of the list item.
  divider: PropTypes.bool,
  /**
   * The index value of the icon in the icons array property
   */
  iconIndex: PropTypes.number,
};

export const ListNavigationTypes = {
  /**
   * If true, compact vertical padding designed for keyboard and mouse input will be used.
   */
  dense: PropTypes.bool,
  /**
   * The list of actions.
   */
  items: PropTypes.arrayOf(PropTypes.shape(ListItemTypes)),
};

export const ListWithItemsOnItemClickTypes = {
  /**
   * Clicked item in the list
   */
  argument: PropTypes.shape({
    /**
     *  Dispatches the selected item id.
     */
    id: PropTypes.string,
    /**
     *
     */
    items: PropTypes.arrayOf(PropTypes.shape(ListItemTypes)),
  }),
  dispatch: PropTypes.shape({
    /**
     *  Dispatches the selected item id.
     */
    id: PropTypes.string,
    /**
     *
     */
    items: PropTypes.arrayOf(PropTypes.shape(ListItemTypes)),
  }),
};

export const ListWithItemsOnItemToggleExpandTypes = {
  /**
   * An object passed as the first function argument
   */
  argument: PropTypes.shape({
    /**
     *  Dispatches the selected item id.
     */
    id: PropTypes.string,
    /**
     *
     */
    items: PropTypes.arrayOf(PropTypes.shape(ListItemTypes)),
  }),
  dispatch: PropTypes.shape({
    /**
     * Dispatch expandedMap
     */
    expandedMap: PropTypes.object,
  }),
};
