import React from 'react';
import { useSelector } from 'react-redux';


function LoadingMask() {
  const fetchingTypes = useSelector(({ setting }) => setting.fetchingTypes);

  return <></>;
}

export default LoadingMask;
