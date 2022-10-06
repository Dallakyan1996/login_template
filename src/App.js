import React, { useEffect } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import { accessToken } from "./Utils/constants";
import { PrivateRoute } from "./Routes/PrivateRoute";
import { routes_arr } from "./Routes/routes_arr";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import SideBar from "./Layouts/SideBar/SideBar";
import Header from "./Layouts/Header/Header";
import "./App.css";


const App = (props) => {
  const location = useLocation();
  useEffect(() => {
    (document.getElementById("content") && document.getElementById("content").scrollTo(0, 0));
    window.scrollTo(0, 0)
  }, [location.pathname]);

  const currentUser = localStorage.getItem(accessToken)

  return (
    <>
      <>
        {currentUser ?
          <>
            <Header user={props.user} />
            <div className="wrapper">
              <SideBar />
              <div id="content" className="content">
                <Switch>
                  {
                    routes_arr.map(route => {
                      return <PrivateRoute
                        key={route.path + Math.random()}
                        path={route.path && route.path}
                        exact={route.exact}
                      >{route.component}</PrivateRoute>
                    })
                  }
                </Switch>
              </div>
            </div>
          </> : <Redirect to="/login" />}
        <Route exact path="/login" component={LoginPage} />
      </>
    </>
  );
}

export { App };