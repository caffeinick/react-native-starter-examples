import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';

class NoteScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text>This is NoteScreen</Text>
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

export default NoteScreen;
