import "../styles/projects/project-main.css"
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import { HashLink } from 'react-router-hash-link';

const BackButtonComponent = () => {
  return (
    <>
        <Button variant="outline-light" href="/" className="back-button">
            <FontAwesomeIcon icon={faArrowLeft} className="button-icon-padding-previous" />
            Back to Homepage
        </Button>
    </>
  )
}

export default BackButtonComponent