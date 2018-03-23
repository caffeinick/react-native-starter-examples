import React, { Component } from 'react';
import {
  AsyncStorage,
  View,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';

class LoadingScreen extends Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    this.props.navigation.navigate(userToken ? 'AuthDrawer' : 'UnauthModal')
  };

  render() {
    return (
      <View style={styles.containerStyle}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

LoadingScreen.propTypes = {
  navigation: PropTypes.object,
};

const styles = {
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default LoadingScreen;
