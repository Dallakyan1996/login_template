import axios from "axios";
import store from "../Store/store";
import { history } from "../Helpers/history";
import { getError } from "../Helpers/helpers";
import { accessToken } from "../Utils/constants";
import { authActionsType } from "../Reducers/actions-type";
import { authActionCreator } from "../Reducers/action-creator";

const get_access_token = () => {
    return localStorage.getItem(accessToken)
}
const { SET_USER, SET_ERROR } = authActionsType
export const authClient = axios.create({
    baseURL: process.env.REACT_APP_END_POINT + "/api",
});
const dispatch = store.dispatch;

authClient.interceptors.request.use(
    config => {
        config.headers['Authorization'] = `Bearer ${get_access_token()}`;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

authClient.interceptors.response.use(
    (response) => {
        return response;
    },
    function (error) {
        if (
            error.response &&
            [401, 419].includes(error.response.status) &&
            store.getState().auth.user &&
            !store.getState().auth.guest
        ) {
            this.logout();
        }
        return Promise.reject(error);
    }
);

export default {
    async login(payload) {
        authClient.post("/login", payload).then(
            (response) => {
                const result = response.data.result
                dispatch(
                    authActionCreator(SET_USER, {
                        user: result
                    }))
                localStorage.setItem(accessToken, response.data.result.access_token)
                history?.push("/")
            },
            (error) => {
                dispatch(
                    authActionCreator(SET_ERROR, {
                        error: getError(error)
                    }))
            }
        )
    },
    logout() {
        authClient.post("/logout")
            .then(() => {
                dispatch(
                    authActionCreator(SET_USER, {
                        user: null
                    }))
                this.setGuest("isGuest");
                if (history?.location?.pathname !== "login")
                    history?.push("/login")

            })
            .catch((error) => {
                dispatch(
                    authActionCreator(SET_ERROR, {
                        error: getError(error)
                    }))
            })
    },

    async forgotPassword(payload) {
        return authClient.post("/forgot-password", payload);
    },
    getAuthUser() {
        return authClient.get("/users/auth");
    },
    async resetPassword(payload) {
        return authClient.post("/reset-password", payload);
    },
    updatePassword(payload) {
        return authClient.put("/user/password", payload);
    },
    sendVerification(payload) {
        return authClient.post("/email/verification-notification", payload);
    },
    updateUser(payload) {
        return authClient.put("/user/profile-information", payload);
    },
    setGuest(value) {
        window.localStorage.setItem("guest", value);
    }
};

