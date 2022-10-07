import React from 'react';
import { authActionsType } from '../Reducers/actions-type'; 
import { accessToken } from '../Utils/constants'; 
import { useSelector } from 'react-redux';
import { history } from '../Helpers/helpers';
import { Route } from 'react-router-dom';
import AuthService from '../Services/AuthService';
import store from '../Store/store';

export const PrivateRoute = ({ children, ...restOfProps }) => {
    const authUser = useSelector(state => state.auth.user)
    const dispatch = store.dispatch
    const { SET_USER } = authActionsType
    if (restOfProps.location.pathname !== "/login" && !authUser) {
        AuthService.getAuthUser().then(response => {
            dispatch({
                type: SET_USER,
                payload: {
                    user: response.data.result.user
                }
            })
        }).catch(e => {
            localStorage.removeItem(accessToken)
            history.push("/login")})
    }
    return (
        <Route {...restOfProps}>{children}</Route>
    )
}