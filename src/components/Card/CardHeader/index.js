import React from 'react';
import { createUseStyles } from 'react-jss';

import classNames from 'classnames';

const useStyles = createUseStyles(
  () => {
    return {
      root: {
        order: -3,
        width: '100%',
      },
    };
  },
  { name: 'card-header' }
);

function CardHeader({ className, children }) {
  const classes = useStyles();
  return <div className={classNames(className, classes.root)}>{children}</div>;
}

export default CardHeader;
