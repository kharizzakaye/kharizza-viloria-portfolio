import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import HeroComponent from '../components/HeroComponent'
import ExpertiseComponent from '../components/ExpertiseComponent'
import ProjectsComponent from '../components/ProjectsComponent'
import AboutMeComponent from '../components/AboutMeComponent'

const Homepage = () => {
  return (
    <>
      <NavbarComponent />
      
      <main>
        <HeroComponent />
        {/* <AboutMeComponent /> */}
        <ExpertiseComponent />
        <ProjectsComponent />
      </main>
    </>
  )
}

export default Homepage