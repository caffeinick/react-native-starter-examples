import React, { Component } from 'react';
import { SafeAreaView, View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import { Button } from '../components/Button';

class SignupScreen extends Component {  
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
          <Text style={titleStyle}>Sign Up!</Text>
        </View>
        
        <View style={bodyStyle}>
          <Button
            onPress={() => {this.props.navigation.navigate('Login')}}
            title={'Sign up as Admin'}
          />
          <Button
            onPress={() => {this.props.navigation.pop()}}
            title={'Maybe Later...'}
          />
        </View>
      </SafeAreaView>
    );
  }
}

SignupScreen.propTypes = {
  navigation: PropTypes.object,
}

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

export default SignupScreen;
