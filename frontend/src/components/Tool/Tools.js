import React from 'react'
import {
    Card, CardBody, CardTitle, Row, Col
  } from 'reactstrap'  
import '../../Styles/Tools.css'
import reactLogo from './Tool_logos/React_logo.jpg'
import nodeLogo from './Tool_logos/NodeJS_logo.png'
import jiraLogo from './Tool_logos/Jira_logo.jpg'
import postmanLogo from './Tool_logos/Postman_logo.jpg'
import awsLogo from './Tool_logos/AWS_logo.jpg'
import herokuLogo from './Tool_logos/Heroku_logo.jpg'

function Tools() {
    
    return (
        <div>
            <h2 className="maintitle">Tools Used:</h2>
                <Row>
                <Col sm="1" className="centercard">
                    <Card>
                        <CardBody className="cardbackground">
                        <CardTitle className="cardtitle" tag="h5">React</CardTitle>
                        </CardBody>
                        <img src={reactLogo} alt="Card image cap" className="centerlogo"/>
                    </Card>
                </Col>
                <Col sm="1">
                    <Card>
                        <CardBody className="cardbackground">
                        <CardTitle className="cardtitle" tag="h5">NodeJS</CardTitle>
                        </CardBody>
                        <img src={nodeLogo} alt="Card image cap" className="centerlogo"/>
                    </Card>
                </Col>
                <Col sm="1">
                    <Card>
                        <CardBody className="cardbackground">
                        <CardTitle className="cardtitle" tag="h5">Jira</CardTitle>
                        </CardBody>
                        <img src={jiraLogo} alt="Card image cap" className="centerlogo"/>
                    </Card>
                </Col>
                <Col sm="1">
                    <Card>
                        <CardBody className="cardbackground">
                        <CardTitle className="cardtitle" tag="h5">Postman</CardTitle>
                        </CardBody>
                        <img src={postmanLogo} alt="Card image cap" className="centerlogo"/>
                    </Card>
                </Col>
                <Col sm="1">
                    <Card>
                        <CardBody className="cardbackground">
                        <CardTitle className="cardtitle" tag="h5">AWS</CardTitle>
                        </CardBody>
                        <img src={awsLogo} alt="Card image cap" className="centerlogo"/>
                    </Card>
                </Col>
                <Col sm="1">
                    <Card>
                        <CardBody className="cardbackground">
                        <CardTitle className="cardtitle" tag="h5">Heroku</CardTitle>
                        </CardBody>
                        <img src={herokuLogo} alt="Card image cap" className="center"/>
                    </Card>
                </Col>
                </Row>
        </div>
    )
}

export default Tools;