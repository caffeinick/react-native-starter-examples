import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';

class SearchScreen extends Component {
  static navigationOptions = {
    title: 'Search',
  };

  render() {
    return (
      <SafeAreaView style={styles.containerStyle}>
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
  },
};

export default SearchScreen;
