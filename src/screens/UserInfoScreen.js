import React, { Component } from 'react';
import { AsyncStorage, SafeAreaView, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { navigateTo } from '../actions/nav';

class UserInfoScreen extends Component {
  static navigationOptions = {
    title: 'MyInfo',
  };

  state = {
    userToken: '',
  };

  componentDidMount() {
    AsyncStorage.getItem('userToken')
    .then(value => {
      this.setState({ userToken: value });
    });
  }
  
  render() {
    return (
      <SafeAreaView style={styles.containerStyle}>
        <Text>Your ID is : {this.state.userToken}</Text>
        <Button
          title={'Logout'}
          onPress={() => {this.props.navigateTo('Logout')}}
        />
      </SafeAreaView>
    );
  }
}

UserInfoScreen.propTypes = {
  navigation: PropTypes.object,
  navigateTo: PropTypes.func,
};

const styles = {
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default connect(null, { navigateTo })(UserInfoScreen);
