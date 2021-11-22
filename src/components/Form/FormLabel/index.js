import React, { cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
import classNamePrefix from 'components/HOC/classNamePrefix';

const useStyles = createUseStyles((theme) => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'noWrap',
      alignItems: 'flex-start',
      gap: 5,
    },
    label: {
      fontSize: 16,
      color: theme.palette.grey.contrastText,
    },
    error: {
      paddingLeft: 2,
      color: theme.palette.error.main,
    },
  };
});

function FormLabel({
  className,
  labelId,
  labelText,
  errorMsg,
  control: Control,
  ...props
}) {
  const classes = useStyles(props);
  return (
    <div className={classNames(className, classes.root)}>
      <label id={labelId} className={classes.label}>
        {labelText}
      </label>
      {Boolean(errorMsg) && <div className={classes.error}>{errorMsg}</div>}
      {isValidElement(Control) ? (
        cloneElement(Control, props)
      ) : (
        <Control {...props} />
      )}
    </div>
  );
}

FormLabel.propTypes = {
  maxWidth: PropTypes.bool,
};

export default classNamePrefix('form-label-' ,FormLabel);
