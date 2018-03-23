import React, { Component } from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

class LandingScreen extends Component {  
  render() {
    return (
      <SafeAreaView style={styles.containerStyle}>
        <Text>This is LandingScreen</Text>
        <Button
          title={'LoginScreen'}
          onPress={() => {this.props.navigation.navigate('Login')}}
        />
        <Button
          title={'SignupScreen'}
          onPress={() => {this.props.navigation.navigate('Signup')}}
        />
        <Button
          title={'Go to Note App'}
          onPress={() => {this.props.navigation.navigate('AuthDrawer')}}
        />
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0B800',
  },
};

export default LandingScreen;
