import React from "react";
import FadeIn from "react-fade-in";
import PhotoDisplay from "../components/PhotoDisplay";

<<<<<<< HEAD
import animalImg from "../images/DisplayTest.jpg";
import AnimalDescription from "../components/AnimalDescription";
import { Button, Container } from "reactstrap";
import { FaHeart, FaTimes } from "react-icons/fa";
=======
import animalImg from "../images/DisplayTest.jpg"
import AnimalDescription from '../components/AnimalDescription';
import {Button, Container } from "reactstrap";
import {FaHeart, FaTimes} from 'react-icons/fa';
>>>>>>> 9db176f6b268d490de7210118584aa29aab3322a

import "../style/Buttons.css";

function MatchPage() {
  return (
    <FadeIn>
<<<<<<< HEAD
      <Container>
        <PhotoDisplay animalImg={animalImg} alt={"Image failed to load"} />
        <AnimalDescription />
        <Button color="">
          <FaHeart className="button_design" title="Yes" />
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button color="">
          <FaTimes className="button_design" title="No" />
        </Button>
      </Container>
=======
        <Container >
          <PhotoDisplay animalImg={animalImg} alt={"Image failed to load"}/>
          <AnimalDescription />
          <Button color="">
            <FaHeart className="button_design" title= "Yes"/>
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button color="">
            <FaTimes className="button_design" title= "No" />
          </Button>
        </Container>
>>>>>>> 9db176f6b268d490de7210118584aa29aab3322a
    </FadeIn>
  );
}

export default MatchPage;
