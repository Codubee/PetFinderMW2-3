import React from "react";
import FadeIn from "react-fade-in";
import {ButtonToggle, Container } from "reactstrap";
import {FaHeart, FaTimes} from 'react-icons/fa'

import '../style/Buttons.css'

function MatchPage() {
  return (
    <FadeIn>
      <div>
        <Container >
          <ButtonToggle color="white">
            <FaHeart className="button_design" title= "Yes"/>
          </ButtonToggle>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <ButtonToggle color="white">
            <FaTimes className="button_design" title= "No" />
          </ButtonToggle>
        </Container>

      </div>
    </FadeIn>
  );
}

export default MatchPage;
