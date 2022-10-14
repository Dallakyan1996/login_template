import { createStore, combineReducers } from "redux";
import auth_reducer from "../Reducers/auth-reducer";
import { change_password_reducer } from "../Reducers/change-pass-reducer";

const rootReducer = combineReducers({auth: auth_reducer, changePassword: change_password_reducer})
const store = createStore(rootReducer)

export  default store;