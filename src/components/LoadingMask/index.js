import { isEmpty } from 'lodash-es';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';

const useStyles = createUseStyles(({ palette }) => {
  return {
    '@keyframes spin': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
    root: {
      position: 'fixed',
      top: 'calc(50vh - 76px)',
      left: 'calc(50vw - 76px)',
      border: `16px solid ${palette.grey.main}`,
      borderRadius: '50%',
      borderTop: `16px solid ${palette.primary.main}`,
      width: 120,
      height: 120,
      animation: '$spin 2s linear infinite',
      zIndex: 3,
    },
    mask: {
      top: 0,
      left: 0,
      position: 'fixed',
      width: '100vw',
      height: '100vh',
      background: '#00000080',
      zIndex: 2,
    },
  };
});

function LoadingMask() {
  const classes = useStyles();
  const fetchingTypes = useSelector(({ setting }) => setting.fetchingTypes);

  if(isEmpty(fetchingTypes)) return null;
  
  return (
    <>
      <div className={classes.root}></div>
      <div className={classes.mask}></div>
    </>
  );
}

export default LoadingMask;
