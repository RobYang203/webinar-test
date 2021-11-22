import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { FaChevronDown } from 'react-icons/fa';
import classNamePrefix from 'components/HOC/classNamePrefix';

const useStyles = createUseStyles((theme) => {
  return {
    root: {
      height: 45,
      flexBasis: 140,
      flexGrow: 0,
      flexShrink: 1,
      cursor: 'pointer',
      lineHeight: '45px',
      fontFamily: 'PingFang SC',
      color: theme.palette.textThirdly,
      '&:hover': {
        background: '#f0f0f0',
      },
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 14,
    },
    text: {
      marginRight: 5,
      userSelect: 'none',
    },
  };
});

function MenuItem({ text }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.text}>{text}</div>
        <FaChevronDown />
      </div>
    </div>
  );
}

MenuItem.propTypes = {
  text: PropTypes.string,
};

export default classNamePrefix('menu-item-', MenuItem);
