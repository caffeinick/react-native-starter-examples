import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { increment, decrement } from '../actions';

class CounterReduxScreen extends Component {
  static navigationOptions = {
    title: 'ReduxCounter',
  };

  render() {
    const {
      centerContainer,
      buttonContainerStyle,
      buttonStyle,
      innerTextStyle,
      counterContainerStyle,
      counterStyle,
    } = styles;
    const { number, decrement, increment } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <View style={centerContainer}>
          <View style={counterContainerStyle}>
            <Text style={counterStyle}>{number}</Text>
          </View>
          <View style={buttonContainerStyle}>
            <TouchableOpacity style={buttonStyle} onPress={() => decrement()}>
              <Text style={innerTextStyle}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={buttonStyle} onPress={() => increment()}>
              <Text style={innerTextStyle}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

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
};

CounterReduxScreen.propTypes = {
  number: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
};

const mapStateToProps = state => {
  return { number: state.number };
};

export default connect(mapStateToProps, { decrement, increment })(CounterReduxScreen);
