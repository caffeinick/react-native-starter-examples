import React, { Component } from 'react';
import { SafeAreaView, View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { navigateTo, navigatePop } from '../actions';
import { Button } from '../components/common/Button';

class SignupScreen extends Component {
  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'Admin');
    this.props.navigateTo('AuthDrawer');
  };

  onNavigatePop() {
    this.props.navigatePop();
  }

  render() {
    const { containerStyle, marginContainerStyle, titleStyle, bodyStyle } = styles;

    return (
      <SafeAreaView style={containerStyle}>
        <View style={marginContainerStyle}>
          <Text style={titleStyle}>Sign Up!</Text>
        </View>

        <View style={bodyStyle}>
          <Button onPress={this._signInAsync} title={'Sign up as Admin'} />
          <Button
            onPress={() => {
              this.onNavigatePop();
            }}
            title={'Maybe Later...'}
          />
        </View>
      </SafeAreaView>
    );
  }
}

SignupScreen.propTypes = {
  navigateTo: PropTypes.func,
  navigatePop: PropTypes.func,
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

export default connect(null, { navigateTo, navigatePop })(SignupScreen);
