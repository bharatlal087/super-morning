import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Color} from '../constants/Colors';
import {text} from '../constants/AppStyle';

const AddToCartButton = (props: {title: string}) => {
  const maxLimit: number = 10;
  const [count, setCount] = useState(0);

  const updateCounterValueBy = (value: number) => {
    if (value == 1 && count == maxLimit) {
        return;
    }
    setCount(count + value);
  };

  if (count > 0) {
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
  } else {
    return (
      <View style={[styles.container, {justifyContent: 'center'}]}>
        <TouchableOpacity
          onPress={() => {
            updateCounterValueBy(1);
          }}>
          <Text style={styles.addToCart}>+ {props.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default AddToCartButton;

type CartCountHandler = {
  value: number;
  onIncrease: () => void;
  onDecrease: () => void;
};
export const ItemCounter = (props: CartCountHandler) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={props.onDecrease}
        style={{flex: 1, alignItems: 'center'}}>
        <Text style={[text.title, {color: Color.solidGreen}]}>-</Text>
      </TouchableOpacity>
      <View style={styles.devider}></View>
      <Text style={styles.counterText}>{props.value}</Text>
      <View style={styles.devider}></View>
      <TouchableOpacity
        onPress={props.onIncrease}
        style={{flex: 1, alignItems: 'center'}}>
        <Text style={[text.title, {color: Color.solidGreen}]}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: Color.solidGreen,
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', //Centered horizontally
    flex: 1,
  },
  counterText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '600',
    color: Color.solidGreen,
  },
  addToCart: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
    color: Color.solidGreen,
  },
  devider: {height: '100%', width: 1, backgroundColor: Color.solidGreen},
});
