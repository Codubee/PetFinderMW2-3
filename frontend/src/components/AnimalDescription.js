import React from "react";
import { Container } from "reactstrap";
import '../style/AnimalDescription.css'

class AnimalDescription extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container className="animalDescriptionContainer">
                <div>
                    <h2 className="descriptionTitle">Animal name:  {this.props.name}</h2>
                    <h2 className="descriptionTitle">Animal type:  {this.props.type}</h2>
                    <h2 className="descriptionTitle">Animal sex:   {this.props.sex}</h2>
                    <h2 className="descriptionTitle">Shelter name: {this.props.shelter_name}</h2>
                    <h2 className="descriptionTitle"><a target="_blank" href={this.props.adoption_url}>Adoption URL</a></h2>
                </div>
            </Container>
        )
    }
}

export default AnimalDescription;