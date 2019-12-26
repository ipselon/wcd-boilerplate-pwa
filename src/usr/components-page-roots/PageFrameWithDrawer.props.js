import PropTypes from 'prop-types';
import { TypographyComponentTypes } from 'usr/library/props/typography.props';
import { PageHelmetTypes } from 'usr/library/components/PageHelmet.props';
import { PageParametersReceiverTypes } from 'usr/library/components/PageParametersReceiver.props';

export const PageFrameWithDrawerTypes = {
  /**
   * Page header properties
   */
  pageHeader: PropTypes.shape(PageHelmetTypes),
  /**
   * It is used to receive the page parameters in the flow.
   */
  pageParameters: PropTypes.shape(PageParametersReceiverTypes),
  /**
   * If true, then the frame will have a drawer with the navigation list inside
   */
  drawerIsAvailable: PropTypes.bool,
  /**
   * If true, the application bottom bar is available to use.
   */
  bottomBarIsAvailable: PropTypes.bool,
  /**
   * If true, the footer will be available on the page
   */
  footerIsAvailable: PropTypes.bool,
  /**
   * Sets drawer open or closed. If true, the drawer is open
   */
  drawerOpen: PropTypes.bool,
  /**
   * Title of the top application bar
   */
  title: PropTypes.shape(TypographyComponentTypes),
  // Drawer
  drawer: PropTypes.shape({
    // The width of the drawer. Should be a string value with the width units.
    width: PropTypes.string,
    // Put the components inside the drawer.
    child: PropTypes.element,
  }),
  // Top application bar. It has fixed position, and is shown in any resolution.
  topBar: PropTypes.shape({
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: PropTypes.oneOf([
      'default', 'inherit', 'primary', 'secondary'
    ]),
    // Shadow depth. It accepts values between 0 and 24 inclusive.
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
     * The content of the bottom bar. Usually the toolbar is placed here.
     */
    child: PropTypes.node,
  }),
  /**
   * The bottom bar appears in mobile resolution only.
   */
  bottomBar: PropTypes.shape({
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color: PropTypes.oneOf([
      'default', 'inherit', 'primary', 'secondary'
    ]),
    /**
     * The content of the bottom bar. Usually the bottom navigation is placed here.
     */
    child: PropTypes.node,
  }),
  /**
   * The main area in the page
   */
  content: PropTypes.shape({
    /**
     * The content of the main area in the page
     */
    child: PropTypes.element,
  }),
  /**
   * The footer appears only in the desktop resolutions.
   */
  footer: PropTypes.shape({
    /**
     * The content of the footer area
     */
    child: PropTypes.element,
  }),
  /**
   * Hidden elements, useful for dialogs, hidden utilities, and etc.
   */
  hidden: PropTypes.arrayOf(PropTypes.node),
  /*
   * Triggered when the component receives the page parameters.
   * It is used to pass the page parameters on the flow to the nested components.
   *
   * @functionTypes {PageParametersReceiverOnReceivedTypes from ../components-library/misc/PageParametersReceiver.props}
   */
  onPageParametersReceived: PropTypes.func,
  /**
   * Triggered when the user clicks the drawer menu button at the top application bar.
   */
  onDrawerOpenClick: PropTypes.func,
  /**
   * Triggered when the user clicks on the close button in the opened drawer.
   */
  onDrawerCloseClick: PropTypes.func,
};
