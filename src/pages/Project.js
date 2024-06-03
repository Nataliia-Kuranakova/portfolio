import { useTheme } from '../context/ThemeContext';
import { githubLink, githubPagesLink } from '../data/links';

import ButtoLink from '../components/ButtonLink';

const Project = ({ projectContent }) => {
  const { theme } = useTheme();

  const numberColor = `number--${theme === 'light' ? 'light' : 'dark'}`;
  const mobileNumColor = `number-${theme !== 'light' ? 'light' : 'dark'}`;

  return (
    <>
      <section className="project">
        <div className=" project-name">
          <div className="project-name-numeral">
            <p data-testid="project-number" className={`number ${numberColor} ${mobileNumColor}`}>
              {projectContent.id}
            </p>
          </div>

          <div className="project-title-wrapper">
            <h1 className="text">{projectContent.project}</h1>
          </div>
        </div>

        <div className="project-wrapper">
          <article className="project-descr">{projectContent.descr}</article>

          <div className="project-button-container">
            {projectContent.project_path !== 'Portfolio' && (
              <ButtoLink
                href={`${githubPagesLink}${projectContent.project_path}/`}
                ariaLabel={`View demo of ${projectContent.project}`}
                buttonStyle="project-button-link"
              >
                Demo
              </ButtoLink>
            )}

            <ButtoLink
              href={`${githubLink}/${projectContent.project_path}`}
              ariaLabel={`View code of ${projectContent.project}`}
              buttonStyle="project-button-link"
            >
              Code
            </ButtoLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
