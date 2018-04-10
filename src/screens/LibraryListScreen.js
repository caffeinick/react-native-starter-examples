import React, { Component } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import Card from '../components/common/Card';
import LibraryList from '../components/Library/LibraryList';

class ListScreen extends Component {
  static navigationOptions = {
    title: 'Libraries',
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <Card>
            <LibraryList />
          </Card>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

ListScreen.propTypes = {
  navigation: PropTypes.object,
};

export default ListScreen;
