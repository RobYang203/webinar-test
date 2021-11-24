import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { logoutAction } from 'actions/creators/auth';
import Hidden from 'components/Hidden';
import DesktopTopBar from './components/Desktop';
import MobileTopBar from './components/Mobile';

const selector = ({ auth }) => {
  return {
    isAuth: auth.isAuth,
  };
};

function TopBar() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { isAuth } = useSelector(selector);

  const onLoginClick = () => {
    history.push('/login');
  };

  const onLogoutClick = () => {
    dispatch(logoutAction());
  };

  const onRegisteredClick = () => {
    history.push('/registered');
  };

  const backToMain = (e) => {
    e.preventDefault();

    history.push('/');
  };

  return (
    <>
      <Hidden size='mobile'>
        <MobileTopBar
          isAuth={isAuth}
          backToMain={backToMain}
          onLoginClick={onLoginClick}
          onLogoutClick={onLogoutClick}
          onRegisteredClick={onRegisteredClick}
        />
      </Hidden>
      <Hidden size='desktop'>
        <DesktopTopBar
          isAuth={isAuth}
          backToMain={backToMain}
          onLoginClick={onLoginClick}
          onLogoutClick={onLogoutClick}
          onRegisteredClick={onRegisteredClick}
        />
      </Hidden>
    </>
  );
}

export default TopBar;
