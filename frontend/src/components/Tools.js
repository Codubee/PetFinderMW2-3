import React from 'react'
import {
    Card, CardBody, CardTitle, Row, Col
  } from 'reactstrap'
    
import '../style/Tools.css'
import Logo from "../images/React_logo.jpg";
import Logo2 from "../images/NodeJS_logo.png";
import Logo3 from "../images/Jira_logo.jpg";
import Logo4 from "../images/Postman_logo.jpg";
import Logo5 from "../images/AWS_logo.jpg";
import Logo6 from "../images/Heroku_logo.jpg";

function Tools() {
    
    return (
        <div>
            <h2 className="maintitle">Tools Used:</h2>
                <Row>
                <Col sm="2">
                    <Card>
                        <CardBody className="cardbackground">
                        <CardTitle className="cardtitle" tag="h5">React</CardTitle>
                        </CardBody>
                        <img src={Logo} alt="Card image cap" className="centerlogo"/>
                    </Card>
                </Col>
                <Col sm="2">
                    <Card>
                        <CardBody className="cardbackground">
                        <CardTitle className="cardtitle" tag="h5">NodeJS</CardTitle>
                        </CardBody>
                        <img src={Logo2} alt="Card image cap" className="centerlogo"/>
                    </Card>
                </Col>
                <Col sm="2">
                    <Card>
                        <CardBody className="cardbackground">
                        <CardTitle className="cardtitle" tag="h5">Jira</CardTitle>
                        </CardBody>
                        <img src={Logo3} alt="Card image cap" className="centerlogo"/>
                    </Card>
                </Col>
                <Col sm="2">
                    <Card>
                        <CardBody className="cardbackground">
                        <CardTitle className="cardtitle" tag="h5">Postman</CardTitle>
                        </CardBody>
                        <img src={Logo4} alt="Card image cap" className="centerlogo"/>
                    </Card>
                </Col>
                <Col sm="2">
                    <Card>
                        <CardBody className="cardbackground">
                        <CardTitle className="cardtitle" tag="h5">AWS</CardTitle>
                        </CardBody>
                        <img src={Logo5} alt="Card image cap" className="centerlogo"/>
                    </Card>
                </Col>
                <Col sm="2">
                    <Card>
                        <CardBody className="cardbackground">
                        <CardTitle className="cardtitle" tag="h5">Heroku</CardTitle>
                        </CardBody>
                        <img src={Logo6} alt="Card image cap" className="centerlogo"/>
                    </Card>
                </Col>
                </Row>
        </div>
    )
}

export default Tools;