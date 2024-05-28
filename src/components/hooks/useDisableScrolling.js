import { useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';

const useDisableScrolling = (location) => {
  const { handlePageLocation } = useTheme();

  useEffect(() => {
    const scrollHiddenPaths = [
      '/portfolio',
      '/portfolio/projects',
      '/portfolio/about',
    ];

    if (scrollHiddenPaths.includes(location)) {
      handlePageLocation('scroll-hidden');
    } else {
      handlePageLocation('scroll-auto');
    }
  }, [location, handlePageLocation]);
};

export default useDisableScrolling;
