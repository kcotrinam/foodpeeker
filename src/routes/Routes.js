import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Categories from '../containers/Categories';
import Countries from '../containers/Countries';
import Home from '../containers/Home';
import MealList from '../containers/MealList';
import Navbar from '../containers/Navbar';
import Recipe from '../containers/Recipe';

const Routes = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/categories" component={Categories} />
      <Route exact path="/countries" component={Countries} />
      <Route path="/categories/:name" exact component={MealList} />
      <Route path="/categories/:name/:id" exact component={MealList} />
      <Route path="/:id" exact component={Recipe} />
    </Switch>
  </Router>
);

export default Routes;
