import React from 'react';
import { createUseStyles } from 'react-jss';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { logoutAction } from 'actions/creators/auth';
import Hidden from 'components/Hidden';
import DesktopTopBar from './components/Desktop';
import MobileTopBar from './components/Mobile';

const useStyles = createUseStyles(() => ({
  root: {
    top: 0,
    left: 0,
    height: 100,
    background: '#fff',
    width: 'calc(100vw - 184px)',
    position: 'fixed',
    padding: `0 92px`,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    borderBottom: '1px solid #EDEDED',
  },
  menu: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    minWidth: 510,
  },
  logo: {
    flexBasis: 100,
    flexGrow: 0,
    flexShrink: 1,
    border: 0,
    background: 'transparent',
    cursor: 'pointer',
    '&:hover': {
      filter: 'drop-shadow(8px 8px 10px #000)',
    },
  },
  buttonGroup: {
    flexBasis: 250,
    flexGrow: 0,
    flexShrink: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > button': {
      marginRight: 10,
    },
  },
  button: {
    flexBasis: 100,
    flexShrink: 1,
    flexGrow: 0,
    height: 43,
  },
  '@media (max-width: 400px)': {
    root: {
      padding: 0,
      width: '100vw',
    },
  },
}));

const selector = ({ auth }) => {
  return {
    isAuth: auth.isAuth,
  };
};

function TopBar() {
  const classes = useStyles();
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
