import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Color} from '../../constants/Colors';
import { text } from '../../constants/AppStyle';
interface ProductProps {
  data: ProductData;
}

export interface ProductData {
  id: string;
  title: string;
  price: string;
  logo: string;
  discountedPrice: string;
  isAvailable: boolean;
}

const Product = (props: ProductProps) => {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
      <Image
        style={styles.image}
        resizeMode='cover'
        source={{uri: props.data.logo}}
      />
      </View>
      
      <Text style={[text.subtitle, {paddingHorizontal: 10}]}>{props.data.title}</Text>
      <View style={styles.priceContainer}>
        <Text style={[text.price, { marginRight: 5}]}>
          ₹{props.data.discountedPrice}
        </Text>
        <Text style={text.discount}>
          ₹{props.data.price}
        </Text>
      </View>
      {props.data.isAvailable ? (
        <View style={styles.available}> 
          <TouchableOpacity onPress={() => {}} style={styles.addToCart}>
            <Image
              source={require('../../../assets/images/cart.png')}
              style={styles.buttonImage}
            />
            <Text style={styles.buttonTitle}>ADD</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.calendar}>
            <Image
              source={require('../../../assets/images/calendar.badge.plus.png')}
              style={styles.buttonImage}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={styles.notAvailable}>OUT OF STOCK</Text>
      )}
    </View>
  );
};

export default Product;
const styles = StyleSheet.create({
  container: {
    height: 183,
    width: 150,
    borderRadius: 4,
    borderColor: Color.solidGreen,
    borderWidth: 1,
    margin: 5
  },
  image: {
    height: 80,
    width: 80,
    marginVertical: 10
  },
  priceContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  available: {
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 10,
    flex: 1,
  },
  addToCart: {
    flex: 3,
    borderRadius: 4,
    borderColor: Color.solidGreen,
    borderWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginRight: 10
  },
  calendar: {
    flex: 1,
    borderRadius: 4,
    borderColor: Color.solidGreen,
    borderWidth: 1,
    padding: 4
  },
  buttonImage: {
    height: 14,
    width: 14,
    tintColor: Color.solidGreen,
    marginHorizontal: 5,
  },
  buttonTitle: {
    fontSize: 13,
    color: Color.solidGreen,
    fontWeight: '400',
  },
  notAvailable: {
    borderRadius: 4,
    borderColor: Color.solidPlaceholder,
    color: Color.solidPlaceholder,
    borderWidth: 1,
    textAlign: 'center',
    padding: 4,
    marginHorizontal: 10,
    marginTop: 10
  },
});
