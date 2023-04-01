import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Characters from '../pages/Characters';
import Planets from '../pages/Planets';
import Species from '../pages/Species';
import Starships from '../pages/Starships';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/characters/:name" component={Characters} />
      <Route path="/planets/:name" component={Planets} />
      <Route path="/species/:name" component={Species} />
      <Route path="/starships/:name" component={Starships} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
