import React from 'react';
import { createUseStyles } from 'react-jss';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { FaAngleDown, FaChevronDown } from 'react-icons/fa';

const useStyles = createUseStyles(() => {
  return {
    root: {
      width: '100vw',
      height: '100vh',
    },
    header: {
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
    menuItem: {
      height: 45,
      flexBasis: 160,
      flexGrow: 0,
      flexShrink: 1,
      cursor: 'pointer',
      color: '#4A4A4A',
      fontFamily: 'PingFang SC',
      lineHeight: '45px',
      '&:hover': {
        background: '#f0f0f0',
      },
    },
    menuItemRoot: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 14,
    },
    menuText: {
      marginRight: 5,
      userSelect:'none',
    },
    menuIcon: {},
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
    outlinedButton: {
      flexBasis: 100,
      flexShrink: 0,
      flexGrow: 0,
      height: 43,
      background: '#fff',
      border: '1px solid #152B45',
      borderRadius: 4,
      userSelect:'none',
      '&:hover':{
        background: '#c0c0c0',
      }
    },
    containedButton: {
      flexBasis: 100,
      flexShrink: 0,
      flexGrow: 0,
      height: 43,
      background: '#013B81',
      borderRadius: 4,
      color: '#fff',
      userSelect:'none',
      '&:hover':{
        background: '#052f62',
      }
    },
  };
});

function MainPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <section className={classes.icon}>
          <Logo />
        </section>
        <section className={classes.menu}>
          <div className={classes.menuItem}>
            <div className={classes.menuItemRoot}>
              <div className={classes.menuText}>Why ACY?</div>
              <FaChevronDown className={classes.menuIcon} />
            </div>
          </div>
          <div className={classes.menuItem}>
            <div className={classes.menuItemRoot}>
              <div className={classes.menuText}>Products</div>
              <FaChevronDown className={classes.menuIcon} color='#4A4A4A' />
            </div>
          </div>
          <div className={classes.menuItem}>
            <div className={classes.menuItemRoot}>
              <div className={classes.menuText}>Platforms</div>
              <FaChevronDown
                className={classes.menuIcon}
                color='#4A4A4A'
              />{' '}
            </div>
          </div>
          <div className={classes.menuItem}>
            <div className={classes.menuItemRoot}>
              <div className={classes.menuText}>Education</div>
              <FaChevronDown
                className={classes.menuIcon}
                color='#4A4A4A'
              />{' '}
            </div>
          </div>
          <div className={classes.menuItem}>
            <div className={classes.menuItemRoot}>
              <div className={classes.menuText}>Partners</div>
              <FaChevronDown
                className={classes.menuIcon}
                color='#4A4A4A'
              />{' '}
            </div>
          </div>
        </section>
        <section className={classes.buttonGroup}>
          <button className={classes.outlinedButton}>Login</button>
          <button className={classes.containedButton}>Logout</button>
        </section>
      </header>
      <main>
        <section></section>
        <section></section>
      </main>
    </div>
  );
}

export default MainPage;
