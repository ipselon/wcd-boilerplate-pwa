/**
 * This function is intended for use with the BottomNavigationWithActions component.
 *
 * @functionTypes {BottomNavigationWithActionsOnClickTypes from ./BottomNavigationWithActions.props}
 */
export const activateById = options => dispatch => {
  const newActions = [];
  if (options) {
    const { selectedAction } = options;
    if (selectedAction) {
      dispatch('activeActionId', selectedAction.id);
    }
  }
};
