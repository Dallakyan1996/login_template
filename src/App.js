import React, { useEffect } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";
import { LoginPage } from "./Components/LoginPage/LoginPage";
import ChangePassword from './Components/ChangePassword/ChangePassword';
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import "./App.css";
import LineChartTable from "./Components/Table/LineChartTable";
import { localStorageLogin } from "./utils/constants";
import RulesComponent from "./Components/RulesPage/RulesComp";

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
                  <PrivateRoute exact path="/change-password" component={ChangePassword} />
                  <Route exact path="/" component={RulesComponent} />
                  <Route exact path="/line" component={LineChartTable} />
                  <Route component={PageNotFound} />
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
