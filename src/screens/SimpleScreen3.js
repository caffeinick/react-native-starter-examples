import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';
import PropTypes from 'prop-types';

import { Button } from '../components/common/Button';

class SimpleScreen3 extends Component {
  static navigationOptions = {
    title: 'SimpleScreen3',
  };

  render() {
    return (
      <SafeAreaView style={styles.containerStyle}>
        <Text>This is SimpleScreen3</Text>
        <Button
          title={'Go SimpleScreen1'}
          onPress={() => {
            this.props.navigation.navigate('Simple1');
          }}
        />
        <Button
          title={'Go SimpleScreen2'}
          onPress={() => {
            this.props.navigation.navigate('Simple2');
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

SimpleScreen3.propTypes = {
  navigation: PropTypes.object,
};

const styles = {
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default SimpleScreen3;
