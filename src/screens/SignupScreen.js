import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';

class SignupScreen extends Component {  
  render() {
    return (
      <SafeAreaView style={styles.containerStyle}>
        <Text>This is SignupScreen</Text>
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

export default SignupScreen;
