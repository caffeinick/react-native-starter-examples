import React, { Component } from 'react';
import { SafeAreaView, View, TouchableOpacity, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { navigateTo, navigatePop } from '../actions';
import { Button } from '../components/common/Button';

class LoginScreen extends Component {
  onNavigateTo(path) {
    this.props.navigateTo(path);
  }

  onNavigatePop() {
    this.props.navigatePop();
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'Admin');
    this.onNavigateTo('AuthDrawer');
  };

  render() {
    const {
      containerStyle,
      headerStyle,
      passButton,
      passButtonTitle,
      marginContainerStyle,
      titleStyle,
      bodyStyle,
    } = styles;

    return (
      <SafeAreaView style={containerStyle}>
        <View style={headerStyle}>
          <TouchableOpacity
            style={passButton}
            onPress={() => {
              this.onNavigateTo('PasswordModal');
            }}
          >
            <Text style={passButtonTitle}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={marginContainerStyle}>
          <Text style={titleStyle}>Login</Text>
        </View>

        <View style={bodyStyle}>
          <Button onPress={this._signInAsync} title={'Login as Admin'} />
          <Button
            onPress={() => {
              this.onNavigateTo('Signup');
            }}
            title={'Sign Up'}
          />
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

LoginScreen.propTypes = {
  navigateTo: PropTypes.func,
  navigatePop: PropTypes.func,
};

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#F0B800',
  },
  headerStyle: {
    flex: 0.1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  passButton: {
    width: 160,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  passButtonTitle: {
    color: 'gray',
    fontSize: 15,
  },
  marginContainerStyle: {
    flex: 0.5,
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

export default connect(null, { navigateTo, navigatePop })(LoginScreen);
