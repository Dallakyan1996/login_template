import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import { Provider } from "react-redux";
import { Router } from 'react-router-dom'
import { history } from "./Helpers/history"
import store from "./Store/store"

render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider >,
    document.getElementById('root')
);
