import React, { Component } from 'react';
import { AsyncStorage, SafeAreaView, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

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
          onPress={() => {this.props.navigation.navigate('Logout')}}
        />
      </SafeAreaView>
    );
  }
}

UserInfoScreen.propTypes = {
  navigation: PropTypes.object,
};

const styles = {
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default UserInfoScreen;
