import React, { Component } from 'react';
import { View, Alert, SafeAreaView, Text, BackHandler } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

class NoteDetailScreen extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleOK.bind(this))
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress');
  }

  handleOK() {
    Alert.alert(
      'Are you sure?',
      '',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'OK', onPress: () => this.props.navigation.pop()}
      ],
    );
    return true;
  }

  static navigationOptions = ({ navigation }) => {
    return ({
      title: 'Details',
      headerLeft: (
        <View style={{ marginLeft: 20 }}>
          <Ionicons
            name={'ios-close'}
            size={40}
            color={'white'}
            onPress={() => {
              Alert.alert(
                'Are you sure?',
                '',
                [
                  {text: 'Cancel', style: 'cancel'},
                  {text: 'OK', onPress: () => navigation.pop()}
                ],
                { cancelable: false }
              )
            }}
          />
        </View>
      )
    })
  };
  
  render() {
    return (
      <SafeAreaView style={styles.containerStyle}>
        <Text>
          You just clicked {this.props.navigation.state.params.title}
        </Text>
      </SafeAreaView>
    );
  }
}

NoteDetailScreen.propTypes = {
  navigation: PropTypes.object,
};

const styles = {
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default NoteDetailScreen;
