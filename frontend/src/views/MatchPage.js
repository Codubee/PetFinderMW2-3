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
            <FaHeart className="button_design" />
          </ButtonToggle>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <ButtonToggle color="white">
            <FaTimes className="button_design" />
          </ButtonToggle>
        </Container>

      </div>
    </FadeIn>
  );
}

export default MatchPage;
