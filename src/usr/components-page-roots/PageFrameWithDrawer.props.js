import PropTypes from 'prop-types';
import { TypographyTypes } from 'usr/components-library/typography/Typography.props';
import { SpacingTypes } from 'usr/components-library/common-props/spacing.props';
import { SizingTypes } from 'usr/components-library/common-props/sizing.props';
import { ContainerTypes } from 'usr/components-library/layouts/Container.props';
import { BottomNavigationTypes } from 'usr/components-library/navigation/BottomNavigation.props';
import { PageHelmetTypes } from 'usr/components-library/misc/PageHelmet.props';
import { PageParametersReceiverTypes } from '../components-library/misc/PageParametersReceiver.props';

export const PageFrameWithDrawerTypes = {
  /**
   * Page header properties
   */
  pageHeader: PropTypes.shape(PageHelmetTypes),
  /**
   * It is used to receive the page parameters in the flow.
   */
  pageParameters: PropTypes.shape(PageParametersReceiverTypes),
  // Drawer
  drawer: PropTypes.shape({
    /**
     * If true, then the frame will have a drawer with the navigation list inside
     */
    available: PropTypes.bool,
    // The width of the drawer. Should be a string value with the width units.
    width: PropTypes.string,
    // Put the components inside the drawer.
    child: PropTypes.element,
  }),
  // Top application bar. It has fixed position, and is shown in any resolution.
  applicationTopBar: PropTypes.shape({
    title: PropTypes.shape(TypographyTypes),
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
  }),
  /**
   * The bottom bar appears in mobile resolution only.
   */
  applicationBottomBar: PropTypes.shape({
    /**
     * If true, the application bottom bar is available to use.
     */
    available: PropTypes.bool,
    /**
     * The bottom navigation is used in the mobile view for quick forwarding.
     */
    bottomNavigation: PropTypes.shape(BottomNavigationTypes),
  }),
  /**
   * The content of the main area in the page
   */
  content: PropTypes.shape({
    /**
     * Content container
     */
    contentContainer: PropTypes.shape(ContainerTypes),
    /**
     * The content container box wrapper
     */
    contentContainerBox: PropTypes.shape({
      /**
       * A range of margin and padding utility classes to modify an element’s appearance.
       */
      spacing: PropTypes.shape(SpacingTypes),
      /**
       * Easily make an element as wide or as tall (relative to its parent) with the width and height utilities.
       */
      sizing: PropTypes.shape(SizingTypes),
    }),
    /**
     * A component to be placed inside content container.
     */
    child: PropTypes.element,
  }),
  /**
   * The footer appears only in the desktop resolutions.
   */
  footer: PropTypes.shape({
    /**
     * If true, the footer will be available on the page
     */
    available: PropTypes.bool,
    /**
     * Footer container
     */
    footerContainer: PropTypes.shape(ContainerTypes),
    /**
     * The footer container box wrapper
     */
    footerContainerBox: PropTypes.shape({
      /**
       * Easily make an element as wide or as tall (relative to its parent) with the width and height utilities.
       */
      sizing: PropTypes.shape(SizingTypes),
      /**
       * A range of margin and padding utility classes to modify an element’s appearance.
       */
      spacing: PropTypes.shape(SpacingTypes),
    }),
    /**
     * A component to be placed inside footer container.
     */
    child: PropTypes.element,
  }),
  /**
   * Hidden elements, useful for dialogs, hidden utilities, and etc.
   */
  hidden: PropTypes.arrayOf(PropTypes.node),
  /*
   * Triggered when the user clicks on the bottom navigation item in the application bottom bar.
   *
   * @param {BottomNavigationChangeTypes from ../components-library/navigation/BottomNavigation.props}
   */
  onBottomNavigationChange: PropTypes.func,
  /*
   * Triggered when the component receives the page parameters.
   * It is used to pass the page parameters on the flow to the nested components.
   * @param {PageParametersReceiverOnReceivedTypes from ../components-library/misc/PageParametersReceiver.props}
   */
  onPageParametersReceived: PropTypes.func,
};
