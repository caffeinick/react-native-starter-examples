import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { navigateTo } from '../../actions';

class LibraryItem extends Component {
  onNavigateTo(path, params) {
    this.props.navigateTo(path, params);
  }

  render() {
    const { title, description } = this.props.item;
    const { containerStyle, itemStyle } = styles;

    return (
      <TouchableOpacity
        onPress={() =>
          this.onNavigateTo('LibraryDetail', {
            title,
            description,
          })
        }
      >
        <View style={containerStyle}>
          <Text style={itemStyle}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

LibraryItem.propTypes = {
  item: PropTypes.object,
  navigateTo: PropTypes.func,
};

const styles = {
  containerStyle: {
    marginTop: 17,
    marginBottom: 17,
  },
  itemStyle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
  },
};

export default connect(null, { navigateTo })(LibraryItem);
