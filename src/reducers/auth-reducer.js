import { authActionsType } from "./actions-type"

let initialState = {
    user: null,
    loading: false,
    isAdmin: false,
    error: null,
    isLoggedIn: false
}
let auth_reducer = (state = initialState, action) => {
    const { SET_USER, SET_LOADING, SET_ERROR } = authActionsType
    switch (action.type) {
        case SET_USER: return {
            ...state,
            user: action.payload.user,
            isAdmin: !!action.payload.user.is_admin,
            isLoggedIn: !!action.payload.user
        }
        case SET_LOADING: return {
            ...state,
            loading: action.payload.loading
        }
        case SET_ERROR: return {
            ...state,
            error: action.payload.error
        }
        default: return state
    }

}

export default auth_reducer;