import { useDispatch } from "react-redux"
import { createBrowserHistory } from "history";
import { getError } from "../helpers/helpers";

const history = createBrowserHistory()
const dispatch = useDispatch()
const storageItem = window.localStorage.getItem("guest");
let isGuest = () => {

if (!storageItem) return false;
if (storageItem === "isGuest") return  true;
if (storageItem === "isNotGuest") return  false;
}
let initialState = {
    user: null,
    loading: false,
    error: null,
}

let auth = (state = initialState, action) => {

    switch (action.type) {

        case "SET-USER":
            return {
                ...state,
                user: action.payload.user
            }
        case "SET-LOADING": return {
            ...state,
            loading: action.payload.loading
        }
        case "SET-ERROR": return {
            ...state,
            error: action.payload.error
        }
        case "GET-IS-ADMIN": return state.user ? state.user.isAdmin : false;
        case "GET-LOGGED-IN": return !!state.user;;
        case "GET-LOGGED-IN": return {

        }

        default: return state
    }

}

export const action = {
    logout() {
        return AuthService.logout()
            .then(() => {
                dispatch({
                    type: "SET-USER",
                    payload: {
                        user: null
                    }
                })
                setGuest("isGuest");
                if (history.location.pathname !== "login")
                    history.location.push("/login")
            })
            .catch((error) => {
                dispatch({
                    type: "SET_ERROR",
                    payload: {
                        error: getError(error)
                    }
                })
            });
    },
    async getAuthUser() {
        dispatch({
            type: "SET_LOADING",
            payload: {
                loading: true
            }
        })
        try {
            const response = await AuthService.getAuthUser();
            dispatch({
                type: "SET-USER",
                payload: {
                    user: response.data.result,
                }
            })
            dispatch({
                type: "SET_LOADING",
                payload: {
                    loading: false
                }
            })
            return response.data.result;
        } catch (error) {
            dispatch({
                type: "SET-USER",
                payload: {
                    user: null,
                }
            })
            dispatch({
                type: "SET_LOADING",
                payload: {
                    loading: false
                }
            })
            dispatch({
                type: "SET_ERROR",
                payload: {
                    error: getError(error)
                }
            })
        }
    },
    setGuest(value) {
        window.localStorage.setItem("guest", value);
    },
}

export default auth;