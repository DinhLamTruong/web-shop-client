import axiosClient from './axiosClient';

const UserAPI = {
  postLogin: query => {
    const url = '/api/auth/login';
    return axiosClient.post(url, query);
  },

  getDetailData: id => {
    const url = `/users/${id}`;
    return axiosClient.get(url);
  },

  postSignUp: query => {
    const url = '/api/auth/signup';
    return axiosClient.post(url, query);
  },
};

export default UserAPI;
