import axiosClient from './axiosClient';

const CartAPI = {
	getCarts: (query) => {
		const url = `/api/carts${query}`;
		return axiosClient.get(url);
	},

	postAddToCart: (query) => {
		const url = `/api/carts/add${query}`;
		return axiosClient.post(url);
	},

	deleteToCart: (query) => {
		const url = `/api/carts/delete${query}`;
		return axiosClient.delete(url);
	},

	putToCart: (query) => {
		const url = `/api/carts/update${query}`;
		return axiosClient.put(url);
	},
};

export default CartAPI;
