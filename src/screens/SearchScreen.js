import React, { Component } from 'react';
import {
  Alert,
  Button,
  Dimensions,
  ScrollView,
  Text,
  TextInput,
  View,
  Platform,
  KeyboardAvoidingView,
  // InputAccessoryView,
} from 'react-native';
const InputAccessoryView = require('InputAccessoryView');

class Message extends Component {
  render() {
    return (
      <View style={styles.textBubbleBackground}>
        <Text style={styles.text}>Text Message</Text>
      </View>
    );
  }
}

class TextInputBar extends Component {
  state = { text: '' };

  render() {
    const { width } = Dimensions.get('screen');
    return (
      <View style={[styles.textInputContainer, { width }]}>
        <TextInput
          style={styles.textInput}
          onChangeText={text => {
            this.setState({ text });
          }}
          value={this.state.text}
          placeholder={'Type a message...'}
        />
        <Button
          onPress={() => {
            Alert.alert('You tapped the button!');
          }}
          title="Send"
        />
      </View>
    );
  }
}

class InputAccessoryViewExample extends Component {
  render() {
    console.log(Platform);
    if (Platform.OS == 'ios') {
      return (
        <KeyboardAvoidingView behavior="padding">
          <View>
            <ScrollView keyboardDismissMode="interactive" contentContainerStyle={{ paddingBottom: 50 }}>
              {Array(15)
                .fill()
                .map((_, i) => <Message key={i} />)}
            </ScrollView>

            <InputAccessoryView backgroundColor="#fffffff7">
              <TextInputBar />
            </InputAccessoryView>
          </View>
        </KeyboardAvoidingView>
      );
    } else {
      return (
        <View style={{ borderColor: 'red', borderWidth: 1 }}>
          <ScrollView keyboardDismissMode="interactive">
            {Array(15)
              .fill()
              .map((_, i) => <Message key={i} />)}
          </ScrollView>
        </View>
      );
    }
  }
}

const styles = {
  textInputContainer: {
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
  },
  text: {
    padding: 10,
    color: 'white',
  },
  textBubbleBackground: {
    backgroundColor: '#2f7bf6',
    borderRadius: 20,
    width: 110,
    margin: 20,
  },
};

export default InputAccessoryViewExample;
