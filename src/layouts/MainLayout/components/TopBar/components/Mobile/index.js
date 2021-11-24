import React, { useState } from 'react';
import { ReactComponent as LogoM } from 'assets/logo_m.svg';
import { createUseStyles } from 'react-jss';
import MenuItem from '../MenuItem';
import AuthButtonGroup from '../AuthButtonGroup';
import Button from 'components/Button';
import { FaBars } from 'react-icons/fa';
import classNames from 'classnames';

const useStyles = createUseStyles(() => ({
  root: {
    top: 0,
    left: 0,
    height: 100,
    background: '#fff',
    width: '100vw',
    position: 'fixed',
    padding: `0`,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    borderBottom: '1px solid #EDEDED',
  },
  divider: {
    position: 'absolute',
    top: '50%',
    borderTop: '1px solid #EDEDED',
    width: '100%',
  },
  leftButtonGroup: {
    flexBasis: 120,
    flexGrow: 0,
    flexShrink: 0,
    alignSelf: 'flex-end',
    marginBottom: '1.5vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    border: 0,
    background: 'transparent',
    cursor: 'pointer',
    '&:hover': {
      filter: 'drop-shadow(8px 8px 10px #000)',
    },
  },
  menuButton: {
    fontSize: 16,
    color: '#000',
    lineHeight: '0.5',
  },
  buttonGroup: {
    gap: 5,
    flexGrow: 0,
    flexShrink: 1,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    '& > button': {
      marginRight: 10,
    },
  },
  menu: {
    top: 0,
    left: 0,
    position: 'absolute',
    height: '100vh',
    width: '100vw',
    background: '#00000080',
    '& > ul': {
      width: 200,
      marginTop: 0,
      listStyle: 'none',
      padding: `0px 20px`,
      background: '#fff',
      height: '100vh',
      boxShadow: '1px 2px 6px #DBDBDB80',
    },
    '&.closeMenu': {
      left: -300,
      height: '0vh',
      width: '0vw',
      background: '#00000080',
    },
  },
}));

function MobileTopBar({
  isAuth,
  backToMain,
  onLoginClick,
  onLogoutClick,
  onRegisteredClick,
}) {
  const classes = useStyles();
  const [showMenu, setShowMenu] = useState(false);

  const onMenuButtonClick = () => {
    setShowMenu(true);
  };

  const onMaskClick = (e) => {
    setShowMenu(false);
  };

  return (
    <header className={classes.root}>
      <div className={classes.leftButtonGroup}>
        <Button
          color='secondary'
          className={classes.menuButton}
          onClick={onMenuButtonClick}>
          <FaBars />
        </Button>
        <button className={classes.logo} onClick={backToMain}>
          <LogoM />
        </button>
      </div>
      <section className={classes.divider}></section>
      <section className={classes.buttonGroup}>
        <AuthButtonGroup
          isAuth={isAuth}
          onLoginClick={onLoginClick}
          onLogoutClick={onLogoutClick}
          onRegisteredClick={onRegisteredClick}
        />
      </section>
      <section
        className={classNames(classes.menu, { closeMenu: !showMenu })}
        onClick={onMaskClick}>
        <ul>
          <li>
            <MenuItem text='Why ACY?' />
          </li>
          <li>
            <MenuItem text='Products' />
          </li>
          <li>
            <MenuItem text='Platforms' />
          </li>
          <li>
            <MenuItem text='Education' />
          </li>
          <li>
            <MenuItem text='Partners' />
          </li>
        </ul>
      </section>
    </header>
  );
}

export default MobileTopBar;
