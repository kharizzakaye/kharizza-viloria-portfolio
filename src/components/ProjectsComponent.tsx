import Card from 'react-bootstrap/Card';
import { Row, Col, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';

import "../styles/main.css";
import "../styles/hover.css";
import projectsData from "../data/projects.json"
import AnimatedElement from './AnimatedElement';


const ProjectsComponent = () => {

    // Define the animation variants
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    const projectsList = projectsData.data.map((item: any) => ({
        title: item.title,
        imageLink: item.imageLink,
        projectLink: item.projectLink,
    }));

    return (
        <>
            <section id="projects-section" className="text-center">
                <AnimatedElement>
                    <h2 className="sub-header hvr-wobble-vertical" id="subtitle-projects">
                        Projects
                    </h2>
                </AnimatedElement>

                <Container id="project-cards-section">
                    <Row xl={4} lg={3} md={2} sm={1} xs={1} className="g-4">

                        { projectsList.map((project: any, index) => (
                            <Col key={index} className="hvr-grow-rotate">

                                <AnimatedElement>
                                    <a href={`${project.projectLink}`} >
                                        <Card className="h-100 project-card">
                                            <Card.Img 
                                                src={`${project.imageLink}`}
                                                alt={`Image for ${project.title}`}
                                            />
                                        </Card>
                                    </a>
                                </AnimatedElement>
                                
                            </Col>
                        ))}

                    

                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ProjectsComponent