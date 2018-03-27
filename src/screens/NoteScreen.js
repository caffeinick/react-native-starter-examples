import React, { Component } from 'react';
import { StatusBar, View, SafeAreaView, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { navigateTo } from '../actions/nav';

class NoteScreen extends Component {
  componentDidMount() {
    this.props.navigation.setParams({
      onNavigateTo: this.onNavigateTo.bind(this)
    })
  }

  onNavigateTo(path) {
    this.props.navigateTo(path)
  }
  
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
              if (navigation.state.params) {
                if (navigation.state.params.onNavigateTo) {
                  const { onNavigateTo } = navigation.state.params;
                  return onNavigateTo('Search');
                }
              }}
            }
          />
        </View>
      ),
      headerLeft: (
        <View style={{ marginLeft: 20 }}>
          <Ionicons
            name={'ios-list'}
            size={35}
            color={'white'}
            onPress={() => {
              navigation.navigate('DrawerToggle')}
            }
          />
        </View>
      ),
      drawerLabel: 'See Note',
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.containerStyle}>
        <StatusBar barStyle='light-content' />
        <Button
          title={'Open Note'}
          onPress={() => {
            this.onNavigateTo('NoteModal')
          }}
        />
        <Button
          title={'New Note'}
          onPress={() => {
            this.onNavigateTo('NoteModal')
          }}
        />

        <Button
          title={'Go to LoginPage'}
          onPress={() => {
            this.onNavigateTo('UnauthModal')
          }}
        />
      </SafeAreaView>
    );
  }
}

NoteScreen.propTypes = {
  navigation: PropTypes.object,
  navigateTo: PropTypes.func,
};

const styles = {
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default connect(null, { navigateTo })(NoteScreen);
