import {useNavigation} from '@react-navigation/native';
import {screenMap} from '../../navigation/screenMap';
import ProductListViewModel from './ProductListViewModel';

const ProductListController = () => {
  const navigation = useNavigation();
  const {productsBycategoryId, productsByBrandId} = ProductListViewModel();

  // const gotoCategory = (id, name) => {
  //     navigation.navigate(screenMap.ProductListScreen, {category: {id, name}})
  // }

  return {
    productsBycategoryId,
    productsByBrandId
  };
};

export default ProductListController;
