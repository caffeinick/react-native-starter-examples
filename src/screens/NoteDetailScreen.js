import React, { Component } from 'react';
import { View, Button, Alert, SafeAreaView, Text } from 'react-native';

class NoteDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return ({
      title: 'Details',
      headerLeft: (
        <View style={{ marginLeft: 10 }}>
          <Button
            title={'Cancel'}
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
            color={'white'}
          />
        </View>
      )
    })
  };
  
  render() {
    return (
      <SafeAreaView style={styles.containerStyle}>
        <Text>This is NoteDetailScreen</Text>
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

export default NoteDetailScreen;
