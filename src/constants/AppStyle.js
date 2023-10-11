import {StyleSheet} from 'react-native';
import {Color} from './Colors';

export const text = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: Color.solidBlack,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '400',
    color: Color.solidBlack,
  },
  price: {
    fontSize: 13,
    fontWeight: '600',
    color: Color.solidBlack,
  },
  discount: {
    fontSize: 10,
    fontWeight: '400',
    color: Color.solidGrey,
    textDecorationLine: 'line-through'
  }
});
