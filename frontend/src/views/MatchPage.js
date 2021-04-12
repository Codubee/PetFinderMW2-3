import React from "react";
import FadeIn from "react-fade-in";
import PhotoDisplay from "../components/PhotoDisplay";

import animalImg from "../images/DisplayTest.jpg"

function MatchPage() {
  return (
    <FadeIn>
      <div>
        {/* Insert your created components here */}
        <PhotoDisplay animalImg={animalImg} alt={"Image failed to load"}/>
        <h1>Match Page Component</h1>
      </div>
    </FadeIn>
  );
}

export default MatchPage;