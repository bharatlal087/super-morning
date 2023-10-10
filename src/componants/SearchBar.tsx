import {StyleSheet, Image, View, TextInput} from 'react-native';
import React from 'react';
import { Color } from '../constants/Colors';

interface SearchBarProps {
  placeholderText: string;
}

const SearchBar = (props: SearchBarProps) => {
  const {placeholderText} = props;
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/magnifyingglass.png')}
        style={styles.ImageStyle}
      />
      <TextInput style={{flex: 1}} placeholder={placeholderText} placeholderTextColor={Color.solidPlaceholder} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.0,
    borderColor: '#17B760',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 20,
    width: 20,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});
