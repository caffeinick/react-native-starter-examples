import React, { Component } from 'react';
import { AsyncStorage, SafeAreaView, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { navigateTo, navigatePop } from '../actions';

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
          onPress={() => {
            this.props.navigatePop();
          }}
        />
        <Button title={'yes'} onPress={() => this._onPressLogout()} />
      </SafeAreaView>
    );
  }
}

LogoutScreen.propTypes = {
  navigateTo: PropTypes.func,
  navigatePop: PropTypes.func,
};

const styles = {
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default connect(null, { navigateTo, navigatePop })(LogoutScreen);
