import React from 'react';
import {
    Card,CardText, CardBody,
    CardTitle,
} from 'reactstrap';

function Team(){
    return(
        <div>
            <Card>
                <CardBody>
                    <CardTitle tag = "h5">Card Title</CardTitle>
                    <CardText>Text Goes Here</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

export default Team;