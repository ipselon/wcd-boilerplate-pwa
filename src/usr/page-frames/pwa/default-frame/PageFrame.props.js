import PropTypes from 'prop-types';

export const PageFrameTypes = {
  // Drawer props
  drawer: PropTypes.shape({
    // The width of the drawer. Should be a string value with the width units.
    drawerWidth: PropTypes.string,
    // The component inside the drawer.
    drawerContent: PropTypes.element,
  }),
  toolbar: PropTypes.shape({
    // A title of the toolbar. String value.
    toolbarTitle: PropTypes.string,
    // Title style variant
    toolbarTitleVariant: PropTypes.oneOf([
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
    ])
  }),
};
