import axiosClient from './axiosClient';

const ProductAPI = {
  getAPI: () => {
    const url = '/api/products';
    return axiosClient.get(url);
  },

  getCategory: query => {
    const url = `/api/products/category${query}`;
    return axiosClient.get(url);
  },

  getDetail: id => {
    const url = `/api/products/${id}`;
    return axiosClient.get(url);
  },

  getPagination: query => {
    const url = `/api/products/shop${query}`;
    return axiosClient.get(url);
  },
};

export default ProductAPI;
