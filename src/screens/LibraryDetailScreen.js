import React, { Component } from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import PropTypes from 'prop-types';

class DetailScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
  });

  render() {
    const { title, description } = this.props.navigation.state.params;
    const { containerStyle, headerStyle, descriptionStyle } = styles;

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={containerStyle}>
          <Text style={headerStyle}>{title}</Text>
          <Text style={descriptionStyle}>{description}</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

DetailScreen.propTypes = {
  navigation: PropTypes.object,
};

const styles = {
  containerStyle: {
    backgroundColor: 'white',
    padding: 10,
  },
  headerStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
  descriptionStyle: {
    fontSize: 15,
    margin: 10,
  },
};

export default DetailScreen;
