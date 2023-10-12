import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import HomeController from './HomeController';
import {
  CategoryList,
  ProductList,
  OfferBanner,
  SearchBar,
  HomeNavigationBar,
} from '../../componants';
import {Color} from '../../constants/Colors';
import { ProductData } from '../../componants/HomeScreen/Product';

function HomeScreen(): JSX.Element {
  const [list, setList] = useState([]);
  const {dashboardItems, gotoProductDetails} = HomeController();
  const insets = useSafeAreaInsets();

  const getDashboardData = async () => {
    const result = await dashboardItems('gurgaon', 'haryana');

    if (result.error == null) {
      let data = result.data;
      data.unshift({
        id: 'SearchID',
        index: -1,
        name: 'Search',
        title: 'Search',
      });
      setList(data);
    }
  };

  useEffect(() => {
    getDashboardData();
  }, []);

  const renderItem = ({item}: any) => {
    if (item.name === 'Search') {
      return <SearchBar placeholderText="Search for an item" />;
    } else if (item.name === 'TopCategory') {
      return <CategoryList categories={item.items} />;
    } else if (item.name === 'Banner') {
      return <OfferBanner items={item.items} />;
    } else if (item.name === 'Products') {
      return (
        <ProductList
          data={{
            title: item.title,
            products: item.products,
          }}
          onTap={onProductTap}
        />
      );
    }
    return <Text></Text>;
  };

  const onProductTap = ((item: ProductData) => {
    gotoProductDetails(item)
  });

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        backgroundColor: Color.solidWhite,
      }}>
      <HomeNavigationBar />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item['id'] ?? Math.random()}
      />
    </View>
  );
}

export default HomeScreen;
