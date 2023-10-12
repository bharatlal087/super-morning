import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Color } from '../constants/Colors'

const AddCartSmallButton = () => {
  return (
    <View>
      <TouchableOpacity onPress={() => {}} style={styles.addToCart}>
            <Image
              source={require('../../assets/images/cart.png')}
              style={[styles.buttonImage, {tintColor: Color.solidGreen}]}
            />
            <Text style={styles.buttonTitle}>ADD</Text>
          </TouchableOpacity>
    </View>
  )
}

export default AddCartSmallButton

const styles = StyleSheet.create({
    addToCart: {
        borderRadius: 4,
        borderColor: Color.solidGreen,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        height: 24,
        width: 80
      },
      buttonImage: {
        height: 14,
        width: 14,
        marginHorizontal: 5,
      },
      buttonTitle: {
        fontSize: 13,
        color: Color.solidGreen,
        fontWeight: '400',
      }
})