import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {text} from '../../constants/AppStyle';
import {Color} from '../../constants/Colors';

type BrandItemProps = {
  id: string;
  icon: string;
  onTap: (id: string) => void;
};

const BrandCell = (props: BrandItemProps) => {
  const {id, icon, onTap} = props;
  return (
    <View key={id} style={{margin: 3}}>
      <TouchableOpacity
        onPress={() => {
          onTap(id);
        }}>
        <View style={styles.container}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={{uri: icon}}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BrandCell;

const styles = StyleSheet.create({
  container: {
    height: 183,
    width: 150,
    borderRadius: 4,
    borderColor: Color.solidGreen,
    borderWidth: 1,
    margin: 5,
    justifyContent:'center',
    alignItems:'center'
  },
  image: {
    height: 180,
    width: 140,
  },
});
