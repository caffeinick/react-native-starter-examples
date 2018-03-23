import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';

class FindPasswordScreen extends Component {  
  render() {
    return (
      <SafeAreaView style={styles.containerStyle}>
        <Text>This is FindPasswordScreen</Text>
      </SafeAreaView>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0B800',
  },
};

export default FindPasswordScreen;
