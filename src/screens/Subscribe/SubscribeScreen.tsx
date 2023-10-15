import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Fragment, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {ProductData} from '../../componants/HomeScreen/ProductCellHome';
import {
  ApplyCouponView,
  ForwardArrow,
  NavigationBar,
  PaymentDetailsView,
  ItemCounterButton
} from '../../componants';
import {Color} from '../../constants/Colors';
import {text} from '../../constants/AppStyle';
import {ProductInfo} from '../ProductDetails/ProductDetailScreen';

const SubscribeScreen = () => {
  const route = useRoute();
  const {product} = route.params as {product: ProductData};
  return (
    <Fragment>
      <SafeAreaView style={{flex: 0, backgroundColor: Color.solidWhite}}>
        <NavigationBar title="Subscribe" />
      </SafeAreaView>
      <SafeAreaView style={{flex: 1, backgroundColor: Color.solidGreen}}>
        <ScrollView style={{backgroundColor: Color.solidWhite}}>
          <ProductView product={product} />
          <PriceChangeInfoView />
          <BuildSubscriptionView />
          <ApplyCouponView />
          <PaymentDetailsView />
          <TotalAmpontView amount={56.0} />
          <TotalSavingView saving={60.0} />
          <View style={{height: 10}} />
        </ScrollView>
        <TouchableOpacity style={styles.subsButton}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.subsImage}
              source={require('../../../assets/images/cart-white.png')}
              tintColor={Color.solidWhite}
              resizeMode="contain"
            />
            <Text style={styles.subsText}>PROCEED TO CHECKOUT</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </Fragment>
  );
};

export default SubscribeScreen;

const TotalAmpontView = (props: {amount: number}) => {
  return (
    <View style={[styles.titleRow, {alignItems: 'center', marginLeft: 12}]}>
      <Text style={styles.amountTitle}>Payable Amount</Text>
      <Text style={styles.amountValue}>₹{props.amount}</Text>
    </View>
  );
};
const TotalSavingView = (props: {saving: number}) => {
  return (
    <View style={styles.saving}>
      <Text style={styles.savingText}>
        You saved ₹{props.saving} on this order
      </Text>
    </View>
  );
};

const BuildSubscriptionView = () => {
  return (
    <View style={{marginLeft: 12}}>
      <Text style={[text.title, {marginBottom: 8}]}>
        Build your subscription
      </Text>
      <CounterView title="Total deliveries" value={30} />
      <CounterView title="Quantity per delivery" value={1} />
      <SubscriptionIntervalView title="Start Date" buttonTitle="28/07/2023" />
      <SubscriptionIntervalView
        title="Delivery Intervals"
        buttonTitle="Daily"
      />
    </View>
  );
};

const CounterView = (props: {title: string; value: number}) => {
  return (
    <View style={styles.titleRow}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.counterContainer}>
        <ItemCounterButton value={props.value}/>
      </View>
    </View>
  );
};
const SubscriptionIntervalView = (props: {
  title: string;
  buttonTitle: string;
}) => {
  return (
    <View style={styles.titleRow}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={[styles.counterContainer, {flexDirection: 'row'}]}>
        <TouchableOpacity>
          <Text style={styles.date}>{props.buttonTitle}</Text>
        </TouchableOpacity>
        <View style={{justifyContent: 'center', marginLeft: 5}}>
          <ForwardArrow />
        </View>
      </View>
    </View>
  );
};
const ProductView = (props: {product: ProductData}) => {
  const {product} = props;
  console.log(product);
  return (
    <View style={styles.productContainer}>
      <Image
        source={{uri: product.logo, cache: 'force-cache'}}
        style={styles.productImage}
      />
      <View style={{marginVertical: 8}}>
        <ProductInfo {...product} />
      </View>
    </View>
  );
};

const PriceChangeInfoView = () => {
  return (
    <Text style={styles.info}>
      Note: Price of products on subscription may change as per market changes.
    </Text>
  );
};

const styles = StyleSheet.create({
  date: {
    fontSize: 14,
    fontWeight: '500',
    color: Color.solidGreen,
    textAlign: 'right',
    paddingTop: 4,
  },
  productContainer: {
    backgroundColor: `${Color.solidGreen}40`,
    flexDirection: 'row',
    borderBottomColor: `${Color.solidGreen}40`,
    borderBottomWidth: 1,
    borderTopColor: `${Color.solidGreen}40`,
    borderTopWidth: 1,
  },
  productImage: {height: 60, width: 60, marginHorizontal: 12, marginTop: 8},
  info: {
    marginVertical: 16,
    marginHorizontal: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: 'rgba(255, 177, 0, 0.05)',
    borderColor: 'rgba(255, 177, 0, 0.20)',
    borderRadius: 8,
    borderWidth: 1,
    color: '#FFB100',
    fontSize: 12,
    fontWeight: '400',
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: Color.solidGrey,
    marginVertical: 16,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: `${Color.solidGreen}40`,
    borderBottomWidth: 1,
  },
  counterContainer: {
    height: 26,
    width: 112,
    marginRight: 12,
    marginVertical: 12.5,
    justifyContent: 'flex-end',
  },
  amountTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: Color.solidBlack,
  },
  amountValue: {
    fontSize: 18,
    fontWeight: '600',
    color: Color.solidBlack,
    marginRight: 12,
    marginVertical: 12.5,
  },
  saving: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `${Color.solidGreen}40`,
    paddingVertical: 12,
  },
  savingText: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
    color: Color.solidGreen,
  },
  subsButton: {
    backgroundColor: Color.solidGreen,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subsImage: {height: 21, width: 20, marginRight: 10},
  subsText: {fontSize: 18, fontWeight: '500', color: Color.solidWhite},
});
