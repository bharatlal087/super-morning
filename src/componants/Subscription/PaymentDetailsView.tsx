import {StyleSheet, Text, View} from 'react-native';
import {text} from '../../constants/AppStyle';
import {Color} from '../../constants/Colors';

const PaymentDetailsView = () => {
  return (
    <View style={{marginLeft: 12, marginTop: 20}}>
      <Text style={[text.title, {marginBottom: 8}]}>Payment Details</Text>
      <PaymentCellView title="Item total" subtitle="₹56.00" isFree={false} />
      <PaymentCellView
        title="Handling charges"
        subtitle="₹5.00"
        isFree={false}
      />
      <PaymentCellView title="Delivery fee" subtitle="₹50.00" isFree={true} />
      <PaymentCellView title="Discount" subtitle="-₹10.00" isFree={false} />
    </View>
  );
};

const PaymentCellView = (props: {
  title: string;
  subtitle: string;
  isFree: boolean;
}) => {
  return (
    <View style={[styles.titleRow, {alignItems: 'center'}]}>
      <Text style={styles.title}>{props.title}</Text>
      {props.isFree ? (
        <DiscountPriceView value={props.subtitle} />
      ) : (
        <Text style={[styles.date, {marginRight: 12}]}>{props.subtitle}</Text>
      )}
    </View>
  );
};
const DiscountPriceView = (props: {value: string}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
      <Text style={text.discount}>{props.value}</Text>
      <Text style={[styles.date, {marginRight: 12, marginLeft: 2}]}>FREE</Text>
    </View>
  );
};
export default PaymentDetailsView;
const styles = StyleSheet.create({
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: `${Color.solidGreen}40`,
    borderBottomWidth: 1,
  },
  date: {
    fontSize: 14,
    fontWeight: '500',
    color: Color.solidGreen,
    textAlign: 'right',
    paddingTop: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: Color.solidGrey,
    marginVertical: 16,
  },
});
