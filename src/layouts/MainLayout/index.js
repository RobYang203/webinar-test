import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import TopBar from './components/TopBar';
import { useCreateRoutePath } from 'hooks';
import WebinarDetailPage from 'pages/WebinarDetailPage';
import WebinarsPage from 'pages/WebinarsPage';
import RegisteredPage from 'pages/RegisteredPage';
import NotFoundPage from 'pages/NotFoundPage';

function MainLayout() {
  const getRoutePath = useCreateRoutePath();

  if (getRoutePath == null) return null;

  return (
    <div>
      <TopBar />
      <Switch>
        <Route
          path={getRoutePath('/webinars/:id')}
          component={WebinarDetailPage}
        />
        <Route path={getRoutePath('/webinars')} component={WebinarsPage} />
        <Route path={getRoutePath('/registered')} component={RegisteredPage} />
        <Route path='/404' component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default MainLayout;
