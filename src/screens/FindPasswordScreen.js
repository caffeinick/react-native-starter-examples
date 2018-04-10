import React, { Component } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { navigatePop } from '../actions';
import { Button } from '../components/common/Button';

class FindPasswordScreen extends Component {
  onNavigatePop() {
    this.props.navigatePop();
  }

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
              this.onNavigatePop();
            }}
            title={'I will not forget never again!'}
          />
        </View>
      </SafeAreaView>
    );
  }
}

FindPasswordScreen.propTypes = {
  navigatePop: PropTypes.func,
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

export default connect(null, { navigatePop })(FindPasswordScreen);
