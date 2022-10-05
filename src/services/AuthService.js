import axios from "axios";
import store from "../Store/store";
import { history } from "../Helpers/history";
import { getError } from "../Helpers/helpers";
import { localStorageLogin } from "../Utils/constants";

const get_acces_token = () => {
    return JSON.parse(localStorage.getItem(localStorageLogin))?.access_token?.toString()
}
export const authClient = axios.create({
    baseURL: process.env.REACT_APP_END_POINT + "/api",
});
const dispatch = store.dispatch
authClient.interceptors.request.use(
    config => {
        config.headers['Authorization'] = `Bearer ${get_acces_token()}`;
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
                commit("SET-USER", {
                    user: result
                })
                localStorage.setItem(localStorageLogin, JSON.stringify(response.data.result))
                history?.push("/")
            },
            (error) => {
                commit("SET-ERROR", {
                    error: getError(error)
                })
            }
        );
    },
    logout() {
        authClient.post("/logout",)
            .then(() => {
                commit("SET-USER", {
                    user: null
                })
                this.setGuest("isGuest");
                if (history?.location?.pathname !== "login")
                    history?.push("/login")

            })
            .catch((error) => {
                commit("SET-ERROR", {
                    error: getError(error)
                })
            });

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
    },
};


const commit = (type, payload) => {
    dispatch({
        type: type,
        payload: payload
    })

}