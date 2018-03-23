import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';

class LogoutScreen extends Component {
  static navigationOptions = {
    title: 'Logout',
  };
  
  render() {
    return (
      <SafeAreaView style={styles.containerStyle}>
        <Text>This is LogoutScreen</Text>
      </SafeAreaView>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
};

export default LogoutScreen;
