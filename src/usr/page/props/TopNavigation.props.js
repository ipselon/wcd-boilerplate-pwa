import PropTypes from 'prop-types';

export const TopNavigationItemTypes = {
  // The navigation item id
  id: PropTypes.string,
  url: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  // The navigation item label. Shown only when showLabels is true.
  label: PropTypes.string,
};

export const TopNavigationTypes = {
  properties: PropTypes.shape({
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
  }),
  /**
   * @functionTypes {OnTopNavigationItemClickTypes}
   */
  onTopNavigationItemClick: PropTypes.func,
};

export const OnTopNavigationItemClickTypes = {
  argument: PropTypes.shape({
    id: PropTypes.string,
    url: PropTypes.string,
  }),
};

export const SetActiveTopNavigationByIdTypes = {
  argument: PropTypes.shape({
    id: PropTypes.string,
  }),
  dispatch: PropTypes.shape({
    properties: PropTypes.object,
  }),
};