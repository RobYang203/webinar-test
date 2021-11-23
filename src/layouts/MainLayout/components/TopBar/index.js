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
    padding: `0 92px`,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottom: '1px solid #EDEDED',
    height: 100,
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

  return (
    <header className={classes.root}>
      <section className={classes.icon}>
        <Logo />
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
