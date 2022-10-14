import { changePassActionsType } from "./actions-type"

const { CHANGE_PASSWORD_OPEN } = changePassActionsType

const initialState = {
    changePassIsOpen: false,
}

export const change_password_reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PASSWORD_OPEN: return {
            ...state,
            changePassIsOpen: !state.changePassIsOpen
        }
        default: return state;
    }
}