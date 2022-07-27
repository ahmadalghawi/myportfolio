
import { Container ,Row ,Col} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Metro1 from "../assets/img/html-icon2.svg";
import Metro2 from "../assets/img/JS-icon.svg";
import Metro3 from "../assets/img/css-icon3.svg";
import Metro4 from "../assets/img/React-icon.svg";
import Metro5 from "../assets/img/c-sharp.svg";
import Metro6 from "../assets/img/aspnet.svg";
import Metro7 from "../assets/img/bootstrap-icon.svg";
import colorShape from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>My primary skills for the front end</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider" >
                                <div className="item">
                                    <img src={Metro1} alt="" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={Metro2} alt="" />
                                    <h5>Java Script</h5>
                                </div>
                                <div className="item">
                                    <img src={Metro3} alt="" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={Metro4} alt="" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={Metro5} alt="" />
                                    <h5>C#</h5>
                                </div>
                                <div className="item">
                                    <img src={Metro6} alt="" />
                                    <h5>Asp.net & MVC</h5>
                                </div>
                                <div className="item">
                                    <img src={Metro7} alt="" />
                                    <h5>Bootsrap</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorShape} alt="" />
        </section>
    )

}
