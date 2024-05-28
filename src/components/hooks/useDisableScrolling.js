import { useEffect } from 'react';

const useDisableScrolling = (location) => {
  useEffect(() => {
    const scrollHiddenPaths = [
      '/portfolio',
      '/portfolio/projects',
      '/portfolio/about',
    ];

    if (scrollHiddenPaths.includes(location)) {
      document.body.classList.add('scroll-hidden');
    } else {
      document.body.classList.remove('scroll-hidden');
    }
  }, [location]);
};

export default useDisableScrolling;
