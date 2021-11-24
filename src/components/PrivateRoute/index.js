import React from 'react';
import { Redirect, Route } from 'react-router';
import { useSelector } from 'react-redux';

const selector = ({ auth }) => ({ isAuth: auth.isAuth });

function PrivateRoute({ component: Comp, ...props }) {
  const { isAuth } = useSelector(selector);
  
  if (isAuth) {
    return <Route {...props} component={Comp} />;
  } else {
    return <Redirect to='login' />;
  }
}

export default PrivateRoute;
