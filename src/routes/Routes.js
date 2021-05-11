import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Categories from '../containers/Categories';
import Countries from '../containers/Countries';
import Home from '../containers/Home';
import Navbar from '../containers/Navbar';

const Routes = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/categories" component={Categories} />
      <Route exact path="/countries" component={Countries} />
    </Switch>
  </Router>
);

export default Routes;
