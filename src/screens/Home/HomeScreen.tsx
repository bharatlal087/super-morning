import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import CommonStyle from '../../utility/CommonStyle';
import HomeNavigationBar from '../../componants/HomeNavigationBar';
import SearchBar from '../../componants/SearchBar';
import CategoryList from '../../componants/HomeScreen/CategoryList';
import ProductList from '../../componants/HomeScreen/ProductList';
import OfferBanner from '../../componants/HomeScreen/OfferBanner';
import {postService} from '../../data/services/NetworkClient';
import HomeController from './HomeController';

const listItems = [
  {
    name: 'Amy Farha',
    imageUrl:
      'https://images.unsplash.com/photo-1502989642968-94fbdc9eace4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMDY1OTc2fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=900&q=60',
    id: '1',
  },
  {
    name: 'Chris Jackson',
    imageUrl:
      'https://images.unsplash.com/photo-1502989642968-94fbdc9eace4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMDY1OTc2fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=900&q=60',
    id: '2',
  },
  {
    name: 'Amy Farha',
    imageUrl:
      'https://images.unsplash.com/photo-1502989642968-94fbdc9eace4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMDY1OTc2fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=900&q=60',
    id: '3',
  },
  {
    name: 'Amy Farha',
    imageUrl:
      'https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMDY1OTc2fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=900&q=60',
    id: '10',
  },
];

interface DashboardData {
  id: string;
  index: number;
  name: string;
  title: string;
  items?: [DashboardDataItem];
  products?: [ProductData];
}

interface DashboardDataItem {
  id: string;
  name: string;
  type: string;
  icon: string;
}

interface ProductData {
  id: string;
  name: string;
  title: string;
  logo: string;
}

function HomeScreen(): JSX.Element {
  const [list, setList] = useState([]);
  const {dashboardItems} = HomeController();

  const getDashboardData = async () => {
    const result = await dashboardItems('gurgaon', 'haryana');

    if (result.error == null) {
      let data = result.data;
      data.unshift({
        id: '000ff',
        index: -1,
        name: 'Search',
        title: 'Search',
      });
      console.log(data);
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
        <ProductList data={{title: item.title, products: item.products}} />
      );
    }
    return <Text></Text>;
  };

  return (
    <SafeAreaView style={{backgroundColor: '#FFF'}}>
      <View style={CommonStyle.container}>
        <HomeNavigationBar />
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => item['id']}
        />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;

const products = [
  {
    id: '1',
    title: 'Tender coconut water',
    price: '30',
    imageUrl:
      'https://images.unsplash.com/photo-1502989642968-94fbdc9eace4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMDY1OTc2fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=900&q=60',
    originalPrice: '32',
    available: true,
  },
  {
    id: '2',
    title: 'Tender coconut water',
    price: '300',
    imageUrl:
      'https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMDY1OTc2fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=900&q=60',
    originalPrice: '320',
    available: true,
  },
  {
    id: '3',
    title: 'Tender coconut water',
    price: '290',
    imageUrl:
      'https://images.unsplash.com/photo-1502989642968-94fbdc9eace4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMDY1OTc2fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=900&q=60',
    originalPrice: '320',
    available: true,
  },
  {
    id: '4',
    title: 'Tender coconut water',
    price: '380',
    imageUrl:
      'https://images.unsplash.com/photo-1559583985-c80d8ad9b29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMDY1OTc2fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=900&q=60',
    originalPrice: '400',
    available: false,
  },
];
