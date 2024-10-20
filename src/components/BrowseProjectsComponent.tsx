import "../styles/projects/project-main.css"
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

const BrowseProjectsComponent = (projectsListData: any) => {

    const location = useLocation();
    const pathname = location.pathname;

    let viewPreviousProject = "";
    let viewNextProject = "";
    let projectsList = projectsListData.projectsListData;

    for (let i=0; i < projectsList.length; i++)
    {
        projectsList[i].id = i+1;
        
        if (projectsList[i].projectLink == pathname)
        {
            // first item
            if (projectsList[i].id == 1)
            {
                viewPreviousProject = projectsList[projectsList.length-1].projectLink;
                viewNextProject = projectsList[i+1].projectLink;
            }
            
            // last item
            else if ( projectsList[i].id == projectsList.length)
            {
                viewPreviousProject = projectsList[i-1].projectLink;
                viewNextProject = projectsList[0].projectLink;
            }
    
            // middle item
            else
            {
                viewPreviousProject = projectsList[i-1].projectLink;
                viewNextProject = projectsList[i+1].projectLink;
            }
        }
    }
           

    return (
        <>
            <section id="browse-projects-container" className="browse-project-buttons position-relative">
                <Button variant="outline-light" href={`${viewPreviousProject}`}>
                    <FontAwesomeIcon icon={faArrowLeft} className="button-icon-padding-previous" />
                    Previous Project
                </Button>

                <Button variant="outline-light" href={`${viewNextProject}`} className="position-absolute end-0">
                    Next Project
                    <FontAwesomeIcon icon={faArrowRight} className="button-icon-padding-next" />
                </Button>
            </section>
        </>
    )
}

export default BrowseProjectsComponent