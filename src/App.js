import React, { useEffect } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import Header from "./Components/Header/Header";
import SideBar from "./Components/SideBar/SideBar";
import { LoginPage } from "./Components/LoginPage/LoginPage";
import ChangePassword from './Components/ChangePassword/ChangePassword';
import Footer from './Components/Footer/footer';
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "./Components/TermsConditions/TermsConditions";
import Dashboard from "./Components/Dashboard/Dashboard";
import PageNotFound from "./Components/PageNotFound/PageNotFound";
import "./App.css";
import LineChartTable from "./Components/Table/LineChartTable";


const App = (props) => {
  const location = useLocation();
  useEffect(() => {
    (document.getElementById("content") && document.getElementById("content").scrollTo(0, 0));
    window.scrollTo(0, 0)
  }, [location.pathname]);
  const currentUser = JSON.parse(localStorage.getItem("toDoCurrentUser"))
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
                  <Route exact path="/privacy-policy" component={PrivacyPolicy} />
                  <Route exact path="/line" component={LineChartTable} />
                  <Route exact path="/terms-and-conditions" component={TermsConditions} />
                  <Route exact path="/" component={Dashboard} />
                  <Route component={PageNotFound} />
                </Switch>
              </div>
            </div>
          </> : <Redirect to="/login" />}
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/privacy-policy" component={!currentUser && PrivacyPolicy} />
        <Route exact path="/terms-and-conditions" component={!currentUser && TermsConditions} />
        <Footer />
      </>
    </>
  );
}

export { App };
