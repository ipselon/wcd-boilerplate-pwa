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
  }),
};
