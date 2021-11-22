import React, { cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

const useStyles = createUseStyles(
  (theme) => {
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
  },
  { name: 'form-label' }
);

function FormLabel({
  className,
  labelText,
  errorMsg,
  controlId,
  control: Control,
  ...props
}) {
  const classes = useStyles(props);
  return (
    <div className={classNames(className, classes.root)}>
      <label htmlFor={controlId} className={classes.label}>
        {labelText}
      </label>
      {Boolean(errorMsg) && <div className={classes.error}>{errorMsg}</div>}
      {isValidElement(Control) ? (
        cloneElement(Control, props)
      ) : (
        <Control {...props} id={controlId} />
      )}
    </div>
  );
}

FormLabel.propTypes = {
  labelText: PropTypes.string,
  errorMsg: PropTypes.string,
  controlId: PropTypes.string,
  control: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType]),
};

export default FormLabel;
