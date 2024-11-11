import { faGithub, faSquareBehance } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
    return (
        <section className="footer-section">
            <Container>
                <Row>
                    <Col className="footer-icons">
                        <a href="https://github.com/kharizzakaye" target="_blank">
                            <FontAwesomeIcon icon={faGithub} className="footer-icons" />
                        </a>

                        <a href="https://www.behance.net/kviloria" target="_blank">
                            <FontAwesomeIcon icon={faSquareBehance} className="footer-icons" />
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Footer;