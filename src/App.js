import React, { useEffect } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import { PrivateRoute } from "./Routes/PrivateRoute";
import { accessToken } from "./Utils/constants";
import { routes_arr } from "./Routes/routes_arr";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import SideBar from "./Layouts/SideBar/SideBar";
import Header from "./Layouts/Header/Header";
import "./App.css";
import { useSelector } from "react-redux";
import ChangePassword from "./Pages/ChangePassword/ChangePassword";

const App = (props) => {
  const location = useLocation();
  const currentUser = localStorage.getItem(accessToken);
  const changePasswordIsOpen = useSelector(state => state.changePassword.changePassIsOpen);

  useEffect(() => {
    document.getElementById("content") && document.getElementById("content").scrollTo(0, 0);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {currentUser ?
        <div>
          <Header user={props.user} />
          <div className="wrapper">
            <SideBar />
            <div id="content" className="content">
              <Switch>
                {routes_arr.map(route => {
                  return <PrivateRoute
                    key={route.path + Math.random()}
                    path={route.path && route.path}
                    exact={route.exact}
                  >{route.component}</PrivateRoute>
                })}
              </Switch>
            </div>
          </div>
          {changePasswordIsOpen ? <ChangePassword /> : null}
        </div> : <Redirect to="/login" />}
      <Route exact path="/login" component={LoginPage} />
    </>
  );
}

export default App;