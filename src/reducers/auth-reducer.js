import { authActionsType } from "./actions-type"

let initialState = {
    user: null,
    loading: false,
    error: null,
}
let auth_reducer = (state = initialState, action) => {
    const { SET_USER, SET_LOADING, SET_ERROR, GET_IS_ADMIN, GET_LOGGED_IN } = authActionsType
    switch (action.type) {
        case SET_USER: return {
                ...state,
                user: action.payload.user
            }
        case SET_LOADING: return {
            ...state,
            loading: action.payload.loading
        }
        case SET_ERROR: return {
            ...state,
            error: action.payload.error
        }
        case GET_IS_ADMIN: return state.user ? state.user.isAdmin : false;
        case GET_LOGGED_IN: return !!state.user;
        default: return state
    }

}

export default auth_reducer;