import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ProductData} from '../HomeScreen/ProductCellHome';
import {Color} from '../../constants/Colors';
import {text} from '../../constants/AppStyle';
import AddToCartButton from '../AddToCartButton';
import ForwardArrow from '../ForwardArrow';
type Props = {
  item: ProductData;
  onSubscribe: (item: ProductData) => void;
};
const ProductCell = (props: Props) => {
  const {name, price, discountedPrice, quantity, logo} = props.item;

  return (
    <View style={{flexDirection: 'row', backgroundColor: Color.solidWhite}}>
      <Image style={styles.image} source={{uri: logo, cache: 'force-cache'}} />
      <View style={{marginVertical: 14}}>
        <Text style={[text.subtitle, {marginBottom: 4}]}>{name}</Text>
        <Text style={[text.grey10400, {marginBottom: 10}]}>{quantity}</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{height: 24, width: 82, marginRight: 10}}>
            <AddToCartButton title="ADD" />
          </View>
          <SubscribeButton onTap={() => props.onSubscribe(props.item)} />
        </View>
      </View>
      <View
        style={{marginVertical: 10, justifyContent: 'center', marginLeft: 10}}>
        <Text style={[text.price, {textAlign: 'right'}]}>
          ₹{discountedPrice}
        </Text>
        <Text style={[text.discount, {textAlign: 'right'}]}>₹{price}</Text>
      </View>
      <View
        style={{marginVertical: 10, justifyContent: 'center', marginLeft: 10}}>
        <ForwardArrow />
      </View>
    </View>
  );
};

export default ProductCell;

const SubscribeButton = (props: {onTap: () => void}) => {
  return (
    <View>
      <TouchableOpacity onPress={props.onTap} style={styles.addToCart}>
        <Image
          source={require('../../../assets/images/calendar.png')}
          style={[styles.buttonImage, {tintColor: Color.solidGreen}]}
        />
        <Text style={styles.buttonTitle}>SUBSCRIBE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 65,
    width: 65,
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 10,
  },
  addToCart: {
    borderRadius: 4,
    borderColor: Color.solidGreen,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    height: 24,
    paddingHorizontal: 10,
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
  },
});
