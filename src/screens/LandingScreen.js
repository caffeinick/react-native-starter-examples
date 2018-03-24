import React, { Component } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { Button } from '../components/Button';

class LandingScreen extends Component {
  render() {
    const {
      containerStyle,
      marginContainerStyle,
      titleStyle,
      bodyStyle,
    } = styles;

    return (
      <SafeAreaView style={containerStyle}>
        <View style={marginContainerStyle}>
          <Text style={titleStyle}>Welcome!</Text>
        </View>

        <View style={bodyStyle}>
          <Button
            onPress={() => {this.props.navigation.navigate('Login')}}
            title={'Login'}
          />
          <Button
            onPress={() => {this.props.navigation.navigate('Signup')}}
            title={'Sign Up'}
          />
          <Button
            onPress={() => {this.props.navigation.navigate('AuthDrawer')}}
            title={'Go App Directly'}
          />
        </View>
      </SafeAreaView>
    );
  }
}

LandingScreen.propTypes = {
  navigation: PropTypes.object,
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

export default LandingScreen;
