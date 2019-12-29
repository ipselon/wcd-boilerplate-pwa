/**
 * This function is intended for use with the BottomNavigationWithActions component.
 *
 * @functionTypes {BottomNavigationWithActionsOnClickTypes from ./BottomNavigationWithActions.props}
 */
export const handleOnClick = options => dispatch => {
  if (options) {
    const { id, label, iconIndex } = options;
    dispatch({
      id,
      label,
      iconIndex,
      selectedAction: options,
    });
    // dispatch('id', id);
    // dispatch('label', label);
    // dispatch('iconIndex', iconIndex);
    // dispatch('selectedAction', options);
  }
};
