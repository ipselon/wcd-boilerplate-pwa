/**
 * This function is intended for use with the ListWithItems component.
 *
 * @functionTypes {ListWithItemsOnItemClickTypes from ./ListWithItems.props.js}
 */
export const selectItemById = options => dispatch => {
  if (options) {
    const { clickedItem } = options;
    dispatch('selectedId', clickedItem.id);
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
      dispatch('expandedMap', newExpandedMap);
    }
  }
};
