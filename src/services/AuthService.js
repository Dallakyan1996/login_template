import axios from "axios";
import store from "../Store/store";
import { history } from "../Helpers/history";
import { getError } from "../Helpers/helpers";
import { localStorageLogin } from "../Utils/constants";

const acces_token = JSON.parse(localStorage.getItem(localStorageLogin)).access_token.toString()

export const authClient = axios.create({
    baseURL: process.env.REACT_APP_END_POINT + "/api",
    headers: {
        'Authorization': 'Bearer ' + acces_token
    }
});
const dispatch = store.dispatch

authClient.interceptors.response.use(
    (response) => {
        return response;
    },
    function (error) {
        if (
            error.response &&
            [401, 419].includes(error.response.status) &&
            store.getters["auth/authUser"] &&
            !store.getState().auth.guest
        ) {
            this.logout();
        }
        return Promise.reject(error);
    }
);

export default {
    async login(payload) {
        return authClient.post("/login", payload);
    },
    logout() {
        authClient.post("/logout")
            .then(() => {
                commit("SET-USER", {
                    user: null
                })
                this.setGuest("isGuest");
                if (history.location.pathname !== "login")
                    history.location.push("/login")
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
    async getAuthUser() {

        commit("SET-LOADING", {
            loading: true
        })
        try {
            const response = await authClient.get("/api/users/auth");
            commit("SET-USER", {
                user: response.data.result
            })
            commit("SET-LOADING", {
                loading: false
            })
            return response.data.result;
        } catch (error) {
            commit("SET-USER", {
                user: null
            })
            commit("SET-LOADING", {
                loading: false
            })

            commit("SET-ERROR", {
                error: getError(error)
            })
        }
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