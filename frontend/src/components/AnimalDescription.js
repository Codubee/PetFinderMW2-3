import React from "react";
import { Container } from "reactstrap";
import '../style/AnimalDescription.css'

function AnimalDescription(props) {

    return (
        <Container className="animalDescriptionContainer">
            <div>
                <h2 className="descriptionTitle">Animal name:  {props.description.name}</h2>
                <h2 className="descriptionTitle">Animal type:  {props.description.type}</h2>
                <h2 className="descriptionTitle">Animal sex:   {props.description.sex}</h2>
                <h2 className="descriptionTitle">Shelter name: {props.description.shelter_name}</h2>
                <h2 className="descriptionTitle"><a target="_blank" href={props.description.adoption_url} rel="noreferrer">Adoption URL</a></h2>
            </div>
        </Container>
    )
    
}

export default AnimalDescription;