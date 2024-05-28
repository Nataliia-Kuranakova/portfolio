import { useEffect } from 'react';
import { useTheme } from '../src/context/ThemeContext';
import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Pages from './pages/Pages';

import '../src/styles/main.scss';

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    if (theme === 'light') {
      document.body.style.color = 'rgb(32, 32, 32)';
    } else {
      document.body.style.color = 'rgb(255, 238, 235)';
    }
  }, [theme]);

  return (
    <div className={`main-container`}>
      <div className={`liner-gradient-beneath`}></div>
      <div
        className={`liner-gradient ${theme === 'light' ? '' : 'dark-bg'}`}
      ></div>
      <Router>
        <main className="container">
          <NavBar />
          <Pages />
          <Footer />
        </main>
      </Router>
    </div>
  );
}

export default App;
