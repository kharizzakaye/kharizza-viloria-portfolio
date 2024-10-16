import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "../styles/main.css";

const NavbarComponent = () => {

    const navbarIcon = require("../assets/images/code-icon.png")
    return (
        <Navbar className="navbar" sticky="top">
            <Container>
                <Navbar.Brand href="/" id='navbar-brand-name-1'>
                    <img
                        alt=""
                        src={navbarIcon}
                        height="30"
                        className="d-inline-block align-top"
                    />
                    <strong> Kharizza</strong><span id='navbar-brand-name'><strong>Viloria</strong></span>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent;