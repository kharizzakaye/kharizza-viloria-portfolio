import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import HeroComponent from '../components/HeroComponent'

type Props = {}

const Homepage = (props: Props) => {
  return (
    <>
        <NavbarComponent />
        <HeroComponent />
    </>
  )
}

export default Homepage