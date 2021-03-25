import React from 'react';
import {
    Card,CardText, CardBody,
    CardTitle, Row, Col
} from 'reactstrap';

function Team(){
    return(
        <div>
            <Row>
                <Col sm = "4">
                <Card>
                    <CardBody>
                        <CardTitle tag = "h5">Cristian Ruiz</CardTitle>
                        <CardText>Major: Software Engineering</CardText>
                        <CardText>School: The University of Texas at Dallas</CardText>
                        <CardText>Year: </CardText>
                    </CardBody>
                 </Card>
                </Col>
                <Col sm = "4">
                <Card>
                    <CardBody>
                        <CardTitle tag = "h5">Brando Lugo</CardTitle>
                        <CardText>Major: Computer Science</CardText>
                        <CardText>School: The University of Texas Rio Grande Valley</CardText>
                        <CardText>Year: 1st year as a graduate student </CardText>
                    </CardBody>
                 </Card>
                </Col>
                <Col sm = "4">
                <Card>
                    <CardBody>
                        <CardTitle tag = "h5">Kristina Kepic</CardTitle>
                        <CardText>Major: Computer Science</CardText>
                        <CardText>School: The University of Texas at Dallas</CardText>
                        <CardText>Year: </CardText>
                    </CardBody>
                 </Card>
                </Col>
                <Col sm = "4">
                <Card>
                    <CardBody>
                        <CardTitle tag = "h5">Lesli Perez</CardTitle>
                        <CardText>Major: Computer Engineering</CardText>
                        <CardText>School: The University of Texas Rio Grande Valley</CardText>
                        <CardText>Year: </CardText>
                    </CardBody>
                 </Card>
                </Col>
                <Col sm = "4">
                <Card>
                    <CardBody>
                        <CardTitle tag = "h5">Oziel Salinas</CardTitle>
                        <CardText>Major: Computer Engineering</CardText>
                        <CardText>School: The University of Texas Rio Grande Valley</CardText>
                        <CardText>Year: Junior Year</CardText>
                    </CardBody>
                 </Card>
                </Col>
            </Row>                
        </div>
    );
}

export default Team;