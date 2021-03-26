import React from 'react';
import {
    Card,CardText, CardBody,
    CardTitle, Row, Col, CardLink, CardImg
} from 'reactstrap';

import '../style/team.css'
function Team(){
    return(
        <div>
            <Row>
                <Col sm = "4" className = "centercard">
                <Card>
                    <CardImg bottom width="100%" src = "https://media-exp1.licdn.com/dms/image/C5603AQHCZa_VIvWc7A/profile-displayphoto-shrink_800_800/0/1552618324546?e=1622073600&v=beta&t=Vs_lq_sV_T-umw77K5MTm_SwrzVwIdd52fagfjmZVAc" alt = "Card image camp"/>
                    <CardBody className = "cardbackground">
                        <CardTitle className = "cardtitle" tag = "h5">Cristian Ruiz</CardTitle>
                        <CardText  className = "cardtext" >Major: Software Engineering</CardText>
                        <CardText  className = "cardtext">School: The University of Texas at Dallas</CardText>
                        <CardText  className = "cardtext">Year: Junior</CardText>
                        <CardLink class= "link" href = "https://www.linkedin.com/in/cristian-ruiz-99b2b4173/">Linkedin</CardLink>
                    </CardBody>
                 </Card>
                </Col>
                <Col sm = "4" className = "centercard">
                <Card>
                <CardImg bottom width = "100%" src = "https://media-exp1.licdn.com/dms/image/C5603AQG6jN_wOeJotA/profile-displayphoto-shrink_800_800/0/1603417375599?e=1622073600&v=beta&t=tQ9jeBqpJxoSVK7wbQntxyvqvEY7LAtwmvtPZ6BlPq0" alt = "Card image camp"/>
                <CardBody className = "cardbackground">
                        <CardTitle className = "cardtitle" tag = "h5">Brando Lugo</CardTitle>
                        <CardText  className = "cardtext">Major: Computer Science</CardText>
                        <CardText  className = "cardtext">School: The University of Texas Rio Grande Valley</CardText>
                        <CardText  className = "cardtext">Year: Graduate </CardText>
                        <CardLink class= "link" href = "https://www.linkedin.com/in/brandolugo/">Linkedin</CardLink>
                    </CardBody>
                 </Card>
                </Col>
                <Col sm = "4" className = "centercard">
                <Card>
                <CardImg bottom width = "100%" src = "https://media-exp1.licdn.com/dms/image/C4E35AQHmNPWfIfXRIQ/profile-framedphoto-shrink_800_800/0/1606878713047?e=1616878800&v=beta&t=yNNgj4rsrjVKYeciWlFJ5GR_l9cf_xrdDHI6GNVGHfI" alt = "Card image camp"/>
                <CardBody className = "cardbackground">
                        <CardTitle className = "cardtitle" tag = "h5">Kristina Kepic</CardTitle>
                        <CardText  className = "cardtext">Major: Computer Science</CardText>
                        <CardText  className = "cardtext">School: The University of Texas at Dallas</CardText>
                        <CardText  className = "cardtext">Year: Sophmore</CardText>
                        <CardLink class= "link" href = "https://www.linkedin.com/in/kristina-kepic-4557a21b8/">Linkedin</CardLink>
                    </CardBody>
                 </Card>
                </Col>
                <Col sm = "4" className = "centercard">
                <Card>
                <CardImg bottom width = "100%" src = "https://media-exp1.licdn.com/dms/image/C5635AQHOdTexHojCfQ/profile-framedphoto-shrink_800_800/0/1598920549413?e=1616882400&v=beta&t=2vMmsxeGBcW6AOxu8okP22qs03CupT4hyKSQTcw7oYI" alt = "Card image camp"/>

                <CardBody className = "cardbackground">
                        <CardTitle className = "cardtitle" tag = "h5">Lesli Perez</CardTitle>
                        <CardText  className = "cardtext">Major: Computer Engineering</CardText>
                        <CardText  className = "cardtext">School: The University of Texas Rio Grande Valley</CardText>
                        <CardText  className = "cardtext">Year: Junior</CardText>
                        <CardLink class= "link" href = "https://www.linkedin.com/in/lesli-perez/">Linkedin</CardLink>
                    </CardBody>
                 </Card>
                </Col>
                <Col sm = "4" className = "centercard">
                <Card>
                <CardImg bottom width = "100%" src = "https://media-exp1.licdn.com/dms/image/C4E03AQG4we6AICc0tQ/profile-displayphoto-shrink_800_800/0/1565284114929?e=1622073600&v=beta&t=vMChzir5Q0bjB1TuUCsoIeLHb0JqL_AMx93FUwfLU6A" alt = "Card image camp"/>

                <CardBody className = "cardbackground">
                        <CardTitle className = "cardtitle" tag = "h5">Oziel Salinas</CardTitle>
                        <CardText  className = "cardtext">Major: Computer Engineering</CardText>
                        <CardText  className = "cardtext">School: The University of Texas Rio Grande Valley</CardText>
                        <CardText  className = "cardtext">Year: Junior</CardText>
                        <CardLink class= "link" href = "https://www.linkedin.com/in/oziel-salinas-8a5a5418b/">Linkedin</CardLink>
                    </CardBody>
                 </Card>
                </Col>
            </Row>                
        </div>
    );
}

export default Team;