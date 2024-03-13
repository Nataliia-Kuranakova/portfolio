import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

import { projects } from '../data/separate-projects';

const ProjectsList = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleClickPathTo = (projectPage) => {
    navigate(projectPage);
  };

  const text = theme === 'light' ? '--dark' : '--light';

  const renderedProjectsList = projects.map((item) => {
    return (
      <li
        key={item.project}
        className={`projects-list-item projects-list-item${text}`}
        onClick={() => handleClickPathTo(`/projects/${item.project_path}`)}
        onKeyDown={(e) =>
          e.key === 'Enter' &&
          handleClickPathTo(`/projects/${item.project_path}`)
        }
        tabIndex="0"
        aria-label={`View project ${item.project}`}
      >
        <div>{item.project}</div>
        <div className="item-view_case">View case</div>
      </li>
    );
  });

  return (
    <section className="projects-list">
      <ul>{renderedProjectsList}</ul>
    </section>
  );
};

export default ProjectsList;
