/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "SettingsProps" }]*/
import PropTypes from 'prop-types';

const SettingsProps = {
  // Main page meta data
  pageMeta: PropTypes.shape({
    // Main page title value
    title: PropTypes.string,
  }),
  firebaseInitialization: PropTypes.shape({
    initialScript: PropTypes.object,
  }),
  muiTheme: PropTypes.shape({
    breakpoints: PropTypes.shape({
      values: PropTypes.shape({
        xs: PropTypes.number,
        sm: PropTypes.number,
        md: PropTypes.number,
        lg: PropTypes.number,
        xl: PropTypes.number,
      })
    }),
    palette: PropTypes.shape({
      type: PropTypes.oneOf([
        'light',
        'main',
        'dark',
        'contrastText'
      ])
    }),
    test: PropTypes.string,
  })
};

export const defaultSettings = {
  muiTheme: {
    status: {
      fontFamily: ['"Roboto"', 'sans-serif'],
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920
      }
    },
    palette: {
      type: 'light'
    }
  }
};
