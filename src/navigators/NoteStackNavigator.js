import React, { Component } from 'react';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NoteScreen from '../screens/NoteScreen';
import SearchScreen from '../screens/SearchScreen';
import { addListener } from '../utils/redux';

const routeConfig = {
  Home: NoteScreen,
  Search: SearchScreen,
};

export const NoteStackNavigator = StackNavigator(routeConfig);

class AppWithNavigationState extends Component {
  render() {
    const { dispatch, nav } = this.props;
    
    return (
      <NoteStackNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
          addListener,
        })}
      />
    );
  }
}

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func,
  nav: PropTypes.object,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
