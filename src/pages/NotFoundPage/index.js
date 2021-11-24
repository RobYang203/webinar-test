import Introduction from 'components/Introduction';
import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(({ commonStyles }) => {
  return {
    root: {
      ...commonStyles.pageRootStyle,
    },
  };
});


function NotFoundPage() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Introduction
        title={404}
        content={'Page not found'}
      />
    </div>
  );
}

export default NotFoundPage;
