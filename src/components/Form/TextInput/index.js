import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
import classNamePrefix from 'components/HOC/classNamePrefix';

const useStyles = createUseStyles((theme) => {
  return {
    root: ({ maxWidth }) => {
      return {
        background: '#FFF',
        borderRadius: 4,
        minWidth: maxWidth ? '100%' : '100px',
        border: `1px solid ${theme.palette.secondary.main}`,
        padding: '10px 10px',
      };
    },
  };
});

function TextInput({ className, ...props }) {
  const classes = useStyles(props);
  return <input className={classNames(className, classes.root)} {...props} />;
}

TextInput.propTypes = {
  maxWidth: PropTypes.bool
};

export default classNamePrefix('text-input-' ,TextInput);
