import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import NavBarContainer from "./nav/navbar_container";
import MainSplashPage from "./main/main_splash_page";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import "../stylesheets/application.scss"
// import ShowVideoContainer from './videos/show_video_container'; 
// import IndexVideoContainer from './videos/video_index_container'; 
import MainHomePageContainer from './main/main_home_page_container';
import CreatorPage from './creators/creators_page'; 
import CreationsPage from './creations/creations_page'
import StudentsCreationsPage from './creations/students_creations_page'
import SearchContainer from './search/search_container';
import Create from './create/create';


const App = () => (
  <div className="application-wrapper">
    <NavBarContainer />
 
    {/* < Route path = '/api/videos/:id' component={ShowVideoContainer}/> */}
    <ProtectedRoute exact path = '/creators' component = {CreatorPage} /> 
    <ProtectedRoute exact path = '/creations' component = {CreationsPage} />    
    <ProtectedRoute exact path = '/student/creations' component = {StudentsCreationsPage} />
    <AuthRoute exact path="/" component={MainSplashPage} />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <ProtectedRoute exact path="/" component={MainHomePageContainer} />
    <ProtectedRoute exact path="/search" component={SearchContainer} />
    <ProtectedRoute exact path="/create" component={Create} />
  </div>
);

export default App;
