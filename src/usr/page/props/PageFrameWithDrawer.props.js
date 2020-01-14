import PropTypes from 'prop-types';
import { PageHelmetTypes } from './PageHelmet.props';
import { AuthUserTypes } from './AuthUser.props';
import { ListNavigationTypes } from './ListNavigation.props';
import { TypographyTypes } from './Typography.props';
import { BottomNavigationTypes } from './BottomNavigation.props';
import { TopNavigationTypes } from './TopNavigation.props';
import { ColorTypes } from './Color.props';

export const TopTypes = {
  /**
   * Title of the top navigation
   */
  title: PropTypes.shape(TypographyTypes),
  /**
   * Sets the custom color of the navigation bar
   */
  palette: PropTypes.shape({
    color: PropTypes.shape(ColorTypes),
    backgroundColor: PropTypes.shape(ColorTypes),
  }),
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
   * A navigation in the left-side drawer.
   * If there is no items, the drawer will be removed.
   */
  navigation: PropTypes.shape(TopNavigationTypes),
};

export const LeftTypes = {
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
   * A navigation in the left-side drawer.
   * If there is no items, the drawer will be removed.
   */
  navigation: PropTypes.shape(ListNavigationTypes),
};

export const BottomTypes = {
  navigation: PropTypes.shape(BottomNavigationTypes),
};

export const MainTypes = {
  /**
   * Sets the custom background color of the main area
   */
  palette: PropTypes.shape({
    color: PropTypes.shape(ColorTypes),
    backgroundColor: PropTypes.shape(ColorTypes),
  }),
  /**
   * Set the max-width to match the min-width of the current breakpoint.
   * This is useful if you'd prefer to design for a fixed set of sizes instead of trying to
   * accommodate a fully fluid viewport.
   * It's fluid by default.
   */
  fixed: PropTypes.bool,
  /**
   * Determine the max-width of the container.
   * The container width grows with the size of the screen.
   * Set disableMaxWidth to true to disable maxWidth.
   */
  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  // Set disableMaxWidth to true to disable maxWidth.
  disableMaxWidth: PropTypes.bool,
  /**
   * Defines the space between cells.
   */
  spacing: PropTypes.oneOf([
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'
  ]),
  content: PropTypes.shape({
    /**
     * The content cells of the main area in the page
     */
    cells: PropTypes.arrayOf(PropTypes.element),
  }),
  footer: PropTypes.shape({
    showOnMobile: PropTypes.bool,
    /**
     *
     */
    cells: PropTypes.arrayOf(PropTypes.element),
  }),
  /**
   * Hidden elements, useful for dialogs.
   */
  hidden: PropTypes.arrayOf(PropTypes.node),
};

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
  top: PropTypes.shape(TopTypes),
  /**
   *
   */
  left: PropTypes.shape(LeftTypes),
  /**
   *
   */
  bottom: PropTypes.shape(BottomTypes),
  /**
   * The main area in the page
   */
  main: PropTypes.shape(MainTypes),
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
   * @functionTypes {OnLeftNavigationClickTypes}
   */
  onLeftNavigationClick: PropTypes.func,
  /**
   * Triggered when the user clicks
   *
   * @functionTypes {OnLeftNavigationToggleExpandTypes}
   */
  onLeftNavigationToggleExpand: PropTypes.func,
  /**
   * Triggered when the user clicks
   *
   * @functionTypes {OnBottomNavigationClickTypes}
   */
  onBottomNavigationClick: PropTypes.func,

};

export const OnTopNavigationClickTypes = {
  argument: PropTypes.shape({
    id: PropTypes.string,
    href: PropTypes.string,
    /**
     * The navigation items array
     */
    top: PropTypes.shape(TopTypes),
  }),
};

export const OnLeftNavigationClickTypes = {
  argument: PropTypes.shape({
    id: PropTypes.string,
    href: PropTypes.string,
    /**
     * The list of actions.
     */
    left: PropTypes.shape(LeftTypes),
  }),
};

export const OnLeftNavigationToggleExpandTypes = {
  argument: PropTypes.shape({
    id: PropTypes.string,
    /**
     * The list of actions.
     */
    left: PropTypes.shape(LeftTypes),
  }),
};

export const OnBottomNavigationClickTypes = {
  argument: PropTypes.shape({
    id: PropTypes.string,
    bottom: PropTypes.shape(BottomTypes),
  }),
};

export const SetActiveTopNavigationByIdTypes = {
  argument: PropTypes.shape({
    id: PropTypes.string,
    href: PropTypes.string,
    /**
     * The navigation items array
     */
    top: PropTypes.shape(TopTypes),
  }),
  dispatch: PropTypes.shape({
    top: PropTypes.shape(TopTypes),
  }),
};

export const SetSelectedLeftNavigationByIdTypes = {
  argument: PropTypes.shape({
    id: PropTypes.string,
    href: PropTypes.string,
    /**
     * The navigation items array
     */
    left: PropTypes.shape(LeftTypes),
  }),
  dispatch: PropTypes.shape({
    left: PropTypes.shape(LeftTypes),
  }),
};

export const ToggleExpandLeftNavigationByIdTypes = {
  argument: PropTypes.shape({
    id: PropTypes.string,
    href: PropTypes.string,
    /**
     * The navigation items array
     */
    left: PropTypes.shape(LeftTypes),
  }),
  dispatch: PropTypes.shape({
    left: PropTypes.shape(LeftTypes),
  }),
};
