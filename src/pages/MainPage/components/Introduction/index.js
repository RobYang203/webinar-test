import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';


const useStyles = createUseStyles(
  (theme) => {
    return {
      root: {
        padding: `57px 284px 72px 282px`,
        letterSpacing: '-0.7px',
        textAlign: 'center',
        '& > h2': {
          fontSize: 28,
          marginBottom: 20,
          fontFamily: 'SF Pro Display',
          color: theme.palette.textPrimary,
        },
        '& > p': {
          fontSize: 16,
          lineHeight: '26px',
          fontFamily: 'SF Pro Display',
          color: theme.palette.textSecondary,
        },
      },
    };
  },
  { name: 'introduction' }
);

function Introduction({ title, content }) {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
}

Introduction.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default Introduction;
