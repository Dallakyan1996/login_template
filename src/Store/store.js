import { createStore, combineReducers } from "redux";
import auth_reducer from "../Reducers/auth-reducer";

const rootReducer = combineReducers({auth: auth_reducer})
const store = createStore(rootReducer)

export  default store
