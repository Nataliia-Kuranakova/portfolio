import { useTheme } from '../context/ThemeContext';
import sprite from '../sprites/sprite.svg';
import { githubLink, linkedinLink } from '../data/links';

const Footer = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <footer className="footer">
      <div
        className="footer-mode-wrapper"
        tabIndex="0"
        onClick={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            toggleTheme();
          }
        }}
      >
        <div className="footer-mode">
          <div
            className={`footer-mode--${theme === 'light' ? 'dark' : 'light'}`}
          />
        </div>
      </div>
      <div className="footer-icons-wrapper">
        <div>
          <a
            className="footer-icons-link"
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg className="footer-icons">
              <use xlinkHref={`${sprite}#icon-github`} />
            </svg>
          </a>
        </div>
        <div>
          <a
            className="footer-icons-link"
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg className="footer-icons">
              <use xlinkHref={`${sprite}#icon-linkedin`} />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
