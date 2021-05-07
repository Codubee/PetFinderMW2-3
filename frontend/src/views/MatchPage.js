import React from "react";
import FadeIn from "react-fade-in";
import PhotoDisplay from "../components/PhotoDisplay";

import animalImg from "../images/DisplayTest.jpg"
import AnimalDescription from '../components/AnimalDescription';
import { Button, Container } from "reactstrap";
import { FaHeart, FaTimes } from 'react-icons/fa'
import DisplayMatches from '../components/DisplayMatches'

import "../style/Buttons.css";

class MatchPage extends React.Component {
  render() {
    return (
      <FadeIn>
        <Container >
          <PhotoDisplay animalImg={animalImg} alt={"Image failed to load"} />
          <AnimalDescription />
          <Button color="">
            <FaHeart className="button_design" title="Yes" />
          </Button>
          <Button color="">
            <FaTimes className="button_design" title="No" />
          </Button>
          <DisplayMatches />
        </Container>
      </FadeIn>
    );
  }
}

export default MatchPage;
