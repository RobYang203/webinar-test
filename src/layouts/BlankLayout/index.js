import LoginPage from 'pages/LoginPage';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

function BlankLayout() {
  return (
    <div>
      <Switch>
        <Route path='/login' component={LoginPage} />
        <Route path='/404' component={NotFoundScreen} />
        <Route path='/' component={() => <Redirect to='/login' />} />
      </Switch>
    </div>
  );
}

export default BlankLayout;
