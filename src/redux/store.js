import { createStore } from "redux";
import patientInfo from "../reducers/patient-info-reducer";

const store = createStore(patientInfo)

export  default store