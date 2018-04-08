import React, { Component } from 'react';
import {
  AsyncStorage,
  View,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { navigateTo } from '../actions/nav';

class LoadingScreen extends Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    this.props.navigateTo(userToken ? 'AuthDrawer' : 'UnauthModal')
  };

  render() {
    return (
      <View style={styles.containerStyle}>
        <ActivityIndicator />
        <StatusBar hidden={true} />
      </View>
    );
  }
}

LoadingScreen.propTypes = {
  navigation: PropTypes.object,
  navigateTo: PropTypes.func,
};

const styles = {
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default connect(null, { navigateTo })(LoadingScreen);
