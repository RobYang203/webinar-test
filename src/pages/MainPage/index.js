import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => {
  return {
    root: {
      width: '100vw',
      height: '100vh',
    },
  };
});

function MainPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <header></header>
      <main>
        <section></section>
        <section></section>
      </main>
    </div>
  );
}

export default MainPage;
