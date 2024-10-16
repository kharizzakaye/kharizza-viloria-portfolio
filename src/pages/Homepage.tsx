import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import HeroComponent from '../components/HeroComponent'

const Homepage = () => {
  return (
    <>
      <NavbarComponent />
      
      <main>
        <HeroComponent />
      </main>
    </>
  )
}

export default Homepage