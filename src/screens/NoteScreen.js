import React, { Component } from 'react';
import { View, SafeAreaView, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

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
      )
    })
  };

  render() {
    return (
      <SafeAreaView style={styles.containerStyle}>
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
      </SafeAreaView>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default NoteScreen;
