import { Route, Routes, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { projects } from '../data/separate-projects';
import useDisableScrolling from '../hooks/useDisableScrolling';

import About from './About/About';
import ProjectsList from './ProjectsList/ProjectsList';
import Introduction from './Introduction/Introduction';
import Project from './Project/Project';

const Pages = () => {
  const { theme } = useTheme();
  const location = useLocation();
  useDisableScrolling(location.pathname);

  const modeAnimatedBg = theme === 'light' ? 'light-theme' : 'dark-theme';
  return (
    <div className={modeAnimatedBg}>
      <Routes>
        <Route path="/portfolio" element={<Introduction />} />
        <Route path="/portfolio/projects" element={<ProjectsList />} />
        <Route path="/portfolio/about" element={<About />} />
        {projects.map((projectContent) => (
          <Route
            key={projectContent.project_path}
            path={`/portfolio/projects/${projectContent.project_path}`}
            element={<Project projectContent={projectContent} />}
          />
        ))}
      </Routes>
    </div>
  );
};

export default Pages;
