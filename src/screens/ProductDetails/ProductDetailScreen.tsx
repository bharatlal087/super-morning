import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {Fragment} from 'react';
import {NavigationBar, OfferBanner, AddToCartButton} from '../../componants';
import {useRoute} from '@react-navigation/native';
import {
  ProductData,
  ProductDetails,
} from '../../componants/HomeScreen/ProductCellHome';
import {text} from '../../constants/AppStyle';
import {Color} from '../../constants/Colors';
import ProductDetailsController from './ProductDetailsController';

const ProductDetailScreen = () => {
  const route = useRoute();
  const {product} = route.params as {product: ProductData};
  const {onSubscribe} = ProductDetailsController();
  const bannerImages = product.bannerImages.map((item, index) => {
    return {
      id: `${index}`,
      icon: item,
    };
  }) as [{id: string; icon: string}];

  const onSubscribeTap = (product: ProductData) => {
    onSubscribe(product);
  };

  return (
    <Fragment>
      <SafeAreaView style={{flex: 0, backgroundColor: Color.solidWhite}}>
        <NavigationBar title={product.title} />
      </SafeAreaView>
      <SafeAreaView style={{flex: 1, backgroundColor: Color.solidGreen}}>
        <ScrollView style={{backgroundColor: Color.solidWhite}}>
          <View style={{height: 260}}>
            <OfferBanner items={bannerImages} />
          </View>
          <View style={{marginVertical: 16}}>
            <ProductInfo {...product} />
          </View>
          <View style={{height: 34, marginLeft: 16, width: 146}}>
            <AddToCartButton title="ADD TO CART" />
          </View>
          {product.productDetails.map((item, index) => {
            return <Details key={`${index}`} {...item} />;
          })}
          <View style={{height: 10}}></View>
        </ScrollView>
        <TouchableOpacity style={styles.subsButton} onPress={() => {onSubscribeTap(product)}}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.subsImage}
              source={require('../../../assets/images/calendar.png')}
            />
            <Text style={styles.subsText}>Subscribe</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </Fragment>
  );
};

export default ProductDetailScreen;

const Details = ({title, messages, isBullet}: ProductDetails) => {
  if (isBullet) {
    return (
      <View style={{marginHorizontal: 12}}>
        <Text style={[text.title, {marginTop: 10}]}>{title}</Text>
        {messages.map(item => {
          return (
            <View
              key={item}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 2,
              }}>
              <View style={styles.bullet} />
              <Text
                style={[
                  text.subtitle,
                  {color: Color.solidGrey, marginRight: 10},
                ]}>
                {item}
              </Text>
            </View>
          );
        })}
      </View>
    );
  } else {
    return (
      <View style={{marginHorizontal: 12}}>
        <Text style={[text.title, {marginTop: 10}]}>{title}</Text>
        <Text
          style={[text.subtitle, {color: Color.solidGrey, marginVertical: 2}]}>
          {messages[0]}
        </Text>
      </View>
    );
  }
};

export const ProductInfo = ({
  name,
  discountedPrice,
  price,
  quantity,
  discountedPercentage,
}: ProductData) => {
  return (
    <View style={{marginHorizontal: 12}}>
      <Text style={text.title}>{name}</Text>
      <View style={styles.priceContainer}>
        <Text style={{fontSize: 20, fontWeight: '700', marginRight: 5}}>
          ₹{discountedPrice}
        </Text>
        <Text style={[styles.greyText, {textDecorationLine: 'line-through'}]}>
          ₹{price}
        </Text>
        <Text style={styles.greyText}> per {quantity}</Text>
      </View>
      <Text style={styles.saving}>
        You save ₹{(price - discountedPrice).toFixed(1)} ({discountedPercentage}
        %)
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  greyText: {
    fontSize: 14,
    fontWeight: '400',
    color: Color.solidGrey,
  },
  priceContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 4,
    alignItems: 'baseline',
  },
  saving: {
    fontSize: 14,
    fontWeight: '500',
    color: Color.solidGreen,
  },
  bullet: {
    height: 8,
    width: 8,
    backgroundColor: Color.solidGreen,
    borderRadius: 4,
    marginRight: 4,
  },
  subsButton: {
    backgroundColor: Color.solidGreen,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subsImage: {height: 20, width: 20, marginRight: 10},
  subsText: {fontSize: 18, fontWeight: '500', color: Color.solidWhite},
});
