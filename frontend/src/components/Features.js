import React from 'react';
import '../style/Features.css';
import img1 from '../images/puppy.jpeg';
import img2 from '../images/shelter.jpg';
import { Row,Col,Container } from 'reactstrap';

function Features() {
    return (
        <div id="features-div">
            <div id="border">
                <h1 id="title" >Features</h1>
                <hr></hr>
                <br></br>
                <p id="text">• Matching you with a shelter animal.</p>
                <p id="text">• Connecting you to an animal shelter.</p>
            </div>
            <Container id="margin">
                <Row>
                    <Col sm="12" md="6">
                        <img src={img1} id="image" alt=" "></img>
                    </Col>
                    <Col sm="12" md="6">
                        <img src={img2} id="image" alt=" "></img>
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default Features;