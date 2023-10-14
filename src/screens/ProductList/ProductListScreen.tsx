import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {ItemSeparatorView, NavigationBar, ProductCell} from '../../componants';
import ProductListController from './ProductListController';
import { Color } from '../../constants/Colors';

const ProductListScreen = () => {
  const [list, setList] = useState([]);
  const route = useRoute();
  const {category} = route.params as {category: {id: string; name: string, isBrand: boolean}};
  const {productsBycategoryId, productsByBrandId} = ProductListController();

  const getProductsByCategoryId = async (id: string) => {
    const result = await productsBycategoryId(id);
    if (result.error == null) {
      let data = result.data;
      setList(data);
    }
  };
  const getProductsByBrandId = async (id: string) => {
    const result = await productsByBrandId(id);
    if (result.error == null) {
      let data = result.data;
      setList(data);
    }
  };
  useEffect(() => {
    if(category.isBrand) {
        getProductsByBrandId(category.id)
    } else {
        getProductsByCategoryId(category.id);
    }
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
        ListFooterComponent={ItemSeparatorView}
        keyExtractor={item => item['id'] ?? Math.random()}
        style={{height: '100%', backgroundColor: Color.solidWhite}}
      />
    </SafeAreaView>
  );
};

export default ProductListScreen;
