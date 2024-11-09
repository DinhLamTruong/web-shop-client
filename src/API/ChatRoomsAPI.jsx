import axiosClient from './axiosClient';

const ChatRoomsAPI = {
  getMessageByRoomId: (roomId, page) => {
    const url = `/api/chatrooms/roomid?roomId=${roomId}&page=${page}`;
    return axiosClient.get(url);
  },

  postCreateSession: body => {
    const url = `/api/chatrooms/create-session`;
    return axiosClient.post(url, body);
  },

  addMessage: body => {
    const url = `/api/chatrooms/add-message`;
    return axiosClient.put(url, body);
  },

  getAllRoom: () => {
    const url = `/api/chatrooms/all-room`;
    return axiosClient.get(url);
  },

  deleteRoomId: body => {
    const url = `/api/chatrooms/delete-room`;
    return axiosClient.post(url, body);
  },
};

export default ChatRoomsAPI;
