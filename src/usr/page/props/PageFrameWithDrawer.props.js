import PropTypes from 'prop-types';
import { PageHelmetTypes } from './PageHelmet.props';
import { AuthUserTypes } from './AuthUser.props';
import { ListItemTypes, ListNavigationTypes } from './ListNavigation.props';
import { TypographyTypes } from './Typography.props';
import { BottomNavigationTypes } from './BottomNavigation.props';
import { TopNavigationTypes } from './TopNavigation.props';

export const PageFrameWithDrawerTypes = {
  /**
   * Page header properties
   */
  pageHeader: PropTypes.shape(PageHelmetTypes),
  /**
   *
   */
  userDetails: PropTypes.shape(AuthUserTypes),
  /**
   * The top area properties
   */
  top: PropTypes.shape({
    /**
     * Title of the top navigation
     */
    title: PropTypes.shape(TypographyTypes),
    /**
     * The color of the navigation bar. It supports those theme colors that make sense for this component.
     */
    color: PropTypes.oneOf([
      'default', 'inherit', 'primary', 'secondary'
    ]),
    // Shadow depth of the navigation bar. It accepts values between 0 and 24 inclusive.
    elevation: PropTypes.oneOf([
      '0', '1', '2', '3',
      '4', '5', '6', '7',
      '8', '9', '10', '11',
      '12', '13', '14', '15',
      '16', '17', '18', '19',
      '20', '21', '22', '23',
      '24'
    ]),
    /**
     *
     */
    navigation: PropTypes.shape(TopNavigationTypes),
  }),
  /**
   *
   */
  left: PropTypes.shape({
    // Drawer
    drawer: PropTypes.shape({
      /**
       * Sets drawer open or closed. If true, the drawer is open
       */
      open: PropTypes.bool,
      /**
       * The width of the drawer.
       * Should be a string value with the width units.
       */
      width: PropTypes.string,
    }),
    /**
     *
     */
    navigation: PropTypes.shape(ListNavigationTypes),
  }),
  /**
   *
   */
  bottom: PropTypes.shape({
    footer: PropTypes.shape({
      showOnMobile: PropTypes.bool,
      /**
       * Defines the space between cells.
       */
      spacing: PropTypes.oneOf([
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
      ]),
      /**
       *
       */
      cells: PropTypes.arrayOf(PropTypes.element),
    }),
    navigation: PropTypes.shape(BottomNavigationTypes),
  }),
  /**
   * The main area in the page
   */
  content: PropTypes.shape({
    /**
     * Defines the space between the content cells.
     */
    spacing: PropTypes.oneOf([
      '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
    ]),
    /**
     * The content cells of the main area in the page
     */
    cells: PropTypes.arrayOf(PropTypes.element),
  }),
  /**
   * Hidden elements, useful for dialogs.
   */
  hidden: PropTypes.arrayOf(PropTypes.node),
  /**
   * An icons elements array
   */
  icons: PropTypes.arrayOf(PropTypes.node),
  /**
   * Triggered when the user clicks on the top navigation item.
   *
   * @functionTypes {OnTopNavigationClickTypes}
   */
  onTopNavigationClick: PropTypes.func,
  /**
   * Triggered when the user clicks
   *
   * @functionTypes {}
   */
  onLeftNavigationClick: PropTypes.func,
  /**
   * Triggered when the user clicks
   *
   * @functionTypes {}
   */
  onLeftNavigationToggleExpand: PropTypes.func,
};

export const OnTopNavigationClickTypes = {
  argument: PropTypes.shape({
    id: PropTypes.string,
    href: PropTypes.string,
  }),
};

export const OnLeftNavigationClickTypes = {
  argument: PropTypes.shape({
    id: PropTypes.string,
    href: PropTypes.string,
    /**
     * The list of actions.
     */
    items: PropTypes.arrayOf(PropTypes.shape(ListItemTypes)),
  }),
};

export const OnLeftNavigationToggleExpandTypes = {
  argument: PropTypes.shape({
    id: PropTypes.string,
    /**
     * The list of actions.
     */
    items: PropTypes.arrayOf(PropTypes.shape(ListItemTypes)),
  }),
};
