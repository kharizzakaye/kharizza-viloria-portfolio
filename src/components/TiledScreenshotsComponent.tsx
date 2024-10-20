import { Row, Col, Container, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import "../styles/projects/project-main.css";
import "../styles/projects/ui-components.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';

const TiledScreenshotsComponent = (projectData: any) => {

  return (
    <section>
      <Row xl={3} lg={3} md={2} sm={1} xs={1} className="g-4">

        { projectData.projectData.subProjects.map((project: any, index: any) => (

            <Col key={index}>

              <Image 
                src={project.imageCover.imageCoverLink}
                alt={project.imageCover.altText}
                fluid
              />

              <div className="button-links-section">
                { project.hasSourceCode &&
                  <>
                    {( project.sourceCodeLinks.length == 1 ) &&
                      <Button 
                        variant="outline-info"
                        href={ project.sourceCodeLinks[0].sourceCodeLink }
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faGithub} className="button-icon-padding-previous" />
                        View Code
                      </Button>
                    }

                    {( project.sourceCodeLinks.length > 1 ) &&
                      <Dropdown style={{ display: "inline-block" }}>
                        <Dropdown.Toggle variant="outline-info">
                          <FontAwesomeIcon icon={faGithub} className="button-icon-padding-previous" />
                          View Codes {" "}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          { project.sourceCodeLinks.map((link: any, index: any) => (
                            <Dropdown.Item href={link.sourceCodeLink} target="_blank" key={index}>
                              {link.sourceCodeLinkTitle}
                            </Dropdown.Item>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
                    }

                    &nbsp;
                    &nbsp;
                  </>
                }
                

                { project.hasLiveDemo &&
                  <>
                    <Button 
                      variant="outline-info" 
                      href={ project.liveDemoLink }
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faLink} className="button-icon-padding-previous" />
                      View Demo
                    </Button>
                  </>
                }
              </div>

            </Col>

        ))}

      </Row>
    </section>
  )
}

export default TiledScreenshotsComponent