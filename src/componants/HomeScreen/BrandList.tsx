import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {text} from '../../constants/AppStyle';
import {ProductData} from './ProductCellHome';
import BrandCell from './BrandCell';

type BrandListProps = {
  title: string;
  products: ProductData[];
  onTap: (id: string, name: string) => void;
};
const BrandList = (props: BrandListProps) => {
  const renderItem = ({item}: any) => {
    return (
      <BrandCell id={item.id} icon={item.icon} name={item.name} onTap={props.onTap}/>
    );
  };

  return (
    <View style={{margin: 10}}>
      <Text style={text.title}>{props.title}</Text>
      <FlatList
        data={props.products}
        renderItem={renderItem}
        keyExtractor={prod => prod.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default BrandList;

const styles = StyleSheet.create({});
