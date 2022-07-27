import { Container, Row, Col, Navbar } from "react-bootstrap";
import logo from "../assets/img/logo design3.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from '../assets/img/GitHub-Mark.png';
import navIcon3 from "../assets/img/gmail-logo.svg";

export const Footer = () => {
    return (
    <footer className="footer">
    <Container>
        <Row className="align-items-center">
            <Col size={12} sm={6}>
                <Navbar.Brand href="#home">
                <img src={logo} alt="logo"  />
                </Navbar.Brand>
            </Col>
            <Col size={12} sm={6} >
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/ahmad-alghawi-310722197" target="_blank" rel="noreferrer"><img src={navIcon1} alt="Icon" /></a>
                <a href="https://github.com/ahmadalghawi" target="_blank" rel="noreferrer"><img src={navIcon2} alt="Icon" /></a>
                <a href="mailto:ahmadlaghawi.86@gmail.com"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022 <span>Ahmad Alghawi</span>. All Rights Reserved</p>
            </Col>
        </Row>
    </Container>
    </footer>
    )
}
