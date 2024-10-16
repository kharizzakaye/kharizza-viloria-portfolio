import React from 'react'
import "../styles/main.css";
import "../styles/hover.css";
import 'animate.css';

const HeroComponent = () => {
  return (
    <>
        <section id="hero-section">
            <div className="animate__animated animate__fadeIn text-center hero-section-elements">
                <h1 className="main-page-title hvr-wobble-vertical">Welcome to my <br></br> Portfolio</h1>
            </div>
        </section>
    </>
  )
}

export default HeroComponent