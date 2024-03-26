import { useEffect } from 'react';

const useDisableScrolling = (location) => {
  useEffect(() => {
    if (location) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [location]);
};

export default useDisableScrolling;
