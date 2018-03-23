import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';

class UserInfoScreen extends Component {
  static navigationOptions = {
    title: 'MyInfo',
  };
  
  render() {
    return (
      <SafeAreaView style={styles.containerStyle}>
        <Text>This is UserInfoScreen</Text>
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

export default UserInfoScreen;
