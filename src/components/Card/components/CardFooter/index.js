import React from 'react';
import { createUseStyles } from 'react-jss';
import classNamePrefix from 'components/HOC/classNamePrefix';
import classNames from 'classnames';

const useStyles = createUseStyles(
  () => {
    return {
      root: {
        order: -1,
        alignSelf: 'flex-end',
      },
    };
  },
  { name: 'card-footer' }
);

function CardFooter({ className, children }) {
  const classes = useStyles();
  return <div className={classNames(className, classes.root)}>{children}</div>;
}

export default CardFooter;
