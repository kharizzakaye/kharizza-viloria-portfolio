import Card from 'react-bootstrap/Card';
import { Row, Col, Container } from 'react-bootstrap';

import "../styles/main.css";
import "../styles/hover.css";
import AnimatedElement from './AnimatedElement';

const ExpertiseComponent = () => {
    const webDevelopmentImage = require("../assets/images/web-development.webp");
    const uxuiDesignImage = require("../assets/images/ux-ui-design.webp");
    const graphicDesignImage = require("../assets/images/graphic-design.webp");

    return (
        <>
            <section id="expertise-section" className="text-center">
                <AnimatedElement>
                    <h2 className="sub-header hvr-wobble-vertical" id="subtitle-expertise">
                        My Fields of Expertise
                    </h2>
                </AnimatedElement>
    
                <Container id="expertise-cards-section">
                    <AnimatedElement>
                        
                        <Row xl={3} lg={3} md={2} sm={1} xs={1} className="g-4">
                            <Col className="hvr-grow-rotate">
                                <Card className="h-100 expertise-card">
                                    <Card.Img 
                                        src={webDevelopmentImage}
                                        alt="Image for web development expertise"
                                    />
                                </Card>
                            </Col>

                            <Col className="hvr-grow-rotate">
                                <Card className="h-100 expertise-card">
                                    <Card.Img 
                                        src={uxuiDesignImage}
                                        alt="Image for UX/UI design expertise"
                                    />
                                </Card>
                            </Col>

                            <Col className="hvr-grow-rotate">
                                <Card className="h-100 expertise-card">
                                    <Card.Img 
                                        src={graphicDesignImage}
                                        alt="Image for graphic design expertise"
                                    />
                                </Card>
                            </Col>
                        </Row>

                    </AnimatedElement>
                    
                </Container>
            </section>
        </>
    );
};

export default ExpertiseComponent;
