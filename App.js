import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './src/Navigation/AppNavigator';
import { store } from './src/Redux/store';

const App = () => {
  return <Provider store={store}>
  <AppNavigator />
  </Provider>
};

export default App;
