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

import {
  ApplyCouponView,
  NavigationBar,
  PaymentDetailsView,
  ProductIncartCell,
} from '../../componants';
import {Color} from '../../constants/Colors';
import {ItemCounter} from '../../componants/AddToCartButton';
import { text } from '../../constants/AppStyle';

const ReviewCartScreen = () => {
  // const route = useRoute();
  // const {product} = route.params as {product: ProductData};
  return (
    <Fragment>
      <SafeAreaView style={{flex: 0, backgroundColor: Color.solidWhite}}>
        <NavigationBar title="Review Cart" />
      </SafeAreaView>
      <SafeAreaView style={{flex: 1, backgroundColor: Color.solidGreen}}>
        <ScrollView style={{backgroundColor: Color.solidWhite}}>
          <DeliveryInfoView />
          <CartDetailView />
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

export default ReviewCartScreen;

const DeliveryInfoView = () => {
  return (
    <View style={[styles.deliveryInfo, styles.shadow]}>
      <Text style={styles.deliveryTitle}>Delivery by morning 29 July 2023</Text>
      <Text style={styles.deliverySubtitle}>
        Your address not verified, we will deliver your order after successfully
        verify.
      </Text>
    </View>
  );
};
const CartDetailView = () => {
  return (
    <View style={{marginLeft: 12}}>
      <Text style={[text.title, {marginBottom: 8}]}>3 Items in your cart</Text>
      {/* <ProductIncartCell /> */}
    </View>
  );
};
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

const CounterView = (props: {title: string; value: number}) => {
  return (
    <View style={styles.titleRow}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.counterContainer}>
        <ItemCounterButton />
      </View>
    </View>
  );
};
const ItemCounterButton = () => {
  const maxLimit: number = 30;
  const [count, setCount] = useState(0);

  const updateCounterValueBy = (value: number) => {
    if (value == 1 && count == maxLimit) {
      return;
    }
    if (value == -1 && count == 0) {
      return;
    }
    setCount(count + value);
  };
  return (
    <ItemCounter
      value={count}
      onDecrease={() => {
        updateCounterValueBy(-1);
      }}
      onIncrease={() => {
        updateCounterValueBy(1);
      }}
    />
  );
};
const styles = StyleSheet.create({
  deliveryInfo: {
    marginHorizontal: 12,
    marginVertical: 16,
    padding: 4,
    borderColor: Color.solidGreen,
    borderWidth: 1,
    borderRadius: 8,
  },
  deliveryTitle: {
    marginHorizontal: 12,
    marginBottom: 3,
    fontSize: 16,
    fontWeight: '500',
    color: Color.solidBlack,
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2}, // change this for more shadow
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  deliverySubtitle: {
    marginHorizontal: 12,
    fontSize: 14,
    fontWeight: '400',
    color: Color.solidGrey,
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
