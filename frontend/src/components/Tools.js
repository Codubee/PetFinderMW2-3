import React from 'react'
import {
    Card, CardBody, CardTitle, Row, Col,Container
  } from 'reactstrap'
    
import '../style/Tools.css'
import Logo1 from "../images/React_logo.jpg";
import Logo2 from "../images/NodeJS_logo.png";
import Logo3 from "../images/Jira_logo.jpg";
import Logo4 from "../images/Postman_logo.jpg";
import Logo5 from "../images/AWS_logo.jpg";
import Logo6 from "../images/Heroku_logo.jpg";

class Tools extends React.Component {
    
    render(){

        const logo = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6]
        const titles = ["React", "NodeJS", "Jira", "Postman", "AWS", "Heroku"]
    
        return (
            <Container>
                <h2 className="maintitle">Tools Used:</h2>
                <Row>
                    {titles.map((title, index) =>   
                        <Col sm="2" md="6" key={index}>
                            <Card>
                                <CardBody className="cardbackground">
                                    <CardTitle className="cardtitle" tag="h5">{title}</CardTitle>
                                </CardBody>
                                <img src={logo[index]} alt="Card place" className="centerlogo"/>
                            </Card>
                        </Col> 
                    )}
                </Row>
            </Container>
        )
    }
}

export default Tools;
