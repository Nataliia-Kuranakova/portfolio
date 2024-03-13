import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function NavBar() {
  const { isHeaderFixed } = useTheme();

  return (
    <header className={`header${isHeaderFixed ? ' fixed' : ''}`}>
      <Link to="/portfolio" className="header-logo">
        <p className="header-logo-text">lii</p>
      </Link>

      <nav className={`navigation${isHeaderFixed ? ' fixed-nav' : ''}`}>
        <ul>
          <li>
            <Link to="/portfolio/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/portfolio/projects" className="nav-link">
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
