// api/axiosClient.js
import axios from 'axios';
import queryString from 'query-string';
// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#requestconfig` for the full list of configs
const axiosClient = axios.create({
  // baseURL: 'http://localhost:5000',
  // baseURL: 'https://web-shop-server.onrender.com',
  // baseURL: 'https://web-shop-server-production.up.railway.app',
  baseURL: 'https://web-shop-server.onrender.com/',
  headers: {
    'content-type': 'application/json',
  },
  withCredentials: true,
  paramsSerializer: params => queryString.stringify(params),
});
// axios.defaults.withCredentials = true;
axiosClient.interceptors.request.use(async config => {
  // Handle token here ...
  return config;
});
axiosClient.interceptors.response.use(
  response => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  error => {
    // Handle errors
    // Check if the error has a response (i.e., from the server)
    if (error.response) {
      // Extract status and message from the server's response
      const status = error.response.status;
      const message = error.response.data.message || 'An error occurred';

      const err = new Error();
      err.status = status;
      err.message = message;
      throw err; // Re-throwing with custom object
    }

    // For network errors or other unexpected issues
    throw new Error('Network error or no response from server');
  }
);
export default axiosClient;
