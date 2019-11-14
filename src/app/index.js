import React from 'react';
import Application, { initStore } from '@webcodesk/react-app-framework';
import userComponents from './indices/userComponents';
import userFunctions from './indices/userFunctions';

let schema;

if (process.env.NODE_ENV !== 'production') {
  schema = require('./schema');
  if (!schema) {
    console.error('Application schema is not found. Please check the "src/usr/app/schema/index.js" file.');
  } else {
    schema = schema.default;
  }
} else {
  schema = require('./schema-prod');
  if (!schema) {
    console.error('Application schema is not found. Please check the "src/usr/app/schema-prod/index.js" file.');
  } else {
    schema = schema.default;
  }
}

export function initApp() {
  if (process.env.NODE_ENV !== 'production') {
    const packageJson = require('../../package.json');
    initStore(packageJson.name, packageJson.version);
  } else {
    initStore();
  }
}

export const App = () => (
  <Application
    schema={schema}
    userComponents={userComponents}
    userFunctions={userFunctions}
  />
);
