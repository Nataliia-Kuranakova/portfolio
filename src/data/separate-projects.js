import JourneyCastProject from '../projects-components/JourneyCastProject';
import PortfolioProject from '../projects-components/PortfolioProject';

export const projects = [
  {
    id: '01',
    project: 'Portfolio',
    project_path: 'Portfolio',
    descr: <PortfolioProject />,
  },
  {
    id: '02',
    project: 'Journey Cast',
    project_path: 'journey-cast',
    descr: <JourneyCastProject />,
  },
];
