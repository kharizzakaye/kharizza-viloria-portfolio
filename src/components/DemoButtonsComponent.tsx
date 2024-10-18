import React from 'react'
import "../styles/projects/project-main.css"
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const DemoButtonsComponent = (projectData: any) => {
  return (
    <>
    <section>
        { projectData.projectData.hasSourceCode &&
            <>
                <Button variant="outline-info" href={ projectData.projectData.sourceCodeLink } className="back-button" target="_blank">
                    <FontAwesomeIcon icon={faGithub} className="button-icon-padding-previous" />
                    View Code
                </Button>

                &nbsp;
                &nbsp;
            </>
        }

        { projectData.projectData.hasLiveDemo &&
            <>
                <Button variant="outline-info" href={ projectData.projectData.liveDemoLink } className="back-button" target="_blank">
                    <FontAwesomeIcon icon={faLink} className="button-icon-padding-previous" />
                    View Demo
                </Button>
            </>
        }
    </section>
</>
  )
}

export default DemoButtonsComponent