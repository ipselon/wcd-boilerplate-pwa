import PropTypes from 'prop-types';

export const PageFrameWithDrawerTypes = {
  // Drawer
  drawer: PropTypes.shape({
    // The width of the drawer. Should be a string value with the width units.
    width: PropTypes.string,
    // Put the components inside the drawer.
    content: PropTypes.arrayOf(PropTypes.element),
  }),
  // Top application bar. It has fixed position, and is shown in any resolution.
  topAppBar: PropTypes.shape({
    // A title of the toolbar. String value.
    title: PropTypes.string,
    // Title style variant
    titleVariant: PropTypes.oneOf([
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'subtitle1',
      'subtitle2',
      'body1',
      'body2',
      'button',
      'caption',
      'overline',
      'inherit'
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
  }),
  // The bottom bar appears in mobile resolution only. Put here some bottom navigation in mobile view.
  bottomAppBar: PropTypes.shape({
    // The bottom toolbar content items, better to use a single item inside. It appears in the mobile resolutions.
    content: PropTypes.arrayOf(PropTypes.element),
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
  // The content in the main area
  mainContent: PropTypes.arrayOf(PropTypes.element),
  /*
   Use elements from this array for placing dialogs and other utilities components on the page
   */
  hiddenMainContent: PropTypes.arrayOf(PropTypes.element),
  // The footer content items for desktop resolutions.
  footerContent: PropTypes.arrayOf(PropTypes.element),
};
