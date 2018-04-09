import React, { Component } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

class LibraryItem extends Component {
  render() {
    const { title, description } = this.props.item;
    const { containerStyle, itemStyle } = styles;

    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate('LibraryDetail', {
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
  navigation: PropTypes.object,
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

export default withNavigation(LibraryItem);
