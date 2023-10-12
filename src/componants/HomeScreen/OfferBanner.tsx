import React, {useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  ActivityIndicator,
} from 'react-native';
import {Color} from '../../constants/Colors';

const {width} = Dimensions.get('window');

export interface BannerProps {
  items: [
    {
      id: string;
      icon: string;
    },
  ];
}

export interface BannerImageProps {
  icon: string;
}

const BannerImage = (props: BannerImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={{uri: props.icon}}
        style={{width, height: 260}}
        onLoadEnd={() => setIsLoading(false)}
      />
      <ActivityIndicator
        style={[
          {position: 'absolute'},
          isLoading ? {display: 'flex'} : {display: 'none'},
        ]}
      />
    </View>
  );
};

const OfferBanner = (props: BannerProps) => {
  const pages = props.items; // Add your content for each page
  const [currentPage, setCurrentPage] = useState(0);

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const page = Math.round(offsetX / width);
    setCurrentPage(page);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        onScroll={handleScroll}
        bounces={false}
        scrollEventThrottle={16} // Adjust the scroll event throttle as needed
      >
        {pages.map((item, index) => (
          <View key={index} style={styles.page}>
            <BannerImage icon={item.icon}></BannerImage>
          </View>
        ))}
      </ScrollView>
      <View style={{position: 'absolute', padding: 8}}>
        <View
          style={[
            styles.pageIndicatorContainer,
            {width: pages.length * 10 + (pages.length - 1) * 4 + 16},
          ]}>
          {pages.map((item, index) => (
            <View
              key={index}
              style={[
                styles.pageIndicator,
                {
                  backgroundColor:
                    index === currentPage ? Color.solidGreen : Color.solidWhite,
                },
              ]}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  scrollView: {
    width,
  },
  page: {
    width,
    height: 260,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000050',
    borderRadius: 9,
    height: 18,
  },
  pageIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 2,
  },
});

export default OfferBanner;
