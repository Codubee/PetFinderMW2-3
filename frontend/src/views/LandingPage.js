import React from 'react';
import Features from '../components/Features';
import Explantion from '../components/Explanation.js'
import Team from '../components/Team.js'
import Tools from '../components/Tools'
import FadeIn from 'react-fade-in';

function LandingPage(){
    return(
      <FadeIn>
        <div>
            <Explantion/>
            <Features/>
            <Tools/>
            <Team/>
        </div>
      </FadeIn>
    );
}

export default LandingPage;
