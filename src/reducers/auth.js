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

export default auth;