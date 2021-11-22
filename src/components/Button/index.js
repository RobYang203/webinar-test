import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
import BaseButton from './BaseButton';

const useStyles = createUseStyles(
  ({ palette }) => {
    return {
      extend: ({ color }) => {
        const target = palette[color];
        return {
          color: target.contrastText,
          display: 'inline-flex',
          flexDirection: 'row',
          flexWrap: 'nowrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          '& > :first-child': {
            paddingRight: 12,
          },
        };
      },
      outlined: ({ color }) => {
        const target = palette[color];
        return {
          background: '#ffffff00',
          border: `1px solid ${target.main}`,
          color: target.main,
          borderRadius: 4,
          padding: `10px 20px`,
        };
      },
      contained: ({ color }) => {
        const target = palette[color];
        return {
          background: target.main,
          borderRadius: 4,
          color: target.contrastText,
          border: 0,
          padding: `10px 20px`,
          '&:hover': {
            background: target.dark,
          },
          '&:disabled': {
            background: palette.grey.main,
            color: '#D1D1D1',
          },
        };
      },
      icon: ({ color }) => {
        const target = palette[color];
        return {
          border: `1px solid ${target.main}`,
          color: target.main,
          textAlign: 'center',
          borderRadius: 40,
          lineHeight: '5px',
          padding: `20px 20px`,
        };
      },
      maxWidth: {
        width: '100%',
      },
    };
  },
  { name: 'button' }
);

function Button({ children, variant, maxWidth, className, ...props }) {
  const classes = useStyles(props);

  return (
    <BaseButton
      className={classNames(
        className,
        classes[variant],
        { [classes.maxWidth]: maxWidth },
      )}
      {...props}>
      {children}
    </BaseButton>
  );
}

Button.defaultProps = {
  color: 'default',
  variant: 'default',
  maxWidth: false,
};

Button.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
