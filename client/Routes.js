import React from "react";
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
// import Layout from './layout';
const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component = {HomeContainer}/>
    </Switch>
  )
};
export default Routes;
