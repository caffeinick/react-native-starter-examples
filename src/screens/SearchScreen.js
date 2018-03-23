import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';

class SearchScreen extends Component {
  render() {
    return (
      <SafeAreaView>
        <Text>This is SearchScreen</Text>
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

export default SearchScreen;
