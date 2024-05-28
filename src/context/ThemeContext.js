import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  );

  const [pageLocation, setPageLocation] = useState('');

  const handlePageLocation = (scroll) => {
    setPageLocation(scroll);
  };

  useEffect(() => {
    const handleScroll = () => setIsHeaderFixed(window.scrollY > 10);

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const contextValue = {
    theme,
    setTheme,
    isHeaderFixed,
    handlePageLocation,
    pageLocation,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
