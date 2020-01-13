import PropTypes from 'prop-types';

export const TopNavigationItemTypes = {
  // The navigation item id
  id: PropTypes.string,
  // The navigation item label. Shown only when showLabels is true.
  label: PropTypes.string,
  /**
   *
   */
  href: PropTypes.string,
  /**
   * If true, the item will be disabled
   */
  disabled: PropTypes.bool,
  /**
   * If true, the item will be active.
   */
  active: PropTypes.bool,
};

export const TopNavigationTypes = {
  /**
   * If is set, used as the title of the mobile menu navigation when there is no active navigation item.
   */
  menuLabel: PropTypes.string,
  /**
   * Size of the buttons in the navigation toolbar
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * The navigation items array
   */
  items: PropTypes.arrayOf(PropTypes.shape(TopNavigationItemTypes)),
};
