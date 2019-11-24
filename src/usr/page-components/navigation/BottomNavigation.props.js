import PropTypes from 'prop-types';

export const BottomNavigationTypes = {
  /**
   * If true, all navigation items will show their labels.
   * By default, only the selected navigation item will show its label.
   */
  showLabels: PropTypes.bool,
  // The navigation key of the currently selected navigation item
  activeNavigationKey: PropTypes.string,
  // The list of navigation items. Use not more than 4-5 items due to look good in the mobile resolution.
  navigationItems: PropTypes.arrayOf(PropTypes.shape({
    // The navigation key
    navigationKey: PropTypes.string,
    // The navigation item label. Shown only when showLabels is true.
    label: PropTypes.string,
    // The navigation icon.
    icon: PropTypes.element,
    // If true, the button will be disabled.
    disabled: PropTypes.bool,
  })),
  /*
   * Triggered when the user click on the navigation item. Pass the navigation key value.
   *
   * @param {BottomNavigationChangeTypes}
   */
  onChange: PropTypes.func
};

export const BottomNavigationChangeTypes = {
  // The currently selected navigation key value.
  activeNavigationKey: PropTypes.string,
};
