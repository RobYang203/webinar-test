import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles, JssProvider } from 'react-jss';
import classNamePrefix from 'components/HOC/classNamePrefix';

const useStyles = createUseStyles(() => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      flexWrap: 'nowrap',
      height: '100%',
      padding: '0 20px',
      background: '#FFF',
      border: '1px solid #D6D6D6',
      borderRadius: 4,
      boxShadow: '1px 2px 6px #DBDBDB80',
    },
  };
});

function Card({ header, body, footer }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {header}
      {body}
      {footer}
    </div>
  );
}

Card.propTypes = {};

export default classNamePrefix('card-', Card);
