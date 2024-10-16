import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import HeroComponent from '../components/HeroComponent'
import ExpertiseComponent from '../components/ExpertiseComponent'
import ProjectsComponent from '../components/ProjectsComponent'

const Homepage = () => {
  return (
    <>
      <NavbarComponent />
      
      <main>
        <HeroComponent />
        <ExpertiseComponent />
        <ProjectsComponent />
      </main>
    </>
  )
}

export default Homepage