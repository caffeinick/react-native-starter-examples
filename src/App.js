import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import AppReducer from './reducers';
import { middleware } from './utils/redux';
import AppWithNavigationState from './navigators/NoteStackNavigator';

const store = createStore(
  AppReducer, {}, applyMiddleware(middleware),
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default App;
