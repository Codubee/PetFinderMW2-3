import React from 'react';

import {
    Card,CardText, CardBody,
    CardTitle, Row, Col, CardLink, CardImg } from 'reactstrap';

import data from '../jsonData/jsonData_team.json'

import img1 from '../images/team_member1.jpg'
import img2 from '../images/team_member2.jpg'
import img3 from '../images/team_member3.jpg'
import img4 from '../images/team_member4.jpg'
import img5 from '../images/team_member5.jpg'

import '../style/Team.css'

const image = [img4,img5,img2,img3,img1];

class Team extends React.Component{
    render() {
        return (
            <div className = "teamcontainer">
                <h2 className="head_title">OUR TEAM</h2>
                <Row xs ="3">
                    {data.map((person, index) => (
                        <div key={index}>
                            <Col sm="9" className="centercard">
                                <Card>
                                    <CardImg bottom width="100%" src={image[index]} alt="Card image camp" className="img" />
                                    <CardBody className="teambackground">
                                        <CardTitle className="teamtitle" tag="h5">{person.personal_data.name}</CardTitle>
                                        <CardText className="teamtext">{person.personal_data.major}</CardText>
                                        <CardText className="teamtext">{person.personal_data.school}</CardText>
                                        <CardText className="teamtext">{person.personal_data.year}</CardText>
                                        <CardLink className="teamlink" href={person.personal_data.link}>Linkedin</CardLink>
                                    </CardBody>
                                </Card>
                            </Col>
                            <br></br>
                        </div>
                    )

                    )}
                </Row>
            </div>
        )
    }
}

export default Team;
