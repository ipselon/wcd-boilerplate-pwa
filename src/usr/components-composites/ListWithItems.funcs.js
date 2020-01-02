/**
 * This function is intended for use with the ListWithItems component.
 *
 * @functionTypes {ListWithItemsOnItemClickTypes from ./ListWithItems.props.js}
 */
export const handleOnItemClick = options => dispatch => {
  if (options) {
    const {
      id,
      primaryText,
      secondaryText,
      href,
      childrenItems,
      disabled,
      divider,
      iconIndex
    } = options;
    dispatch({
      selectedItemId: id, selectedItem: options
    });
  }
};

/**
 * This function is intended for use with the ListWithItems component.
 *
 * @functionTypes {ListWithItemsOnItemToggleExpandTypes from ./ListWithItems.props.js}
 */
export const toggleItemById = options => dispatch => {
  if (options) {
    const { toggledItem, expandedMap } = options;
    if (toggledItem) {
      const newExpandedMap = { ...expandedMap };
      newExpandedMap[toggledItem.id] = !newExpandedMap[toggledItem.id];
      dispatch({expandedMap: newExpandedMap});
    }
  }
};
