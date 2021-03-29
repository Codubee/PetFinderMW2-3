import React from 'react';

import {
    Card,CardText, CardBody,
    CardTitle, Row, Col, CardLink, CardImg
} from 'reactstrap';

import img1 from '../images/team_member1.jpg'
import img2 from '../images/team_member2.jpg'
import img3 from '../images/team_member3.jpg'
import img4 from '../images/team_member4.jpg'
import img5 from '../images/team_member5.jpg'



import '../style/team.css'
function Team(){
    return(
        <div>
            <h2 className = "title">OUR TEAM</h2>
            <Row>
                <Col sm = "3" className = "centercard">
                <Card>
                <CardImg bottom width = "100%" src = {img4} alt = "Card image camp" className="img"/>
                <CardBody className = "cardbackground">
                        <CardTitle className = "cardtitle" tag = "h5">Lesli Perez</CardTitle>
                        <CardText  className = "cardtext">Major: Computer Engineering</CardText>
                        <CardText  className = "cardtext">School: The University of Texas Rio Grande Valley</CardText>
                        <CardText  className = "cardtext">Year: Junior</CardText>
                        <CardLink className= "link" href = "https://www.linkedin.com/in/lesli-perez/">Linkedin</CardLink>
                    </CardBody>
                 </Card>
                </Col>

                <Col sm = "3" className = "centercard">
                <Card>
                <CardImg bottom width = "100%" src = {img5} alt = "Card image camp"/>
                <CardBody className = "cardbackground">
                        <CardTitle className = "cardtitle" tag = "h5">Oziel Salinas</CardTitle>
                        <CardText  className = "cardtext">Major: Computer Engineering</CardText>
                        <CardText  className = "cardtext">School: The University of Texas Rio Grande Valley</CardText>
                        <CardText  className = "cardtext">Year: Junior</CardText>
                        <CardLink className= "link" href = "https://www.linkedin.com/in/oziel-salinas-8a5a5418b/">Linkedin</CardLink>
                    </CardBody>
                 </Card>
                </Col>

                <Col sm = "3" className = "centercard">
                <Card>
                <CardImg bottom width = "100%" src = {img2} alt = "Card image camp"/>
                <CardBody className = "cardbackground">
                        <CardTitle className = "cardtitle" tag = "h5">Brando Lugo</CardTitle>
                        <CardText  className = "cardtext" >Major: Computer Science</CardText>
                        <CardText  className = "cardtext">School: The University of Texas Rio Grande Valley</CardText>
                        <CardText  className = "cardtext">Year: Graduate </CardText>
                        <CardLink className= "link" href = "https://www.linkedin.com/in/brandolugo/">Linkedin</CardLink>
                    </CardBody>
                 </Card>
                </Col>

                <Col sm = "3" className = "centercard">
                <Card>
                <CardImg bottom width = "100%" src = {img3} alt = "Card image camp"/>
                <CardBody className = "cardbackground">
                        <CardTitle className = "cardtitle" tag = "h5">Kristina Kepic</CardTitle>
                        <CardText  className = "cardtext">Major: Computer Science</CardText>
                        <CardText  className = "cardtext">School: The University of Texas at Dallas</CardText>
                        <CardText  className = "cardtext">Year: Sophmore</CardText>
                        <CardLink className= "link" href = "https://www.linkedin.com/in/kristina-kepic-4557a21b8/">Linkedin</CardLink>
                    </CardBody>
                 </Card>
                </Col>
                
                <Col sm = "3" className = "centercard">
                <Card>
                    <CardImg bottom width="100%" src = {img1} alt = "Card image camp"/>
                    <CardBody className = "cardbackground">
                        <CardTitle className = "cardtitle" tag = "h5">Cristian Ruiz</CardTitle>
                        <CardText  className = "cardtext" >Major: Software Engineering</CardText>
                        <CardText  className = "cardtext" >School: The University of Texas at Dallas</CardText>
                        <CardText  className = "cardtext" >Year: Junior</CardText>
                        <CardLink className= "link" href = "https://www.linkedin.com/in/cristian-ruiz-99b2b4173/">Linkedin</CardLink>
                    </CardBody>
                 </Card>
                </Col>
            </Row>                
        </div>
    );
}

export default Team;