import {getService} from '../../data/services/NetworkClient';

const ProductListViewModel = () => {
  const productsBycategoryId = async (id: string) => {
    let result = await getService('/v1/product/category/' + id);
    return result;
  };
  const productsByBrandId = async (id: string) => {
    let result = await getService('/v1/product/brand/' + id);
    return result;
  };
  return {
    productsBycategoryId,
    productsByBrandId
  };
};

export default ProductListViewModel;
