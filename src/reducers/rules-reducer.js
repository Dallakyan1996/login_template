let initialState = {
    rulesArr: [],
}

let rulesArrReducer = (state = initialState, action) => {

    switch (action.type) {

        case "SET-RULES-ARR":
            return {
                ...state,
                rulesArr: action.payload.data
            }
        default: return state
    }
}

export default rulesArrReducer;