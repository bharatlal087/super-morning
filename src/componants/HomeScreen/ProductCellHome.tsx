import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Color} from '../../constants/Colors';
import {text} from '../../constants/AppStyle';
import AddCartSmallButton from '../AddCartSmallButton';

interface ProductProps {
  data: ProductData;
  onTap: (item: ProductData) => void
  onSubscribe: (item: ProductData) => void
}

export interface ProductData {
  id: string;
  title: string; // small name
  name: string; // long name
  quantity: string;
  price: number;
  logo: string;
  discountedPrice: number;
  discountedPercentage: number;
  isAvailable: boolean;
  isSubscribable: string;
  bannerImages: string[]
  productDetails: ProductDetails[];
}

export interface ProductDetails {
  isBullet: boolean;
  messages: string[];
  title: string;
}

const ProductCellHome = (props: ProductProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {
        props.onTap(props.data)
      }}>
        <View style={{alignItems: 'center'}}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{uri: props.data.logo, cache:'force-cache'}}
          />
        </View>

        <Text
          numberOfLines={1}
          style={[text.subtitle, {paddingHorizontal: 10}]}>
          {props.data.title}
        </Text>
        <View style={styles.priceContainer}>
          <Text style={[text.price, {marginRight: 5}]}>
            ₹{props.data.discountedPrice}
          </Text>
          <Text style={text.discount}>₹{props.data.price}</Text>
        </View>
      </TouchableOpacity>
      {props.data.isAvailable ? (
        <View style={styles.available}>
          <AddCartSmallButton />
          <TouchableOpacity onPress={() => {props.onSubscribe(props.data)}} style={styles.calendar}>
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

export default ProductCellHome;
const styles = StyleSheet.create({
  container: {
    height: 183,
    width: 150,
    borderRadius: 4,
    borderColor: Color.solidGreen,
    borderWidth: 1,
    margin: 5,
  },
  image: {
    height: 80,
    width: 80,
    marginVertical: 10,
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
    marginRight: 10,
  },
  calendar: {
    borderRadius: 4,
    borderColor: Color.solidGreen,
    borderWidth: 1,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonImage: {
    height: 14,
    width: 14,
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
    marginTop: 10,
  },
});
