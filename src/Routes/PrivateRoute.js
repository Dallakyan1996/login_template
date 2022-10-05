import React from 'react';
import { Route } from 'react-router-dom';
import AuthService from '../Services/AuthService';
import store from '../Store/store';
export const PrivateRoute = ({ children, ...restOfProps }) => {
    const dispatch = store.dispatch
    const authState = store.getState().auth.user
    if (!authState) {
        AuthService.getAuthUser().then(response => {
            dispatch({
                type: "SET-USER",
                payload: response.data.result
            })
        })
        return (
            <Route {...restOfProps}>{children}</Route>
        )
    }
    else {
        return (
            <Route {...restOfProps}>{children}</Route>
        )
    }
}