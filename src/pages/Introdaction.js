import { useTheme } from '../context/ThemeContext';
import useDisableScrolling from '../components/hooks/useDisableScrolling';
import Row from '../components/Row';

const Introduction = () => {
  const { theme } = useTheme();
  const location = true;
  useDisableScrolling(location);
  const colorTitle = theme === 'dark' ? 'light-text-span' : 'dark-text-span';
  return (
    <>
      <div className="introdaction-container">
        <h1 className="title">
          front-end
          <span className={`clipped-title title ${colorTitle}`}>developer</span>
        </h1>
        <h2 className="subtitle title">Nataliia Kuranakova</h2>
      </div>
      <Row />
    </>
  );
};

export default Introduction;
