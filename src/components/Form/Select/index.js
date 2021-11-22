import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { FaChevronDown } from 'react-icons/fa';
import classNames from 'classnames';

const useStyles = createUseStyles(() => {
  return {
    root: {
      position: 'relative',
      width: '100%',
      height: 40,
    },
    selectedView: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      pointerEvents: 'none',
      paddingRight: 10,
      paddingTop: 10,
      color: '#D6D6D6',
      '& > svg': {
        float: 'right',
      },
    },
    select: {
      fontSize: 16,
      appearance: 'none',
      minHeight: '100%',
      width: '100%',
      padding: '10px 40px 10px 12px',
      backgroundColor: '#FFF',
      color: 'gray',
      border: '1px solid #D6D6D6',
      borderRadius: 4,
      whiteSpace: 'break-spaces',
    },
  };
});

function Select({ data, defaultValue, displayOfKey, valueOfKey, onChange }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classNames(classes.selectedView)}>
        <FaChevronDown size={20} />
      </div>
      <select
        selected={defaultValue}
        onChange={onChange}
        className={classes.select}>
        {data.map((item) => {
          return <option value={item[valueOfKey]}>{item[displayOfKey]}</option>;
        })}
      </select>
    </div>
  );
}

Select.defaultProps = {
  displayOfKey: 'display',
  valueOfKey: 'value',
  defaultValue: '',
};

Select.propTypes = {
  data: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string,
  valueOfKey: PropTypes.string,
  displayOfKey: PropTypes.string,
};

export default Select;
