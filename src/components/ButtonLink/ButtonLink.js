import { useTheme } from '../../context/ThemeContext';
import sprite from '../../sprites/sprite.svg';

const ButtonLink = ({
  icon,
  href,
  margin,
  children,
  ariaLabel,
  buttonStyle,
}) => {
  const { theme } = useTheme();
  const btnBgColor = `${buttonStyle}--${theme === 'light' ? 'dark' : 'light'}`;
  return (
    <a
      className={`${buttonStyle} ${btnBgColor} ${margin ? 'space' : ''}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {children}
      {icon && (
        <div
          className={`project-button-link-icon `}
          data-testid="link-button-icon"
        >
          <svg>
            <use xlinkHref={`${sprite}#view-link`} />
          </svg>
        </div>
      )}
    </a>
  );
};

export default ButtonLink;
