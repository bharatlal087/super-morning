import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Color} from '../../constants/Colors';
import {text} from '../../constants/AppStyle';

export interface CategoryItemProps {
  id: string;
  name: string;
  icon: string;
  onTap: (id: string, name: string) => void;
}

const CategoryItem = (props: CategoryItemProps) => {
  const {id, name, icon, onTap} = props;
  return (
    <View key={id} style={{margin: 3}}>
      <TouchableOpacity
        onPress={() => {
          onTap(id, name)
        }}>
        <View style={styles.container}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={{uri: icon}}
          />
        </View>
        <Text style={[text.subtitle, {textAlign: 'center'}]}>{name}</Text>
      </TouchableOpacity>
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
    margin: 5,
  },
  image: {
    height: 60,
    width: 60,
    alignItems: 'center',
    borderRadius: 8,
    overflow: 'hidden',
  },
});
