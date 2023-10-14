import {Image} from 'react-native';
import React from 'react';

const ForwardArrow = () => {
  return (
    <Image
      style={{height: 10, width: 10}}
      resizeMode="contain"
      source={require('../../assets/images/chevron.forward.png')}
    />
  );
};

export default ForwardArrow;
