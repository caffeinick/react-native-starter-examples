import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import AppReducer from './reducers';
import RootNavigator from './navigators/RootNavigator';
import { middleware, logger } from './utils/redux';

const store = createStore(
  AppReducer,
  applyMiddleware(middleware, logger),
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}

export default App;
