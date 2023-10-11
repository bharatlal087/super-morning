import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { Color } from '../../constants/Colors';
import { text } from '../../constants/AppStyle';

export interface CategoryItemProps {
  id: string;
  name: string;
  icon: string;
}

const CategoryItem = (props: CategoryItemProps) => {
  const {id, name, icon} = props;
  return (
    <View key={id} style={{margin: 3}}>
      <View style={styles.container}>
        <Image resizeMode='contain' style={styles.image} source={{uri: icon}} />
      </View>
      <Text style = {[text.subtitle, {textAlign: 'center'}]}>{name}</Text>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    height: 84,
    width: 84,
    borderRadius: 42,
    borderColor: Color.solidGreen,
    borderWidth: 1,
    padding: 10,
    margin: 5
  },
  image: {
    height: 60,
    width: 60,
    alignItems: 'center',
    borderRadius: 8,
    overflow: 'hidden'
  }
});
