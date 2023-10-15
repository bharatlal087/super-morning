import {useNavigation} from '@react-navigation/native';
import {screenMap} from '../../navigation/screenMap';
import ProductListViewModel from './ProductListViewModel';

const ProductListController = () => {
  const navigation = useNavigation();
  const {productsBycategoryId, productsByBrandId} = ProductListViewModel();

  // const gotoCategory = (id, name) => {
  //     navigation.navigate(screenMap.ProductListScreen, {category: {id, name}})
  // }

  const onSubscribe = product => {
    navigation.navigate(screenMap.SubscribeScreen, {product: product});
  };

  return {
    productsBycategoryId,
    productsByBrandId,
    onSubscribe
  };
};

export default ProductListController;
