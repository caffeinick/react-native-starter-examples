import React, { Component } from 'react';
import { AsyncStorage, SafeAreaView, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

class LogoutScreen extends Component {
  static navigationOptions = {
    title: 'Logout',
  };

  _onPressLogout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('UnauthModal');
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
};

const styles = {
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default LogoutScreen;
