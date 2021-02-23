import 'react-native';
import React from 'react';
import App from '../src/App';
import { Provider } from 'react-redux';
import store from '../src/modules';
import renderer from 'react-test-renderer';

describe('<App />', () => {
  jest.useFakeTimers();

  it('renders correctly', async () => {
    renderer.create(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });
});
