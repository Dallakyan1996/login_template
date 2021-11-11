let initialState = {
    dataIsReturned: false,
    patientData: [],
    success: false,
    loader: true
}

let patientInfo = (state = initialState, action) => {

    switch (action.type) {

        case "SET-DATA":
            return {
                ...state,
                dataIsReturned: true,
                patientData: action.payload.value,
                loader: false
            }
        case "SUCCESS": return {
            ...state,
            success: false
        }
        default: return state
    }
}

export default patientInfo;