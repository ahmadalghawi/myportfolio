import { Col } from "react-bootstrap";
export const ProjectsCard = ({title , description ,imgUrl ,linkUrl})=> {


    return (
        <Col sm={6} md={4} >
            <div className="projX" >
            <div className="proj-imgbx">
            <a href={linkUrl} target='_blank'>
                <img src={imgUrl} />
                
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    
                </div>
                </a>
            </div>
            <span className="span-txtx">{description}</span>
            </div>
        </Col>

    )
}
