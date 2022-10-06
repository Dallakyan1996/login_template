import {apiClient} from "./API";

export default {
  getUser(userId) {
    return apiClient.get(`/users/${userId}`);
  },
  getUsers() {
    return apiClient.get(`/users`);
  },
};