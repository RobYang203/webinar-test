import Button from 'components/Button';
import React from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';

const useStyles = createUseStyles(
  () => ({
    root: {
      flexBasis: 100,
      flexShrink: 1,
      flexGrow: 0,
      height: 43,
    },
  }),
  { name: 'auth-button-group' }
);

function AuthButtonGroup({
  isAuth,
  onLoginClick,
  onLogoutClick,
  onRegisteredClick,
}) {
  const classes = useStyles();
  if (!isAuth)
    return (
      <Button
        className={classes.root}
        variant='outlined'
        color='primary'
        onClick={onLoginClick}>
        Login
      </Button>
    );

  return (
    <>
      <Button
        className={classes.root}
        variant='outlined'
        color='primary'
        onClick={onLogoutClick}>
        Logout
      </Button>
      <Button
        className={classes.root}
        variant='contained'
        color='info'
        onClick={onRegisteredClick}>
        Registered
      </Button>
    </>
  );
}

AuthButtonGroup.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  onLoginClick: PropTypes.func.isRequired,
  onLogoutClick: PropTypes.func.isRequired,
  onRegisteredClick: PropTypes.func.isRequired,
};

export default AuthButtonGroup;
