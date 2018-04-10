import React, { Component } from 'react';
import { SafeAreaView, View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { navigateTo } from '../actions';

class CounterScreen extends Component {
  static navigationOptions = {
    title: 'Counter',
  };

  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  onPlus = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  onMinus = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  onNavigateTo(path) {
    this.props.navigateTo(path);
  }

  render() {
    const {
      centerContainer,
      buttonContainerStyle,
      buttonStyle,
      innerTextStyle,
      counterContainerStyle,
      counterStyle,
      goReduxContainerStyle,
      goReduxTextStyle,
    } = styles;

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={centerContainer}>
          <View style={counterContainerStyle}>
            <Text style={counterStyle}>{this.state.count}</Text>
          </View>

          <View style={buttonContainerStyle}>
            <TouchableOpacity style={buttonStyle} onPress={this.onMinus}>
              <Text style={innerTextStyle}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={buttonStyle} onPress={this.onPlus}>
              <Text style={innerTextStyle}>+</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => this.onNavigateTo('CounterRedux')}>
            <View style={goReduxContainerStyle}>
              <Text style={goReduxTextStyle}>Go Redux Counter &rarr;</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

CounterScreen.propTypes = {
  navigateTo: PropTypes.func,
};

const styles = {
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  buttonContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    width: 50,
    padding: 10,
    margin: 10,
  },
  innerTextStyle: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  counterContainerStyle: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  counterStyle: {
    color: 'teal',
    fontSize: 60,
    fontWeight: 'bold',
  },
  goReduxContainerStyle: {
    alignItems: 'center',
    marginTop: 100,
  },
  goReduxTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'teal',
  },
};

export default connect(null, { navigateTo })(CounterScreen);
