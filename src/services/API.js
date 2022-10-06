import axios from "axios";
import AuthService from "./AuthService";
import {getToken } from "../Utils/constants";
import store from "../Store/store";

const access_token = getToken()?.access_token
const state = store.getState()
export const apiClient = axios.create({
    baseURL: process.env.REACT_APP_END_POINT + "/api",
});
apiClient.interceptors.request.use(
    config => {
        config.headers['Authorization'] = `Bearer ${access_token}`;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        if (
            error.response &&
            [401, 419].includes(error.response.status) &&
            state.auth.authUser
        ) {
            AuthService.logout();
        }
        return Promise.reject(error);
    }
);