import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
import BaseButton from './BaseButton';

const useStyles = createUseStyles(({ palette }) => {
  return {
    extendIcon: ({ color }) => {
      const target = palette[color];
      return {
        color: target.main,
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
  };
});

function Button({ children, variant, className, ...props }) {
  const classes = useStyles(props);

  return (
    <BaseButton className={classNames(className, classes[variant])} {...props}>
      {children}
    </BaseButton>
  );
}

Button.defaultProps = {
  color: 'default',
  variant: 'default',
};

Button.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
