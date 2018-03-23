import React, { Component } from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

class NoteScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return ({
      title: 'Notes',
      headerRight: (
        <View style={{ marginRight: 20 }}>
          <Ionicons
            name={'ios-search'}
            size={25}
            color={'white'}
            onPress={() => navigate('Search')}
          />
        </View>
      )
    })
  };

  render() {
    return (
      <SafeAreaView style={styles.containerStyle}>
        <Text>This is NoteScreen</Text>
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
