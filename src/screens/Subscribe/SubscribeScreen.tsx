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
import {ForwardArrow, NavigationBar} from '../../componants';
import {Color} from '../../constants/Colors';
import {text} from '../../constants/AppStyle';
import {ProductInfo} from '../ProductDetails/ProductDetailScreen';
import {ItemCounter} from '../../componants/AddToCartButton';

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
          <CouponView />
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
              resizeMode='contain'
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
const CouponView = () => {
  return (
    <View style={styles.productContainer}>
      <Image
        source={require('../../../assets/images/ic-discount-percantage.png')}
        style={styles.discountImage}
      />
      <View
        style={{
          marginVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={text.subtitle}>Add coupon code</Text>
          <Text style={styles.couponInfoText}>
            Avail offers and discounts on this order
          </Text>
        </View>
        <View style={{justifyContent: 'center', marginRight: 16}}>
          <ForwardArrow />
        </View>
      </View>
    </View>
  );
};

const BuildSubscriptionView = () => {
  return (
    <View style={{marginLeft: 12}}>
      <Text style={[text.title, {marginBottom: 8}]}>
        Build your subscription
      </Text>
      <CounterView title="Total deliveries" value={1} />
      <CounterView title="Quantity per delivery" value={1} />
      <SubscriptionIntervalView title="Start Date" buttonTitle="28/07/2023" />
      <SubscriptionIntervalView
        title="Delivery Intervals"
        buttonTitle="Daily"
      />
    </View>
  );
};

const PaymentDetailsView = () => {
  return (
    <View style={{marginLeft: 12, marginTop: 20}}>
      <Text style={[text.title, {marginBottom: 8}]}>Payment Details</Text>
      <PaymentCellView title="Item total" subtitle="₹56.00" />
      <PaymentCellView title="Handling charges" subtitle="₹5.00" />
      <PaymentCellView title="Delivery fee" subtitle="₹50.00 FREE" />
      <PaymentCellView title="Discount" subtitle="-₹10.00" />
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
const PaymentCellView = (props: {title: string; subtitle: string}) => {
  return (
    <View style={[styles.titleRow, {alignItems: 'center'}]}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={[styles.date, {marginRight: 12}]}>{props.subtitle}</Text>
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
  discountImage: {height: 30, width: 30, margin: 12},
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
  couponInfoText: {
    fontSize: 10,
    fontWeight: '400',
    color: Color.solidGrey,
    marginTop: 4,
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
