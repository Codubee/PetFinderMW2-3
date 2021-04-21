import React from "react";
import FadeIn from "react-fade-in";
import AnimalDescription from "../components/AnimalDescription";
import { Button, Container } from "reactstrap";
import { FaHeart, FaTimes } from "react-icons/fa";

import "../style/Buttons.css";

function MatchPage() {
  return (
    <FadeIn>
      <AnimalDescription />
      <Container>
        <Button color="">
          <FaHeart className="button_design" title="Yes" />
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button color="">
          <FaTimes className="button_design" title="No" />
        </Button>
      </Container>
    </FadeIn>
  );
}

export default MatchPage;
