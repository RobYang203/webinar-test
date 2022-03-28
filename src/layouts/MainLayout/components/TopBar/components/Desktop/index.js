import React from 'react';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { createUseStyles } from 'react-jss';
import MenuItem from '../MenuItem';
import AuthButtonGroup from '../AuthButtonGroup';

const useStyles = createUseStyles(({params}) => ({
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
  [`@media (max-width: ${params.mobileWidth}px)`]: {
    root: {
      padding: 0,
      width: '100vw',
    },
  },
}));

function DesktopTopBar({
  isAuth,
  backToMain,
  onLoginClick,
  onLogoutClick,
  onRegisteredClick,
}) {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <button className={classes.logo} onClick={backToMain}>
        <Logo />
      </button>
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

export default DesktopTopBar;
