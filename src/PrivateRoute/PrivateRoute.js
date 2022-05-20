import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PageNotFound from '../Components/PageNotFound/PageNotFound';
import { apiServices } from './../services/API'
import { localStorageLogin } from '../utils/constants';

export const PrivateRoute = ({ children, ...restOfProps }) => {
    const currentUser = apiServices.currentUserValue;
    return currentUser ? (
        <Route {...restOfProps}>{children}</Route>
    ) : (
        <Redirect to="/login" />
    );
}


const DicernaAdminPaths = ['/', '/search']
export const DicernaAdminRoute = ({ children, ...restOfProps }) => {
    const cfuCurrentUser = JSON.parse(localStorage.getItem(localStorageLogin))
    return ((cfuCurrentUser && (cfuCurrentUser.user.users_module === 2 || cfuCurrentUser.user.users_module === 3)) && DicernaAdminPaths.indexOf(restOfProps.path) === -1) ? <Route {...restOfProps}
        path={restOfProps.path}>{children}</Route> : <PageNotFound />
}