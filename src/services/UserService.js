import * as API from "./api";

export default {
  getUser(userId) {
    return API.apiClient.get(`/users/${userId}`);
  },
  getUsers() {
    return API.apiClient.get(`/users`);
  },
};