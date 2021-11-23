import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => {
  return {
    root: {
      background: '#F2F2F2',
      height: 780,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      padding: `57px 92px 72px 94px`,
    },
  };
},{name:'webinars'});

function Webinars({list }) {
  const classes = useStyles();
  return <section className={classes.webinars}>

  </section>;
}

Webinars.propTypes = {};

export default Webinars;
