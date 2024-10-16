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
            projectLink: "/fizziSoda",
        },
        {
            title: "Desserts Shop",
            imageLink: require("../assets/images/project-icons/dessert-shop.png"),
            projectLink: "/dessertsShop",
        },
        {
            title: "Where in the world?",
            imageLink: require("../assets/images/project-icons/world.png"),
            projectLink: "/whereInTheWorld",
        },
        {
            title: "Jigsaw Puzzle Inventory",
            imageLink: require("../assets/images/project-icons/puzzle-inventory.png"),
            projectLink: "/jigsawInventory",
        },
        {
            title: "Design Portfolio",
            imageLink: require("../assets/images/project-icons/design-portfolio.png"),
            projectLink: "/designPortfolio",
        },
        {
            title: "User Interface Components",
            imageLink: require("../assets/images/project-icons/components.png"),
            projectLink: "/uiComponents",
        },
        {
            title: "Pet Dex",
            imageLink: require("../assets/images/project-icons/pet-dex.png"),
            projectLink: "/petDex",
        },
        {
            title: "Graphic Design",
            imageLink: require("../assets/images/project-icons/graphic-design.png"),
            projectLink: "/graphicDesign",
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