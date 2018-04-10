import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const Card = props => {
  return <View style={styles.containerStyle}>{props.children}</View>;
};

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

const styles = {
  containerStyle: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
};

export default Card;
