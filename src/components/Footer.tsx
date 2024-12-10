import React from 'react';
import { faGithub, faSquareBehance } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row, OverlayTrigger, Tooltip } from 'react-bootstrap';

const Footer: React.FC = () => {
    const renderTooltip = (message: string) => (props: any) => (
        <Tooltip id="icon-tooltip" {...props}>
            {message}
        </Tooltip>
    );

    const overlayTriggerDelay = {
        show: 250, 
        hide: 400
    }

    return (
        <section className="footer-section">
            <Container>
                <Row>
                    <Col>
                        <p>Visit my other profiles</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <OverlayTrigger
                            placement="top"
                            delay={overlayTriggerDelay}
                            overlay={renderTooltip('GitHub')}
                        >
                            <a href="https://github.com/kharizzakaye" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} className="footer-icons" />
                            </a>
                        </OverlayTrigger>

                        <OverlayTrigger
                            placement="top"
                            delay={overlayTriggerDelay}
                            overlay={renderTooltip('Behance')}
                        >
                            <a href="https://www.behance.net/kviloria" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faSquareBehance} className="footer-icons" />
                            </a>
                        </OverlayTrigger>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Footer;