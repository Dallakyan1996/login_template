import { BehaviorSubject } from 'rxjs';
import { history } from './../helpers/history';
import { handleResponse } from '../helpers/hendle-response';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('cfuCurrentUser')));

export const authenticationService = {
    login,
    logout,
    patientStatus,
    changePasswordPost,
    getModelList,
    createUser,
    revokeUser,
    getTable,
    getUsersList,
    getPatientsList,
    getCreate,
    getRevoke,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() { return currentUserSubject.value }
};

function GET(endPoint) {
    if (JSON.parse(localStorage.getItem('cfuCurrentUser')) !== null) {
        var acces_token = JSON.parse(localStorage.getItem('cfuCurrentUser')).access_token.toString()
    }
    else {
        history.push('/login')
    }
    const requestOptions = {
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + acces_token,

        }
    }
    return fetch(endPoint, requestOptions)
}


function getUsersList() {
    return GET(process.env.REACT_APP_GET_USERS_LIST).then(handleResponse)
        .then(res => {
            return res;
        });
}

function getModelList() {
    return GET(process.env.REACT_APP_GET_STUDY_MODEL).then(handleResponse)
        .then(res => {
            return res;
        });
}

function getPatientsList() {
    return GET(process.env.REACT_APP_GET_PATIENTS_LIST).then(handleResponse)
        .then(res => {
            return res;
        });
}

function getCreate() {
    return GET(process.env.REACT_APP_USER_REQUEST).then(handleResponse).then(res => {
        return res;
    });
}
function getRevoke() {
    return GET(process.env.REACT_APP_USER_REVOKE).then(handleResponse).then(res => {
        return res;
    });
}

// function login(email, password) {
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password })
//     };

//     return fetch(process.env.REACT_APP_LOGIN_API, requestOptions)
//         .then(handleResponse)
//         .then(user => {
//             localStorage.setItem('toDoCurrentUser', JSON.stringify(user));
//             currentUserSubject.next(user);
//             return user;
//         });
// }

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    return fetch('http://localhost:3001/auth/login', requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('toDoCurrentUser', JSON.stringify(user));
            currentUserSubject.next(user);
            return user;
        });
}
function patientStatus(site_id, patient_id) {
    if (JSON.parse(localStorage.getItem('cfuCurrentUser')) !== null) {
        var acces_token = JSON.parse(localStorage.getItem('cfuCurrentUser')).access_token.toString()
    }
    else {
        history.push('/login')
    }
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
            'Authorization': 'Bearer ' + acces_token,
        },
        body: JSON.stringify({ site_id, patient_id }),
    };
    return fetch(process.env.REACT_APP_SEARCH_API, requestOptions)
        .then(handleResponse)
        .then(patient => {
            return patient;
        });
}



function createUser(name, email, site, access_level) {
    if (JSON.parse(localStorage.getItem('cfuCurrentUser')) !== null) {
        var acces_token = JSON.parse(localStorage.getItem('cfuCurrentUser')).access_token.toString()
    }
    else {
        history.push('/login')
    }
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
            'Authorization': 'Bearer ' + acces_token,
        },
        body: JSON.stringify({ engine_type: "cfu", name, email, site, access_level }),
    };
    return fetch(process.env.REACT_APP_USER_REQUEST, requestOptions)
        .then(handleResponse)
        .then(res => {
            return res;
        });
}

function revokeUser(user_id, comment) {
    if (JSON.parse(localStorage.getItem('cfuCurrentUser')) !== null) {
        var acces_token = JSON.parse(localStorage.getItem('cfuCurrentUser')).access_token.toString()
    }
    else {
        history.push('/login')
    }
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
            'Authorization': 'Bearer ' + acces_token,
        },
        body: JSON.stringify({ engine_type: "cfu", user_id, comment }),
    };
    return fetch(process.env.REACT_APP_USER_REVOKE, requestOptions)
        .then(handleResponse)
        .then(res => {
            return res;
        });
}

function changePasswordPost(old_password, password, password_confirmation) {
    if (JSON.parse(localStorage.getItem('cfuCurrentUser')) !== null) {
        var acces_token = JSON.parse(localStorage.getItem('cfuCurrentUser')).access_token.toString()
    }
    else {
        history.push('/login')
    }
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
            'Authorization': 'Bearer ' + acces_token,
        },
        body: JSON.stringify({ old_password, password, password_confirmation }),
    };
    return fetch(process.env.REACT_APP_CHANGE_PASSWORD, requestOptions)
        .then(handleResponse)
}

function getTable(tableName) {
    return GET(process.env.REACT_APP_GET_TABLE + tableName).then(handleResponse)
        .then(res => {
            return res;
        });
}


function logout() {
    localStorage.removeItem('toDoCurrentUser');
    currentUserSubject.next(null);
}
