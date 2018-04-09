import React, { Component } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { Button } from '../components/common/Button';

class FindPasswordScreen extends Component {
  render() {
    const { containerStyle, marginContainerStyle, titleStyle, bodyStyle } = styles;

    return (
      <SafeAreaView style={containerStyle}>
        <View style={marginContainerStyle}>
          <Text style={titleStyle}>Forgot Password...</Text>
          <Text style={titleStyle}>OMG</Text>
        </View>

        <View style={bodyStyle}>
          <Button
            onPress={() => {
              this.props.navigation.pop();
            }}
            title={'I will not forget never again!'}
          />
        </View>
      </SafeAreaView>
    );
  }
}

FindPasswordScreen.propTypes = {
  navigation: PropTypes.object,
};

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: 'gray',
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

export default FindPasswordScreen;
