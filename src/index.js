import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Application, { initStore } from '@webcodesk/react-app-framework';
import './index.css';
import appSettings from './app/settings';
import findColor from './utils/colorMap';
import * as serviceWorker from './serviceWorker';
import serviceWorkerConfig from './serviceWorkerConfig';

let schema;
let userComponents;
let userFunctions;

if (process.env.NODE_ENV !== 'production') {
  schema = require('./app/schema').default;
  userComponents = require('./app/indices/userComponents').default;
  userFunctions = require('./app/indices/userFunctions').default;
  const packageJson = require('../package.json');
  const { history } = initStore(packageJson.name, packageJson.version);
  window.__applicationBrowserHistory = history;
} else {
  schema = require('./app/schema-prod').default;
  userComponents = require('./app/indices-prod/userComponents').default;
  userFunctions = require('./app/indices-prod/userFunctions').default;
  const { history } = initStore();
  window.__applicationBrowserHistory = history;
}

const muiTheme = {};
if (appSettings && appSettings.muiTheme) {
  const { breakpoints, palette, zIndex } = appSettings.muiTheme;
  muiTheme.breakpoints = breakpoints;
  muiTheme.zIndex = zIndex;
  if (palette) {
    const { type, primary, secondary, error } = palette;
    muiTheme.palette = {
      type,
      primary: {
        light: findColor(primary.light.colorHue, primary.light.colorShade),
        main: findColor(primary.main.colorHue, primary.main.colorShade),
        dark: findColor(primary.dark.colorHue, primary.dark.colorShade),
        contrastText: primary.contrastText,
      },
      secondary: {
        light: findColor(secondary.light.colorHue, secondary.light.colorShade),
        main: findColor(secondary.main.colorHue, secondary.main.colorShade),
        dark: findColor(secondary.dark.colorHue, secondary.dark.colorShade),
        contrastText: secondary.contrastText,
      },
      error: {
        light: findColor(error.light.colorHue, error.light.colorShade),
        main: findColor(error.main.colorHue, error.main.colorShade),
        dark: findColor(error.dark.colorHue, error.dark.colorShade),
        contrastText: error.contrastText,
      }
    };
  }
}

// console.info(JSON.stringify(muiTheme, null, 4));

const theme = createMuiTheme(muiTheme);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Application
      schema={schema}
      userComponents={userComponents}
      userFunctions={userFunctions}
    />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register(serviceWorkerConfig);
