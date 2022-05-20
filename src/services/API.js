import { BehaviorSubject } from 'rxjs';
import { history } from './../helpers/history';
import { handleResponse } from '../helpers/hendle-response';
import { localStorageLogin } from '../utils/constants';
const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem(localStorageLogin)));

export const apiServices = {
    login,
    logout,
};

function GET(endPoint) {
    if (JSON.parse(localStorage.getItem(localStorageLogin)) !== null) {
        var acces_token = JSON.parse(localStorage.getItem(localStorageLogin)).access_token.toString()
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


// function getUsersList() {
//     return GET(process.env.REACT_APP_GET_USERS_LIST).then(handleResponse)
//         .then(res => {
//             return res;
//         });
// }

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

// function login(email, password) {
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password })
//     };
//     return fetch('http://laravel.test/api/login', requestOptions)
//         .then(handleResponse)
//         .then(user => {
//             localStorage.setItem('toDoCurrentUser', JSON.stringify(user));
//             currentUserSubject.next(user);
//             return user;
//             console.log(user)
//         });
// }


function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };
    return fetch(process.env.REACT_APP_LOGIN_API, requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem(localStorageLogin, JSON.stringify(user));
            currentUserSubject.next(user);
            return user;
        });
}


function logout() {
    localStorage.removeItem(localStorageLogin);
    currentUserSubject.next(null);
}
