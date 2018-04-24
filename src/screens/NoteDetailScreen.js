import React, { Component } from 'react';
import {
  View,
  Alert,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  BackHandler,
  AsyncStorage,
} from 'react-native';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

import { navigatePop, noteTextChange, noteLoad } from '../actions';

class NoteDetailScreen extends Component {
  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleOK.bind(this));
    this.props.navigation.setParams({
      handleOK: this.handleOK.bind(this),
    });
    this.onNoteLoad();
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  onNavigatePop() {
    this.props.navigatePop();
  }

  onTextChange(text) {
    this.props.noteTextChange({ text });
  }

  async onNoteLoad() {
    if (this.props.navigation.state.params) {
      const params = this.props.navigation.state.params;
      if (params.title == 'Open') {
        const text = await AsyncStorage.getItem('noteItem');
        if (text) this.props.noteLoad({ text });
      } else {
        const text = '';
        this.props.noteTextChange({ text });
      }
    }
  }

  handleOK() {
    Alert.alert('Are you sure?', '', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'OK',
        onPress: async () => {
          await AsyncStorage.setItem('noteItem', this.props.note);
          this.onNavigatePop();
        },
      },
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
    const { containerStyle, noteAreaStyle } = styles;
    return (
      <SafeAreaView style={containerStyle}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          keyboardVerticalOffset={60} // iOS Keyboard Height Calibrate
          style={{ flex: 1 }}
        >
          <TextInput
            style={noteAreaStyle}
            onChangeText={text => this.onTextChange(text)}
            value={this.props.note}
            multiline={true}
            spellCheck={false}
            autoCorrect={false}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

NoteDetailScreen.propTypes = {
  navigation: PropTypes.object,
  note: PropTypes.string,
  navigatePop: PropTypes.func,
  noteTextChange: PropTypes.func,
  noteLoad: PropTypes.func,
};

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
  noteAreaStyle: {
    height: '100%',
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 25,
    paddingHorizontal: 15,
    fontSize: 20,
  },
};

const mapStateToProps = state => {
  return { note: state.note };
};

export default connect(mapStateToProps, { navigatePop, noteTextChange, noteLoad })(
  NoteDetailScreen,
);
