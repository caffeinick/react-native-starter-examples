import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';
import PropTypes from 'prop-types';

import { Button } from '../components/common/Button';

class SimpleScreen1 extends Component {
  static navigationOptions = {
    title: 'SimpleScreen1',
  };

  render() {
    return (
      <SafeAreaView style={styles.containerStyle}>
        <Text>This is SimpleScreen1</Text>
        <Button
          title={'Go SimpleScreen2'}
          onPress={() => {
            this.props.navigation.navigate('Simple2');
          }}
        />
        <Button
          title={'Go SimpleScreen3'}
          onPress={() => {
            this.props.navigation.navigate('Simple3');
          }}
        />
        <Button
          title={'Go Back'}
          onPress={() => {
            this.props.navigation.goBack(null);
          }}
        />
        <Button
          title={'Pop'}
          onPress={() => {
            this.props.navigation.pop();
          }}
        />
        <Button
          title={'PopToTop'}
          onPress={() => {
            this.props.navigation.popToTop();
          }}
        />
      </SafeAreaView>
    );
  }
}

SimpleScreen1.propTypes = {
  navigation: PropTypes.object,
};

const styles = {
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default SimpleScreen1;
