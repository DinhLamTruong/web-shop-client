import axiosClient from './axiosClient';

const CheckoutAPI = {
  postEmail: query => {
    const url = `/api/orders/email`;
    return axiosClient.post(url, query);
  },
};

export default CheckoutAPI;
