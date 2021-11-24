import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import TopBar from './components/TopBar';
import { useCreateRoutePath } from 'hooks';
import WebinarDetailPage from 'pages/WebinarDetailPage';
import RegisteredPage from 'pages/RegisteredPage';
import NotFoundPage from 'pages/NotFoundPage';
import MainPage from 'pages/MainPage';
import LoginPage from 'pages/LoginPage';
import PrivateRoute from 'components/PrivateRoute';

function MainLayout() {
  const getRoutePath = useCreateRoutePath();

  return (
    <div>
      <TopBar />
      <Switch>
        <Route exact path={getRoutePath('/')} component={MainPage} />
        <Route
          path={getRoutePath('/webinar/:id')}
          component={WebinarDetailPage}
        />
        <PrivateRoute path={getRoutePath('/registered')} component={RegisteredPage} />
        <Route path={getRoutePath('/login')} component={LoginPage} />
        <Route path='/404' component={NotFoundPage} />
        <Route path='/*' component={() => <Redirect to='/404' />} />
      </Switch>
    </div>
  );
}

export default MainLayout;
