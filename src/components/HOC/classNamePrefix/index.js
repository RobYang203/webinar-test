import React from 'react';
import { JssProvider } from 'react-jss';

function classNamePrefix(prefix, Comp) {
  return (props) => {
    return (
      <JssProvider classNamePrefix={prefix}>
        <Comp {...props} />
      </JssProvider>
    );
  };
}

export default classNamePrefix;
