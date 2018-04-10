import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SwitchNavigator } from 'react-navigation';
import PropTypes from 'prop-types';

import LoadingScreen from '../screens/LoadingScreen';
import UnauthorizedNavigator from './UnauthorizedNavigator';
import AuthorizedNavigator from './AuthorizedNavigator';
import { addListener } from '../utils/redux';

const routeConfig = {
  Loading: LoadingScreen,
  UnauthModal: UnauthorizedNavigator,
  AuthDrawer: AuthorizedNavigator,
};

const navigationConfig = {
  initialRouteName: 'Loading',
};

export const RootNavigator = SwitchNavigator(routeConfig, navigationConfig);

class AppWithNavigationState extends Component {
  render() {
    const { dispatch, nav } = this.props;

    return (
      <RootNavigator
        navigation={{
          dispatch,
          state: nav,
          addListener,
        }}
      />
    );
  }
}

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
