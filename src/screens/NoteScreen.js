import React, { Component } from 'react';
import { StatusBar, View, SafeAreaView, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import PropTypes from 'prop-types';

class NoteScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return ({
      title: 'Note',
      headerRight: (
        <View style={{ marginRight: 20 }}>
          <Ionicons
            name={'ios-search'}
            size={25}
            color={'white'}
            onPress={() => {
              navigation.navigate('Search');
            }}
          />
        </View>
      ),
      headerLeft: (
        <View style={{ marginLeft: 20 }}>
          <Ionicons
            name={'ios-list'}
            size={25}
            color={'white'}
            onPress={() => {
              navigation.navigate('DrawerToggle');
            }}
          />
        </View>
      ),
    })
  };

  render() {
    return (
      <SafeAreaView style={styles.containerStyle}>
        <StatusBar barStyle='light-content' />
        <Button
          title={'Open Note'}
          onPress={() => {
            this.props.navigation.navigate('NoteModal')
          }}
        />
        <Button
          title={'New Note'}
          onPress={() => {
            this.props.navigation.navigate('NoteModal')
          }}
        />

        <Button
          title={'Go to LoginPage'}
          onPress={() => {
            this.props.navigation.navigate('UnauthModal')
          }}
        />
      </SafeAreaView>
    );
  }
}

NoteScreen.propTypes = {
  navigation: PropTypes.object
};

const styles = {
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default NoteScreen;
