import { Container, Row, Col, Nav,Tab } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import { ProjectsCard } from "./ProjectsCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/gameover-web.jpg";
import projImg2 from "../assets/img/GitHub_Fetch.jpg";
import projImg3 from "../assets/img/portfolio-Template-one.jpg";
export const Projects = () => {
    const projects = [
        {
            title: "Gamers Gangs",
            description: "5 gamer play game and make content video game",
            imgUrl: projImg1,
            linkUrl:"https://ahmadalghawi.github.io/GamerGangs.GitHub.io/",
        },
        {
            title: "GitHub_Fetch",
            description: "This project will show the Repositories and stars in Github by typing the user name .",
            imgUrl: projImg2,
            linkUrl:"https://ahmadalghawi.github.io/GitHub_Fetch/",
        },
        {
            title: "portfolio Template 1",
            description: "Design Template for portfolio coding Html and Css",
            imgUrl: projImg3,
            linkUrl:"https://ahmadalghawi.github.io/AG-Template-1.github.io/",
        },
        
    ];

return(
    <section className="project" id="project">
        <Container>
            <Row>
                <Col>
                <h2>project & Other skills</h2>
                <p>Some of the projects on the GitHub</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                    <Nav.Link eventKey="first">tab1</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                    <Nav.Link eventKey="second">tab2</Nav.Link>
                    </Nav.Item> */}
                    <Nav.Item>
                    <Nav.Link eventKey="third">tab3</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>
                            {
                            projects.map((project, index) => {
                                return (
                                    <ProjectsCard 
                                    key ={index}
                                    {...project}
                                    />
                                )
                            } )}
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second"></Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <Col>
                        <ListGroup as="ul" className="listgruops">
                        <ListGroup.Item as="li">Technical support software and hardware (all Windows installations and programs) and find solutions and maintenance, -A +</ListGroup.Item>
                            <ListGroup.Item as="li"> C# database methodology in Visual Studio, Entity Framework,LINQ,Azure and SQL in Microsoft SQL server</ListGroup.Item>
                            <ListGroup.Item as="li">Microsoft Certified: Azure Fundamentals & Azure Data Fundamentals </ListGroup.Item>
                            <ListGroup.Item as="li">Basic knowledge in adobe premiere and adobe photoshop</ListGroup.Item>
                            <ListGroup.Item as="li">Azure Cloud concept & Microsoft office 365</ListGroup.Item>
                        </ListGroup>
                        </Col>
                    </Tab.Pane>
                </Tab.Content>
                </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} alt='' ></img>
    </section>
)
}