import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import classNames from 'classnames';

const useStyles = createUseStyles((theme) => {
  return {
    root: {
      position: 'relative',
    },
    selectedView: {
      width: '100%',
      padding: 10,
      border: `1px solid ${theme.palette.primary.main}`,
      background: '#fff',
      color: theme.palette.textSecondary,
      textAlign: 'center',
      fontSize: 16,
      borderRadius: 5,
      userSelect: 'none',
      cursor: 'pointer',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      '&:hover': {
        background: theme.palette.primary.light + '1a',
        borderColor: theme.palette.primary.light,
      },
      '& > span': {
        padding: 16,
      },
      '& > svg': {
        float: 'right',
      },
    },
    mask: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'transparent',
    },
    selectList: {
      width: '100%',
      maxHeight: `30vh`,
      borderRadius: 5,
      overflowY: 'scroll',
      background: '#fff',
      position: 'absolute',
      boxShadow: `0px 1px 10px 8px #dbdbdb80`,
      color: theme.palette.textSecondary,
      '& > ul': {
        padding: 0,
        margin: 0,
      },
    },
  };
});

const LIST_MAX_HEIGHT = (window.innerHeight / 10) * 3;

const getSelectListHeight = (data) => {
  const totalHeight = data.length * 40;

  if (totalHeight > LIST_MAX_HEIGHT) {
    return LIST_MAX_HEIGHT;
  }

  return totalHeight;
};

const INIT_STATE = {
  selectedValue: '',
  isOpen: false,
  listPosition: {
    top: 0,
    width: 0,
  },
};

const OPEN_OPTIONS_ACTION = 'OPEN_OPTIONS_ACTION';
const CLOSE_OPTIONS_ACTION = 'CLOSE_OPTIONS_ACTION';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case OPEN_OPTIONS_ACTION:
      return {
        ...state,
        ...payload,
        isOpen: true,
      };
    case CLOSE_OPTIONS_ACTION:
      return {
        ...state,
        ...payload,
        isOpen: false,
        listPosition: {
          ...INIT_STATE.listPosition,
        },
      };
    default:
      return state;
  }
};

// function Select({
//   data,
//   onChange,
//   className,
//   defaultValue,
//   valueOfKey,
//   displayOfKey,
// }) {
//   const classes = useStyles();
//   const selectListHeight = getSelectListHeight(data);

//   const [{ selectedValue, isOpen, listStyle }, dispatch] = useReducer(reducer, {
//     ...INIT_STATE,
//     selectedValue: defaultValue,
//   });

//   const onMaskClick = () => {
//     dispatch({
//       type: CLOSE_OPTIONS_ACTION,
//     });
//   };

//   const onOptionClick = (item) => {
//     onChange(item[valueOfKey]);
//     dispatch({
//       type: CLOSE_OPTIONS_ACTION,
//       payload: {
//         selectedValue: item[displayOfKey],
//       },
//     });
//   };

//   const onSelectViewClick = (e) => {
//     const { top } = e.currentTarget.getBoundingClientRect();

//     const restAreaHeight = window.innerHeight - top;

//     const shouldRedirection = restAreaHeight < selectListHeight;

//     const nextTop = shouldRedirection ? 0 - selectListHeight : 0;

//     dispatch({
//       type: OPEN_OPTIONS_ACTION,
//       payload: {
//         listStyle: {
//           top: nextTop + 10,
//         },
//       },
//     });
//   };

//   return (
//     <div className={classes.root}>
//       <div
//         className={classNames(className, classes.selectedView)}
//         onClick={onSelectViewClick}>
//         <span>{selectedValue}</span>
//         {isOpen ? <FaCaretUp size={20} /> : <FaCaretDown size={20} />}
//       </div>
//       {isOpen && (
//         <>
//           <div className={classes.mask} onClick={onMaskClick}></div>
//           <div className={classes.selectList} style={listStyle}>
//             <ul>
//               {data.map((item) => {
//                 return (
//                   <Option
//                     value={item}
//                     selected={item[displayOfKey] === selectedValue}
//                     onClick={onOptionClick}>
//                     {item[displayOfKey]}
//                   </Option>
//                 );
//               })}
//             </ul>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

const useStyless = createUseStyles(() => {
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
  const classes = useStyless();

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
