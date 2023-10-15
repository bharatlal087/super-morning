import { Image, StyleSheet, Text, View } from "react-native";
import ForwardArrow from "../ForwardArrow";
import { text } from "../../constants/AppStyle";
import { Color } from "../../constants/Colors";

const ApplyCouponView = () => {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../../assets/images/ic-discount-percantage.png')}
          style={styles.discountImage}
        />
        <View style={styles.couponTextContainer}>
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

  export default ApplyCouponView;

  const styles = StyleSheet.create({
    container: {
        backgroundColor: `${Color.solidGreen}40`,
        flexDirection: 'row',
        borderBottomColor: `${Color.solidGreen}40`,
        borderBottomWidth: 1,
        borderTopColor: `${Color.solidGreen}40`,
        borderTopWidth: 1,
      },
      couponInfoText: {
        fontSize: 10,
        fontWeight: '400',
        color: Color.solidGrey,
        marginTop: 4,
      },
      couponTextContainer: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      discountImage: {height: 30, width: 30, margin: 12},
  })