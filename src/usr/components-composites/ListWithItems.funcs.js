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
      childrenItems, disabled, divider, iconIndex, selectedItem: options
    });
    dispatch({
      id, primaryText, secondaryText, href
    });
    // dispatch('id', id);
    // dispatch('primaryText', primaryText);
    // dispatch('secondaryText', secondaryText);
    // dispatch('href', href);
    // dispatch('childrenItems', childrenItems);
    // dispatch('disabled', disabled);
    // dispatch('divider', divider);
    // dispatch('iconIndex', iconIndex);
    // dispatch('selectedItem', options);
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
