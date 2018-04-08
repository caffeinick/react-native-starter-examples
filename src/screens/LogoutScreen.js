import React, { Component } from 'react';
import { AsyncStorage, SafeAreaView, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { navigateTo } from '../actions/nav';

class LogoutScreen extends Component {
  static navigationOptions = {
    title: 'Logout',
  };

  _onPressLogout = async () => {
    await AsyncStorage.clear();
    this.props.navigateTo('UnauthModal');
  };
  
  render() {
    return (
      <SafeAreaView style={styles.containerStyle}>
        <Text>Are you sure to Logout?</Text>
        <Button
          title={'No'}
          onPress={() => {this.props.navigation.pop()}}
        />
        <Button
          title={'yes'}
          onPress={() => this._onPressLogout()}
        />
      </SafeAreaView>
    );
  }
}

LogoutScreen.propTypes = {
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

export default connect(null, { navigateTo })(LogoutScreen);
