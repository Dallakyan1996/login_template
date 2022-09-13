import { createStore } from "redux";
import rulesArrReducer from "../reducers/rules-reducer";

const store = createStore(rulesArrReducer)

export  default store