import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function checkScreenWidth() {
  if (window.innerWidth > 400) {
    return 'desktop';
  } else {
    return 'mobile';
  }
}

function Hidden({ children, size }) {
  const [recentSize, setRecentSize] = useState(checkScreenWidth);

  useEffect(() => {
    function onResize() {
      setRecentSize(checkScreenWidth());
    }

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <div>{recentSize === size && children}</div>;
}

Hidden.defaultProps = {
  size: 'desktop',
};

Hidden.propTypes = {
  size: PropTypes.string,
};

export default Hidden;
