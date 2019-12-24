import PropTypes from 'prop-types';

export const BottomNavigationActionTypes = {
  // The navigation item id
  id: PropTypes.string,
  // The navigation item label. Shown only when showLabels is true.
  label: PropTypes.string,
  // An icon index from the icons array property
  iconIndex: PropTypes.number,
};

export const BottomNavigationWithActionsTypes = {
  /**
   * If true, all navigation items will show their labels.
   * By default, only the selected navigation item will show its label.
   */
  showLabels: PropTypes.bool,
  /**
   * Sets the active action by id.
   */
  activeActionId: PropTypes.string,
  /**
   * An array of actions in the bottom navigation.
   * Use not more than 4-5 items due to look good in the mobile resolution.
   */
  actions: PropTypes.arrayOf(PropTypes.shape(BottomNavigationActionTypes)),
  /**
   * An array of icons
   */
  icons: PropTypes.arrayOf(PropTypes.node),
  /*
   * Triggered when the user click on the navigation item.
   *
   * @functionTypes {BottomNavigationWithActionsOnClickTypes}
   */
  onClick: PropTypes.func
};

export const BottomNavigationWithActionsOnClickTypes = {
  /**
   * An object passed as the first function argument
   */
  argument: PropTypes.shape({
    /**
     * The currently selected navigation item.
     */
    selectedAction: PropTypes.shape(BottomNavigationActionTypes),
  }),
  /**
   * Dispatch activeActionId
   */
  activeActionId: PropTypes.string,
};
