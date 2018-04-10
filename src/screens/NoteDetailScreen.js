import React, { Component } from 'react';
import { View, Alert, SafeAreaView, Text, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

import { navigatePop } from '../actions';

class NoteDetailScreen extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleOK.bind(this));
    this.props.navigation.setParams({
      handleOK: this.handleOK.bind(this),
    });
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress');
  }

  onNavigatePop() {
    this.props.navigatePop();
  }

  handleOK() {
    Alert.alert('Are you sure?', '', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'OK', onPress: () => this.onNavigatePop() },
    ]);
    return true;
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Details',
    headerLeft: (
      <View style={{ marginLeft: 20 }}>
        <Ionicons
          name={'ios-close'}
          size={40}
          color={'white'}
          onPress={() => {
            if (navigation.state.params) {
              const params = navigation.state.params;
              if (params.handleOK) {
                const { handleOK } = params;
                return handleOK();
              }
            }
          }}
        />
      </View>
    ),
  });

  render() {
    return (
      <SafeAreaView style={styles.containerStyle}>
        <Text>You just clicked {this.props.navigation.state.params.title}</Text>
      </SafeAreaView>
    );
  }
}

NoteDetailScreen.propTypes = {
  navigation: PropTypes.object,
  navigatePop: PropTypes.func,
};

const styles = {
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default connect(null, { navigatePop })(NoteDetailScreen);
