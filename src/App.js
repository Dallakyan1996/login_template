import React, { useEffect } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import SideBar from "./Components/SideBar/SideBar";
import Header from "./Components/Header/Header";
import { LoginPage } from "./Components/LoginPage/LoginPage";
import { localStorageLogin } from "./utils/constants";
import { routes_arr } from "./Routes/routes_arr";
import "./App.css";


const App = (props) => {
  const location = useLocation();

  useEffect(() => {
    (document.getElementById("content") && document.getElementById("content").scrollTo(0, 0));
    window.scrollTo(0, 0)
  }, [location.pathname]);

  const currentUser = JSON.parse(localStorage.getItem(localStorageLogin))
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
                      return <Route
                        key={route.path + Math.random()}
                        exact={route.exact}
                        path={route.path && route.path}
                      >{route.component}</Route>
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
