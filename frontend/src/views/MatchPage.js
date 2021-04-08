import React from "react";
import FadeIn from "react-fade-in";
import DisplayAnimalDescription from '../components/DisplayAnimalDescription';

function MatchPage() {
  return (
    <FadeIn>
      <div>  
        <DisplayAnimalDescription />
        <h1>Match Page Component</h1>
      </div>
    </FadeIn>
  );
}

export default MatchPage;