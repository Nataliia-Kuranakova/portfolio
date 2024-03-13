import { Route, Routes } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { projects } from '../data/separate-projects';

import About from './About';
import ProjectsList from './ProjectsList';
import Introduction from './Introdaction';
import Project from './Project';

const Pages = () => {
  const { theme } = useTheme();
  const modeAnimatedBg = theme === 'light' ? 'light-theme' : 'dark-theme';
  return (
    <div className={modeAnimatedBg}>
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="projects" element={<ProjectsList />} />
        <Route path="about" element={<About />} />
        {projects.map((projectContent) => (
          <Route
            key={projectContent.project_path}
            path={`projects/${projectContent.project_path}`}
            element={<Project projectContent={projectContent} />}
          />
        ))}
      </Routes>
    </div>
  );
};

export default Pages;
