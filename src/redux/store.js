import { createStore, combineReducers } from "redux";
import auth from "../reducers/auth";

const rootReducer = combineReducers({auth: auth})
const store = createStore(rootReducer)

export  default store
