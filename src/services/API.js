import axios from "axios";
import store from "../Store/store";
import AuthService from "./AuthService";
import { localStorageLogin } from "../Utils/constants";

const acces_token = JSON.parse(localStorage.getItem(localStorageLogin)).access_token.toString()

export const apiClient = axios.create({
    baseURL: process.env.REACT_APP_END_POINT + "/api",
});

authClient.interceptors.request.use(
    config => {
        config.headers['Authorization'] = `Bearer ${acces_token}`;
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
            store.getState().auth.authUser &&
            !store.getState().auth.guest
        ) {
            AuthService.logout();
        }
        return Promise.reject(error);
    }
);