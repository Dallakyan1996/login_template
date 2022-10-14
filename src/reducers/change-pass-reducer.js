import { changePassActionsType } from "./actions-type"

const { CHANGE_PASSWORD_OPEN,CHANGE_PASSWORD_CLOSE } = changePassActionsType

const initialState = {
    changePassIsOpen: false,
}

export const change_password_reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PASSWORD_OPEN: return {
            ...state,
            changePassIsOpen: true
        }
        case CHANGE_PASSWORD_CLOSE: return {
            ...state,
            changePassIsOpen: action.payload.open
        }
        default: return state;
    }
}