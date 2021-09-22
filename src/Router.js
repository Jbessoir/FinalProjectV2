import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import {
  IndexView,
  Content as HomeView,
  about as AboutView}
  from 'views';

  const Routes = () => {
    return (
      <Switch>
        <Route exact path="/" render={() => <IndexView />} />
        <Route exact path="/home" render={() => <HomeView />} />
        <Route exact path="/about" render={() => <AboutView />} />
      </Switch>
    );
  };
  
  export default Routes;