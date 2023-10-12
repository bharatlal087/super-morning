import {getService} from '../../data/services/NetworkClient';

const ProductListViewModel = () => {
  const productsBycategoryId = async (id: string) => {
    let result = await getService('/v1/product/category/' + id);
    return result;
  };

  return {
    productsBycategoryId,
  };
};

export default ProductListViewModel;
