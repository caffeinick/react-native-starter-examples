import React, { Component } from 'react';
import { SafeAreaView, StatusBar, View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { navigateTo } from '../actions';
import { Button } from '../components/common/Button';

class LandingScreen extends Component {
  onNavigateTo(path) {
    this.props.navigateTo(path);
  }

  render() {
    const { containerStyle, marginContainerStyle, titleStyle, bodyStyle } = styles;

    return (
      <SafeAreaView style={containerStyle}>
        <StatusBar hidden={true} />

        <View style={marginContainerStyle}>
          <Text style={titleStyle}>Welcome!</Text>
        </View>

        <View style={bodyStyle}>
          <Button
            onPress={() => {
              this.onNavigateTo('Login');
            }}
            title={'Login'}
          />
          <Button
            onPress={() => {
              this.onNavigateTo('Signup');
            }}
            title={'Sign Up'}
          />
          <Button
            onPress={() => {
              this.onNavigateTo('AuthDrawer');
            }}
            title={'Go App Directly'}
          />
        </View>
      </SafeAreaView>
    );
  }
}

LandingScreen.propTypes = {
  navigation: PropTypes.object,
  navigateTo: PropTypes.func,
};

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#F0B800',
  },
  marginContainerStyle: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  bodyStyle: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default connect(null, { navigateTo })(LandingScreen);
