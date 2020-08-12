import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import NavBarContainer from "./nav/navbar_container";
import MainSplashPage from "./main/main_splash_page";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import '../stylesheet/home-page-title.css'
import '../stylesheet/session-form-input-field.css'
import MainHomePageContainer from './main/main_home_page_container'

const App = () => (
  <div>
    <NavBarContainer />
 
    {/* < Route path = '/api/videos/:id' component={ShowVideoContainer}/> */}
    <AuthRoute exact path="/" component={MainSplashPage} />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <ProtectedRoute exact path="/" component={MainHomePageContainer} />

  </div>
);

export default App;
