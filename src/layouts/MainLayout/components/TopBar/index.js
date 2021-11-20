import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 2,
  },
  title: {
    flexGrow: 1,
  },
}));

function TopBar() {
  const classes = useStyles();
  return <div className={classes.root} position={'static'}></div>;
}

export default TopBar;
