import React from 'react'
import Card from 'react-bootstrap/Card';
import { Row, Col, Container } from 'react-bootstrap';

import "../styles/main.css";
import "../styles/hover.css";


function ProjectsComponent() {

    const projectsList = [
        {
            title: "Fizzi Soda",
            imageLink: require("../assets/images/project-icons/fizzi-soda.png"),
            projectLink: "/fizzi-soda",
        },
        {
            title: "Desserts Shop",
            imageLink: require("../assets/images/project-icons/dessert-shop.png"),
            projectLink: "/desserts-shop",
        },
        {
            title: "Where in the world?",
            imageLink: require("../assets/images/project-icons/world.png"),
            projectLink: "/where-in-the-world",
        },
        {
            title: "Jigsaw Puzzle Inventory",
            imageLink: require("../assets/images/project-icons/puzzle-inventory.png"),
            projectLink: "/jigsaw-inventory",
        },
        {
            title: "Design Portfolio",
            imageLink: require("../assets/images/project-icons/design-portfolio.png"),
            projectLink: "/design-portfolio",
        },
        {
            title: "User Interface Components",
            imageLink: require("../assets/images/project-icons/components.png"),
            projectLink: "/ui-components",
        },
        {
            title: "Pet Dex",
            imageLink: require("../assets/images/project-icons/pet-dex.png"),
            projectLink: "/pet-dex",
        },
        {
            title: "Graphic Design",
            imageLink: require("../assets/images/project-icons/graphic-design.png"),
            projectLink: "/graphic-design",
        },
    ];


    return (
        <>
            <section id="projects-section" className="text-center">
                <h2 className="sub-header hvr-wobble-vertical" id="subtitle-projects">Projects</h2>

                <Container id="project-cards-section">
                    <Row xl={4} lg={3} md={2} sm={1} xs={1} className="g-4">

                        { projectsList.map((project: any, index) => (

                            <Col key={index} className="hvr-grow-rotate">
                                <a href={`${project.projectLink}`} >
                                    <Card className="h-100 project-card">
                                        <Card.Img 
                                            src={`${project.imageLink}`}
                                            alt={`Image for ${project.title}`}
                                        />
                                    </Card>
                                </a>
                            </Col>

                        ))}

                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ProjectsComponent