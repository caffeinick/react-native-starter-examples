import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';

class NoteDetailScreen extends Component {
  static navigationOptions = {
    title: 'Details',
  };
  
  render() {
    return (
      <SafeAreaView style={styles.containerStyle}>
        <Text>This is NoteDetailScreen</Text>
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

export default NoteDetailScreen;
