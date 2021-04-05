import React from "react";
import '../style/AnimalDescription.css'

class AnimalDescription extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h2 className="descriptionTitle">Animal name:  {this.props.name}</h2>
                <h2 className="descriptionTitle">Animal type:  {this.props.type}</h2>
                <h2 className="descriptionTitle">Animal sex:   {this.props.sex}</h2>
                <h2 className="descriptionTitle">Shelter name: {this.props.shelter_name}</h2>
                <h2 className="descriptionTitle">Adoption url: {this.props.adoption_url}</h2>
            </div>
        )
    }
}

export default AnimalDescription;