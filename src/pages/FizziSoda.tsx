import React from 'react'
import NavbarComponent from '../components/NavbarComponent'

import "../styles/projects/project-main.css"
import { Container } from 'react-bootstrap'
import TechnologyBadgeComponent from '../components/TechnologyBadgeComponent'
import projectsData from "../data/projects.json"
import { useLocation } from 'react-router-dom'
import ProjectScreenshotsComponent from './ProjectScreenshotsComponent'

const FizziSoda = () => {

  const location = useLocation();
  const fetchProjectData = projectsData.data.filter(item => item.projectLink === location.pathname);
  const projectData = fetchProjectData[0];

  return (
    <>
      <NavbarComponent />

      <div className="project-body">
        <Container>
          <h1 className="project-page-title">{projectData.title}</h1>
          <h2 className="project-page-subtitle text-white">3D / Animated Landing Page</h2>
       
          <TechnologyBadgeComponent technologiesList={projectData.technologies} />

          <ProjectScreenshotsComponent imagesList={projectData.sampleImages} />
        </Container>
      </div>
      
    </>
  )
}

export default FizziSoda