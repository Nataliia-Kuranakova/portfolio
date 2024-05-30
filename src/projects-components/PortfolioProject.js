import { portfolioTools } from '../data/tools';
import { portfolioGoals } from '../data/goals-list';
import { portfolioExperience } from '../data/experience';

import Chip from '../components/Chip';
import List from '../components/List';
import TableList from '../components/TableList';

const PortfolioProject = () => {

  return (
    <>
      <div className="project-tools">
        <h3 className="project-subtitles--tools project-subtitles"> Tools</h3>
        <div className="chips-container">
          {portfolioTools.map((tool, index) => (
            <Chip key={index}>{tool}</Chip>
          ))}
        </div>
      </div>
      <h3 className="project-subtitles">Preamble</h3>
      <p>
        I have a habit of collecting various announcements and presentations
        from different events, and I enjoy the many ways in which information
        can be communicated through brochures or posters. The clarity,
        conciseness and visual appeal of these materials inspired an idea: to
        create a website that reflects the minimalist beauty of printed
        brochures or zines. So, inspired by the visual simplicity of printed
        materials, I set out to create a minimalist and easy-to-use website that
        could represent my skills and determination.
      </p>

      <h3 className="project-subtitles">The goals</h3>
      <p>
        Before starting the project, I set myself several goals: firstly, what{' '}
        <b>features</b> I wanted to include, and secondly, what <b>tools</b> I
        needed to learn in order to implement the project.
      </p>

      <TableList list={portfolioGoals} />

      <h3 className="project-subtitles">What I practiced</h3>
      <div>
        Throughout the project, I dealt with issues that came up during the
        development of the website and learned about topics such as:
        <List experienceList={portfolioExperience} />
      </div>
    </>
  );
};

export default PortfolioProject;
