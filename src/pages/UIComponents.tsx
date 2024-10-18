import NavbarComponent from '../components/NavbarComponent'

import "../styles/projects/project-main.css"
import { Container } from 'react-bootstrap'
import TechnologyBadgeComponent from '../components/TechnologyBadgeComponent'
import projectsData from "../data/projects.json"
import { useLocation } from 'react-router-dom'
import BrowseProjectsComponent from '../components/BrowseProjectsComponent'
import BackButtonComponent from '../components/BackButtonComponent'
import TiledScreenshotsComponent from '../components/TiledScreenshotsComponent'

const UIComponents = () => {

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

          <TiledScreenshotsComponent projectData={projectData}/>

          <BrowseProjectsComponent projectsListData={projectsData.data} />

        </Container>
      </div>
      
    </>
  )
}

export default UIComponents