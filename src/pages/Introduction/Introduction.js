import { useTheme } from '../../context/ThemeContext';

import Row from '../../components/Row/Row';

const Introduction = () => {
  const { theme } = useTheme();

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
