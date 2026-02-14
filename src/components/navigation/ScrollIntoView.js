import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollIntoView = ({ children }) => {
  const location = useLocation();
  const prevLocation = useRef();

  useEffect(() => {
    if (prevLocation.current !== location.pathname) {
      window.scrollTo(0, 0);
      prevLocation.current = location.pathname;
    }
  }, [location]);

  return children;
};

export default ScrollIntoView;