import React from 'react';
import { createUseStyles } from 'react-jss';
import classNamePrefix from 'components/HOC/classNamePrefix';
import classNames from 'classnames';

const useStyles = createUseStyles(
  () => {
    return {
      root: {
        order: -2,
        flex: 1,
      },
    };
  },
  { name: 'card-body' }
);

function CardBody({ className, children }) {
  const classes = useStyles();
  return <div className={classNames(className, classes.root)}>{children}</div>;
}

export default CardBody;
