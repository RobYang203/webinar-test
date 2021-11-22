import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

const useStyles = createUseStyles(
  ({ palette }) => {
    return {
      root: ({ color, maxWidth }) => {
        const target = palette[color];
        return {
          border: 0,
          cursor: 'pointer',
          userSelect: 'none',
          background: '#ffffff00',
          color: target.main,
          width: maxWidth ? '100%' : null,
          '&:hover': {
            background: `${target.light}1a`,
            borderColor: target.light,
          },
        };
      },
    };
  },
  { name: 'base-button' }
);

function BaseButton({
  color,
  variant,
  maxWidth,
  children,
  className,
  ...props
}) {
  const classes = useStyles({ maxWidth, color });
  return (
    <button className={classNames(className, classes.root)} {...props}>
      {children}
    </button>
  );
}

BaseButton.defaultProps = {
  color: 'default',
  variant: 'default',
  maxWidth: false,
};

BaseButton.propTypes = {
  color: PropTypes.string,
  variant: PropTypes.string,
  maxWidth: PropTypes.bool,
};

export default BaseButton;
