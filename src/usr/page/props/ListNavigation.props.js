import PropTypes from 'prop-types';

export const ListItemTypes = {
  // The list item id.
  id: PropTypes.string,
  url: PropTypes.string,
  selected: PropTypes.bool,
  disabled: PropTypes.bool,
  expanded: PropTypes.bool,
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
  /**
   * Nested list items
   */
  childrenItems: PropTypes.arrayOf(PropTypes.shape({
    // The list item id.
    id: PropTypes.string,
    url: PropTypes.string,
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
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
};

export const ListNavigationTypes = {
  properties: PropTypes.shape({
    /**
     * If true, compact vertical padding designed for keyboard and mouse input will be used.
     */
    dense: PropTypes.bool,
    /**
     * The list of actions.
     */
    items: PropTypes.arrayOf(PropTypes.shape(ListItemTypes)),
  }),
  /**
   * An icons elements array
   */
  icons: PropTypes.arrayOf(PropTypes.node),
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
    url: PropTypes.string,
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
    url: PropTypes.string,
  }),
};
