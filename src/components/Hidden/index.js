import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'react-jss';

function checkScreenWidth(mobileWidth = 0) {
  if (window.innerWidth > mobileWidth) {
    return 'desktop';
  } else {
    return 'mobile';
  }
}

function useTrackingScreenWidth(){
  const { params } = useTheme();
  const [recentSize, setRecentSize] = useState(checkScreenWidth(params.mobileWidth));

  useEffect(() => {
    function onResize() {
      setRecentSize(checkScreenWidth(params.mobileWidth));
    }

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return recentSize;
}



function Hidden({ children, size }) {
  const recentSize = useTrackingScreenWidth();

  return <div>{recentSize === size && children}</div>;
}

Hidden.defaultProps = {
  size: 'desktop',
};

Hidden.propTypes = {
  size: PropTypes.string,
};

export default Hidden;
