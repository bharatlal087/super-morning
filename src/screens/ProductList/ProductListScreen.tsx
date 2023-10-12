import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {NavigationBar, ProductCell} from '../../componants';
import ProductListController from './ProductListController';

const ProductListScreen = () => {
  const [list, setList] = useState([]);
  const route = useRoute();
  const {category} = route.params as {category: {id: string; name: string}};
  const {productsBycategoryId} = ProductListController();

  const getProductsByCategoryId = async (id: string) => {
    const result = await productsBycategoryId(id);

    if (result.error == null) {
      let data = result.data;
      setList(data);
    }
  };

  useEffect(() => {
    getProductsByCategoryId(category.id);
  }, []);
  const renderItem = ({item}: any) => {
    return <ProductCell item={item} />;
  };
  return (
    <SafeAreaView>
      <NavigationBar title={category.name} />
      <FlatList
        data={list}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparatorView}
        keyExtractor={item => item['id'] ?? Math.random()}
        style={{height: '100%'}}
      />
    </SafeAreaView>
  );
};

export default ProductListScreen;
const ItemSeparatorView = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    height: 0.5,
    marginHorizontal: 20,
    backgroundColor: 'rgba(23,183,96,0.20)',
  },
});
