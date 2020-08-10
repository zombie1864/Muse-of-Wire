import React from "react";
import { AuthRoute } from '../util/route_util';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { render } from "react-dom";
import ShowVideoContainer from './videos/show_video_container'
import IndexVideoContainer from './videos/video_index_container'
import Modal from './modal/modal';

const App = () => (
  <div> 
      < Modal />
      <Switch>
          < Route path = '/api/videos/:id' component={ShowVideoContainer}/>
      </Switch>
  </div>
);

export default App;