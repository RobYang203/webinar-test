import React from 'react';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { createUseStyles } from 'react-jss';
import MenuItem from '../MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import AuthButtonGroup from '../AuthButtonGroup';
import { useHistory } from 'react-router';
import { logoutAction } from 'actions/creators/auth';

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
    justifyContent: 'space-around',
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
  icon: {
    flexBasis: 100,
    flexGrow: 0,
    flexShrink: 1,
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

  const backToMain = (e)=>{
    e.preventDefault();

    history.push('/');
  }

  return (
    <header className={classes.root}>
      <section className={classes.icon}>
        <a href="javascript:void(0)" onClick={backToMain}>
          <Logo />
        </a>
      </section>
      <section className={classes.menu}>
        <MenuItem text='Why ACY?' />
        <MenuItem text='Products' />
        <MenuItem text='Platforms' />
        <MenuItem text='Education' />
        <MenuItem text='Partners' />
      </section>
      <section className={classes.buttonGroup}>
        <AuthButtonGroup
          isAuth={isAuth}
          onLoginClick={onLoginClick}
          onLogoutClick={onLogoutClick}
          onRegisteredClick={onRegisteredClick}
        />
      </section>
    </header>
  );
}

export default TopBar;
