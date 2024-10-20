import NavbarComponent from '../components/NavbarComponent'

import "../styles/projects/project-main.css"
import { Container } from 'react-bootstrap'
import TechnologyBadgeComponent from '../components/TechnologyBadgeComponent'
import projectsData from "../data/projects.json"
import { useLocation } from 'react-router-dom'
import ProjectScreenshotsComponent from '../components/ProjectScreenshotsComponent'
import BrowseProjectsComponent from '../components/BrowseProjectsComponent'
import BackButtonComponent from '../components/BackButtonComponent'
import DemoButtonsComponent from '../components/DemoButtonsComponent'

const JigsawInventory = () => {

  const location = useLocation();
  const pathname = location.pathname;
  const fetchProjectData = projectsData.data.filter(item => item.projectLink === pathname);
  const projectData = fetchProjectData[0];

  return (
    <>
      <NavbarComponent />

      <div className="project-body">
        <Container>

          <BackButtonComponent />

          <h1 className="project-page-title">{projectData.title}</h1>
          <h2 className="project-page-subtitle text-white">{projectData.subtitle}</h2>
       
          <TechnologyBadgeComponent technologiesList={projectData.technologies} />

          <p className="project-page-description text-white">
            An inventory system currently being used by the Jigsaw Puzzle Community PH (JPCPH) and Puzzle Mansion administrators, 
            to track thousands of jigsaw puzzles, in an effort to take back the Guinness World Record for having the most number 
            of jigsaw puzzles in a collection.
          </p>

          <DemoButtonsComponent projectData={projectData} />

          <ProjectScreenshotsComponent imagesList={projectData.sampleImages} />

          <BrowseProjectsComponent projectsListData={projectsData.data} />

        </Container>
      </div>
      
    </>
  )
}

export default JigsawInventory