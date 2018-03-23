import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';

class LoginScreen extends Component {  
  render() {
    return (
      <SafeAreaView style={styles.containerStyle}>
        <Text>This is LoginScreen</Text>
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

export default LoginScreen;
