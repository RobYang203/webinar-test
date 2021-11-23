import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles, JssProvider } from 'react-jss';

import classNames from 'classnames';

const useStyles = createUseStyles(
  (theme) => {
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

        boxShadow: '1px 2px 6px #DBDBDB80',
      },
      large: {
        borderRadius: 20,
      },
      normal: {
        borderRadius: 4,
      },
    };
  },
  { name: 'card' }
);

function Card({ className, roundSize, children }) {
  const classes = useStyles();
  return (
    <div
      className={classNames(className, classes.root, classes[roundSize])}>
      {children}
    </div>
  );
}

Card.defaultProps = {
  roundSize: 'normal',
};

Card.propTypes = {
  roundSize: PropTypes.string,
  header: PropTypes.any,
  body: PropTypes.any,
  footer: PropTypes.any,
};

export default Card;
