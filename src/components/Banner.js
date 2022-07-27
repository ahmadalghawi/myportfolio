import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/MYpic.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const Banner = ()=> {

    return ( 
        <section className='banner' id='home'>
            <Container >
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>welcome to my portfolio</span>
                        <h1>{`Hi,I'm Ahmad Alghawi`} <span className='wrap'></span></h1>
                        <p>I am good programming knowledge of Frontend HTML, CSS, JavaScript, React, C#, ASP.NET Webb, MVC, Azure and SQL I Microsoft SQL Server, Azure Cloud concept, Services, Security, Networking, and Support.</p>
                        <button onClick={()=> window.open("https://www.linkedin.com/in/ahmad-alghawi-310722197","_blank")}>Let's Connect<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col>
                        <img src={headerImg} alt="Headder Img" />
                    </Col>
                </Row>
            </Container>
        </section>

    )
    
    } 