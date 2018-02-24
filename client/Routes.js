import React from "react";
import {Switch, Route} from 'react-router-dom';
import HomeContainer from './containers/HomeContainer.js';
// import Layout from './layout';
// <Route path="/" exact component = {Home}/>
const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component = {HomeContainer}/>
    </Switch>
  )
};
export default Routes;
