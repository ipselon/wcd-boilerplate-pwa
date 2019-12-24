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
   * Add JSON description of the nested list items.
   * The structure of each child should be equal to the parent list item.
   */
  childrenItems: PropTypes.array,
  // If true, the list item will be disabled.
  disabled: PropTypes.bool,
  // If true, a 1px light border is added to the bottom of the list item.
  divider: PropTypes.bool,
  /**
   * The index value if the icon in the icons array property
   */
  iconIndex: PropTypes.number,
};

export const ListWithItemsTypes = {
  /**
   * If true, compact vertical padding designed for keyboard and mouse input will be used.
   */
  dense: PropTypes.bool,
  /**
   * If true, the left and right padding is removed in each item.
   */
  disableGutters: PropTypes.bool,
  /**
   * Sets the selected list item by id.
   */
  selectedId: PropTypes.string,
  /**
   * Sets expanded map list item by id. The map structure: {id1: true, id2: true}
   */
  expandedMap: PropTypes.object,
  /**
   * The list of items.
   */
  items: PropTypes.arrayOf(PropTypes.shape(ListItemTypes)),
  /**
   * An array of icons that can be used in the list item referenced by index number value in the iconIndex property.
   */
  icons: PropTypes.arrayOf(PropTypes.node),
  /*
   * Triggered when the user clicks on the list item.
   *
   * @functionTypes {ListWithItemsOnItemClickTypes}
   */
  onItemClick: PropTypes.func,
  /*
   * Triggered when the user toggles the list item with children.
   *
   * @functionTypes {ListWithItemsOnItemToggleExpandTypes}
   */
  onItemToggleExpand: PropTypes.func,
};

export const ListWithItemsOnItemClickTypes = {
  /**
   * An object passed as the first function argument
   */
  argument: PropTypes.shape({
    /**
     * Clicked item in the list
     */
    clickedItem: PropTypes.shape(ListItemTypes),
  }),
  /**
   * Dispatch selectedId
   */
  selectedId: PropTypes.string,
};

export const ListWithItemsOnItemToggleExpandTypes = {
  /**
   * An object passed as the first function argument
   */
  argument: PropTypes.shape({
    /**
     * Expanded items ids map
     */
    expandedMap: PropTypes.object,
    /**
     * Toggled item in the list
     */
    toggledItem: PropTypes.shape(ListItemTypes),
  }),
  /**
   * Dispatch expandedMap
   */
  expandedMap: PropTypes.object,
};
