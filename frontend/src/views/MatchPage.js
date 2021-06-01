import React from "react";
import FadeIn from "react-fade-in";
import PhotoDisplay from "../components/PhotoDisplay";

import animalImg from "../images/DisplayTest.jpg"
import AnimalDescription from '../components/AnimalDescription';
import { Button, Container } from "reactstrap";
import { FaHeart, FaTimes } from 'react-icons/fa'
import DisplayMatches from '../components/DisplayMatches'
import axios from 'axios'

import "../style/Buttons.css";

class MatchPage extends React.Component {

  constructor(props){
    super(props)
    this.state = {description:{}}
    this.getMatches = this.getMatches.bind(this)
    this.yesClick = this.yesClick.bind(this)
    this.noClick = this.noClick.bind(this)
  }

  componentDidMount() {
    this.getMatches();
  }

  yesClick(){
    //TODO: add to user
    this.getMatches();
  }

  noClick(){
    this.getMatches();
  }

  getMatches(){
    axios.get("/getAnimalDescription")
    .then((response) => {
      console.log(response.data); 
      this.setState({description:response.data})
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  render() {
    return (
      <FadeIn>
        <Container >
          <PhotoDisplay animalImg={this.state.description.image} alt={"Image failed to load"} />
          <AnimalDescription description={this.state.description}/>
          <Button color= ""  onClick={this.yesClick}>
            <FaHeart className="button_design" title="Yes" />
          </Button>
          <Button color= "" onClick={this.noClick}>
            <FaTimes className="button_design" title="No" />
          </Button>
          <DisplayMatches />
        </Container>
      </FadeIn>
    );
  }
}

export default MatchPage;
