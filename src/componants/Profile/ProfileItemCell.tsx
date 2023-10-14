import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Color} from '../../constants/Colors';
import ForwardArrow from '../ForwardArrow';
type PropfileCellProps = {
  id: string;
  title: string;
  icon: string;
};
const ProfileItemCell = (props: PropfileCellProps) => {
  const {id, title, icon} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        marginVertical: 20,
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={icon as ImageSourcePropType}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={{justifyContent: 'center', marginRight: 16}}>
        <ForwardArrow />
      </View>
    </View>
  );
};

export default ProfileItemCell;

const styles = StyleSheet.create({
  image: {
    height: 20,
    width: 20,
    marginRight: 12,
    marginLeft: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: Color.solidGrey,
  },
});
