import axiosClient from './axiosClient';

const HistoryAPI = {
	getHistoryAPI: (query) => {
		const url = `/api/histories${query}`;
		return axiosClient.get(url);
	},

	getDetail: (id) => {
		const url = `/api/histories/${id}`;
		return axiosClient.get(url);
	},
};

export default HistoryAPI;
