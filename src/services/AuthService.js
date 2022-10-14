import store from "../Store/store";
import { history, getError } from "../Helpers/helpers";
import { accessToken } from "../Utils/constants";
import { authActionsType } from "../Reducers/actions-type";
import { authActionCreator } from "../Reducers/action-creator";
import { apiClient } from "./API";

const { SET_USER, SET_ERROR } = authActionsType;
const dispatch = store.dispatch;

const AuthService =  {
    async login(payload) {
        apiClient.post("/login", payload).then(
            (response) => {
                const result = response.data.result
                const user = result.user
                const tokenParams = {
                    expires_in: result.expires_in,
                    access_token: result.access_token
                }
                dispatch(
                    authActionCreator(SET_USER, {
                        user: user
                    }))
                localStorage.setItem(accessToken,JSON.stringify(tokenParams))
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
        apiClient.post("/logout")
            .then(() => {
                dispatch(
                    authActionCreator(SET_USER, {
                        user: null
                    }))
            })
            .catch((error) => {
                dispatch(
                    authActionCreator(SET_ERROR, {
                        error: getError(error)
                    }))
            })
    },

    async forgotPassword(payload) {
        return apiClient.post("/forgot-password", payload);
    },
    getAuthUser() {
        return apiClient.get("/users/auth");
    },
    async resetPassword(payload) {
        return apiClient.post("/reset-password", payload);
    },
    updatePassword(payload) {
        return apiClient.post("/change-password", payload);
    },
    sendVerification(payload) {
        return apiClient.post("/email/verification-notification", payload);
    },
    updateUser(payload) {
        return apiClient.put("/user/profile-information", payload);
    }
};

export default AuthService;