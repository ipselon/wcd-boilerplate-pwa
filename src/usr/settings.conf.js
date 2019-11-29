/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "SettingsProps" }]*/
/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "defaultSettings" }]*/
import PropTypes from 'prop-types';
import { ThemeColorTypes } from './common-props/color.props';

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
        'dark',
      ]),
      // Primary
      primary: PropTypes.shape({
        light: PropTypes.shape(ThemeColorTypes),
        main: PropTypes.shape(ThemeColorTypes),
        dark: PropTypes.shape(ThemeColorTypes),
        contrastText: PropTypes.string,
      }),
      secondary: PropTypes.shape({
        light: PropTypes.shape(ThemeColorTypes),
        main: PropTypes.shape(ThemeColorTypes),
        dark: PropTypes.shape(ThemeColorTypes),
        contrastText: PropTypes.string,
      }),
      error: PropTypes.shape({
        light: PropTypes.shape(ThemeColorTypes),
        main: PropTypes.shape(ThemeColorTypes),
        dark: PropTypes.shape(ThemeColorTypes),
        contrastText: PropTypes.string,
      }),
    }),
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
      type: 'light',
      primary: {
        light: {
          colorHue: 'indigo',
          colorShade: '300'
        },
        main: {
          colorHue: 'indigo',
          colorShade: '500'
        },
        dark: {
          colorHue: 'indigo',
          colorShade: '700'
        },
        contrastText: '#fff',
      },
      secondary: {
        light: {
          colorHue: 'pink',
          colorShade: 'A200'
        },
        main: {
          colorHue: 'pink',
          colorShade: 'A400'
        },
        dark: {
          colorHue: 'indigo',
          colorShade: 'A700'
        },
        contrastText: '#fff',
      },
      error: {
        light: {
          colorHue: 'red',
          colorShade: '300'
        },
        main: {
          colorHue: 'red',
          colorShade: '500'
        },
        dark: {
          colorHue: 'indigo',
          colorShade: '700'
        },
        contrastText: '#fff',
      }
    }
  }
};
