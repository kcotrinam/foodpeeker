import { Grid } from '@chakra-ui/react';
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
    <Grid minHeight="100vh" templateRows="auto 1fr">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/countries" component={Countries} />
        <Route path="/categories/:name" exact component={MealList} />
        <Route path="/countries/:name" exact component={MealList} />
        <Route path="/:id" exact component={Recipe} />
      </Switch>
    </Grid>
  </Router>
);

export default Routes;
