import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { createUseStyles } from 'react-jss';
import MenuItem from '../MenuItem';
import Button from 'components/Button';

const useStyles = createUseStyles((theme) => ({
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

function TopBar() {
  const classes = useStyles();
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
        <Button className={classes.button} variant='outlined' color='primary'>
          Login
        </Button>
        <Button className={classes.button} variant='contained' color='primary'>
          Logout
        </Button>
      </section>
    </header>
  );
}

export default TopBar;
