import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProductCellHome, {ProductData} from './ProductCellHome';
import { text } from '../../constants/AppStyle';

interface ProductListProps {
    data: {
        title: string;
        products: ProductData[];
    }
    onTap: (item: ProductData) => void
}
const ProductList = (props: ProductListProps) => {
  const renderItem = ({item}: any) => {
    return <ProductCellHome data={item} onTap={props.onTap} />;
  };
  
  return (
    <View style={{margin: 10}}>
      <Text style={text.title}>{props.data.title}</Text>
      <FlatList
        data={props.data.products}
        renderItem={renderItem}
        keyExtractor={(prod) => prod.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({});
