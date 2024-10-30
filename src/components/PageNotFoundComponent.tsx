import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import "../styles/page-not-found.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const PageNotFoundComponent = () => {
    return (
        <div className="background">
            <Container className="vh-100">
                <Row className="center">
                    <Col className="text-center" xl={6} lg={6} md={12}>
                        <Image
                            src="/assets/images/outer-space.webp"
                            alt="Image for page not found"
                            className="img-fluid page-not-found-image"
                        />
                    </Col>

                    <Col className="text-section" xl={6} lg={6} md={12}>
                        <h1 className="page-not-found-title">Are you lost?</h1>
                        <p className="page-not-found-title-text">
                            The page you are looking for no longer exists. 
                            Don't worry, you can still browse my website by clicking the button below.
                        </p>
                        
                        <Button variant="outline-info" href="/">
                            <FontAwesomeIcon icon={faArrowLeft} className="button-icon-padding-previous" />
                            Back to Homepage
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PageNotFoundComponent