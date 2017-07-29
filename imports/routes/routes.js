import React from 'react';
import {Router,Route,Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Gallery from './../ui/components/Gallery';
import Home from './../ui/components/Home';
export const History=createBrowserHistory();

export const routes=(
  <Router history={History}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/gallery" component={Gallery} />
    </Switch>
  </Router>
);
