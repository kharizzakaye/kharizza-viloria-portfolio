import "../styles/main.css";
import "../styles/hover.css";
import 'animate.css';
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const HeroComponent = () => {
  return (
    <>
      <section id="hero-section">
        <div className="animate__animated animate__fadeIn text-center hero-section-elements">
            <h1 className="main-page-title hvr-wobble-vertical">I'm a</h1>
            <br />
            <h2 className="page-not-found-title  hvr-wobble-vertical">Web Developer & a Designer</h2>
        </div>
      </section>

      {/* 
      <section id="hero-section">
        <Container className="vh-100">
            <Row className="center">
              <Col className="text-center" lg={ 5} md={12}>
                <Image
                  src="/assets/images/tourist-2.png"
                  alt="Image for page not found"
                  className="img-fluid"
                />
              </Col>

              <Col className="text-section" lg={7} md={12}>
                <p className="page-not-found-title hvr-wobble-vertical">Hi, I'm Kharizza.</p>
                <p>Creating graphic designs 9 years</p>
                <p>and developing softwares 4 years</p>
              </Col>
            </Row>
          </Container>
      </section> */}
    </>

          
  )
}

export default HeroComponent