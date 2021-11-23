import React from 'react';
import { createUseStyles } from 'react-jss';

import classNames from 'classnames';

const useStyles = createUseStyles(
  (theme) => {
    return {
      root: {
        order: -1,
        width: '100%',
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
