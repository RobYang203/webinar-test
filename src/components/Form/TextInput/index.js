import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

const useStyles = createUseStyles(
  (theme) => {
    return {
      root: ({ maxWidth }) => {
        return {
          height: 30,
          background: '#FFF',
          borderRadius: 4,
          padding: '5px 10px',
          minWidth: maxWidth ? 'calc(100% - 20px)' : '100px',
          border: `1px solid ${theme.palette.secondary.main}`,
        };
      },
    };
  },
  { name: 'text-input' }
);

function TextInput({ className, maxWidth, value, ...props }) {
  const classes = useStyles({ maxWidth });
  return (
    <input
      {...props}
      value={value ?? ''}
      className={classNames(className, classes.root)}
    />
  );
}

TextInput.propTypes = {
  maxWidth: PropTypes.bool,
};

export default TextInput;
