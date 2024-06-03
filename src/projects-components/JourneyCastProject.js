import { journayCastGoals } from '../data/goals-list';
import { journayCastlioTools } from '../data/tools';
import { journayCastExperience } from '../data/experience';

import {
  mockUp,
  citiesApi,
  weatherApi,
  weatherIconsGithub,
} from '../data/links';

import Chip from '../components/Chip';
import List from '../components/List';
import TableList from '../components/TableList';
import ButtonLink from '../components/ButtonLink';

const JourneyCastProject = () => {

  return (
    <>
      <div className="project-tools">
        <h3 className="project-subtitles--tools project-subtitles"> Tools</h3>
        <div className="chips-container">
          {journayCastlioTools.map((tool, index) => (
            <Chip key={index}>{tool}</Chip>
          ))}
        </div>
      </div>
      <div className="project-tools">
        <h3 className="project-subtitles--tools project-subtitles">API's</h3>
        <div className="chips-container">
          <ButtonLink
            href={weatherApi}
            arialLabel="View the weather API"
            buttonStyle="project-button-link-extra-information"
            icon
          >
            Weather API
          </ButtonLink>
          <ButtonLink
            href={citiesApi}
            arialLabel="View the Geo Names API"
            buttonStyle="project-button-link-extra-information"
            icon
          >
            GeoNames API
          </ButtonLink>
        </div>
      </div>
      <h3 className="project-subtitles">Preamble</h3>
      <p>
        My passion for travel motivated me to develop a compact application for
        tracking the weather in a city during a whole trip. I wanted to create a
        well-organised weather app that could provide accurate forecasts
        for a given period of time, allowing me to pack my suitcase accordingly
        for any trip.
      </p>

      <h3 className="project-subtitles">The goals</h3>
      <p>Inspired by the concept of the app, I formulated a few goals:</p>
      <ul className="project-objectives-list">
        <li className="project-objectives-list-item">
          <b>1st goal:</b> Build the application from scratch, avoiding the use
          of third-party UI libraries.
        </li>
        <li>
          <b>2nd goal:</b> Apply and deepen my recently acquired knowledge of
          TypeScript.
        </li>
        <li>
          <b>3d goal:</b> Integrate several APIs into a single application.
        </li>
      </ul>

      <h4 className="project-subtitles">
        What I did to integrate each step into the project
      </h4>
      <TableList list={journayCastGoals} />

      <h3 className="project-subtitles">Additional steps befor development</h3>

      <p>
        Before starting the implementation, I created a basic mock-up of the
        application as a conceptual outline.
      </p>

      <ButtonLink
        href={mockUp}
        arialLabel="View the example of conceptual mock-up"
        buttonStyle="project-button-link-extra-information"
        icon
        margin
      >
        Conceptual mock-up
      </ButtonLink>

      <p>
        Faced with a lack of suitable weather icons, I decided to create my own
        set and uploaded them to a GitHub repository for free use.
      </p>

      <ButtonLink
        href={weatherIconsGithub}
        arialLabel="View the icons"
        buttonStyle="project-button-link-extra-information"
        icon
        margin
      >
        Weather icons
      </ButtonLink>

      <h3 className="project-subtitles">What I practiced</h3>
      <div>
        Throughout the project, I encountered various challenges in developing
        the app, while also gaining practical experience in the following areas:
        <List experienceList={journayCastExperience} />
      </div>
    </>
  );
};

export default JourneyCastProject;
