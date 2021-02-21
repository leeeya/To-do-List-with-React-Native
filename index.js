/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import React from 'react';
import App from './src/App';
import { name as appName } from './app.json';
import store from './src/modules';

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
