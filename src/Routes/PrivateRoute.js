import React from 'react';
import { Route } from 'react-router-dom';
import { authActionsType } from '../Reducers/actions-type';
import AuthService from '../Services/AuthService';
import store from '../Store/store';
export const PrivateRoute = ({ children, ...restOfProps }) => {
    const dispatch = store.dispatch
    const { SET_USER } = authActionsType
    if (restOfProps.location.pathname !== "/login") {
        AuthService.getAuthUser().then(response => {
            dispatch({
                type: SET_USER,
                payload: {
                    user: response.data.result.user
                }
            })
        }).catch(e => console.log(e))
    }
    return (
        <Route {...restOfProps}>{children}</Route>
    )
}