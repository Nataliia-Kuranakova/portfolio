import { useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';

const useDisableScrolling = (location) => {
  console.log('location hook ', location);
  const { handlePageLocation } = useTheme();

  useEffect(() => {
    const scrollHiddenPaths = [
      '/portfolio',
      '/portfolio/projects',
      '/portfolio/about',
    ];

    const scrollAutoPaths = [
      '/portfolio/projects/Portfolio',
      '/portfolio/projects/journey-cast',
    ];

    if (scrollHiddenPaths.includes(location)) {
      handlePageLocation('scroll-hidden');
    } else if (scrollAutoPaths.includes(location)) {
      handlePageLocation('scroll-auto');
    }
  }, [location, handlePageLocation]);
};

export default useDisableScrolling;
